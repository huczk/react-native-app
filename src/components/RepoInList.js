import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { colors, baseStyles } from '../variables';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: colors.BLUE_20,
  },
  InfoContainer: {
    marginLeft: 8,
    flex: 1,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  textDetails: {
    fontSize: 11,
    color: colors.BLUE_80,
    marginRight: 8,
  },
});

const RepoInList = ({
  item: {
    id,
    name = '',
    description = '',
    stargazers_count: stars = 0,
    forks_count: forks = 0,
    language = '',
    owner: {
      avatar_url: uri = '',
    } = {},
  } = {},
  navigation,
}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Repository', { id })}
    style={[styles.container, baseStyles.paddingHorizontal]}
  >
    <Image source={{ uri }} style={styles.avatar} />

    <View style={styles.InfoContainer}>
      <Text style={baseStyles.textName}>{name}</Text>
      <Text style={baseStyles.textDesc} numberOfLines={2}>{description}</Text>

      <View style={styles.detailsContainer}>
        {language && <Text style={styles.textDetails}>{language}</Text>}
        <Text style={styles.textDetails}>
          stars:
          {' '}
          {stars}
        </Text>
        <Text style={styles.textDetails}>
          forks:
          {' '}
          {forks}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default withNavigation(RepoInList);
