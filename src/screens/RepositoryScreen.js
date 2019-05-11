import React, { useRef, useCallback } from 'react';
import {
  View, Image, StyleSheet, FlatList, Animated,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';

import { getReleases } from '../store/actions';
import { colors, baseStyles } from '../variables';
import { RepoHeader, Release } from '../components';
import { keyExtractor } from '../helpers';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const styles = StyleSheet.create({
  header: {
    height: 40,
    width: '100%',
    backgroundColor: colors.WHITE,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: colors.BLUE_20,
    marginBottom: 20,
    position: 'absolute',
    left: '50%',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.BLUE_20,
  },
});

const RepositoryScreen = ({
  repository: {
    id,
    full_name: fullName,
    owner: {
      avatar_url: uri = '',
    } = {},
  } = {},
  repository,
  releases = [],
  dispatchReleases,
}) => {
  // create animated value
  const scrollY = useRef(new Animated.Value(0));
  // update amimated value
  const updateAnimated = useCallback(({ nativeEvent: { contentOffset } }) => (
    scrollY.current.setValue(contentOffset.y)
  ), []);
  // interpolations for avatar image
  const top = scrollY.current.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });
  const scale = scrollY.current.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0.4],
    extrapolate: 'clamp',
  });

  return (
    <React.Fragment>
      <NavigationEvents onDidFocus={() => dispatchReleases({ id, fullName })} />

      <View style={styles.header}>
        <AnimatedImage
          source={{ uri }}
          style={[styles.avatar, {
            top,
            transform: [{ translateX: -40 }, { scale }],
          }]}
        />
      </View>

      <FlatList
        data={releases}
        keyExtractor={keyExtractor}
        contentContainerStyle={baseStyles.paddingHorizontal}
        onScroll={updateAnimated}
        renderItem={Release}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => <RepoHeader repository={repository} />}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (
  { repositories = {}, releases = {} },
  { navigation },
) => {
  const { id } = navigation.state.params;

  return {
    repository: repositories[id],
    releases: releases[id],
  };
};

export default connect(mapStateToProps, { dispatchReleases: getReleases })(RepositoryScreen);
