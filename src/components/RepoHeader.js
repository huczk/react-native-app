import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { baseStyles } from '../variables';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 50,
    marginVertical: 15,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  releases: {
    marginVertical: 15,
  },
});

const RepoHeader = ({
  repository: {
    name,
    description,
    language,
    stargazers_count: stars = 0,
    forks_count: forks = 0,
  } = {},
}) => (
  <React.Fragment>
    <View style={styles.header}>
      <Text style={baseStyles.textName}>{name}</Text>
    </View>

    <Text style={baseStyles.textDesc}>{description}</Text>

    <View style={styles.detailsContainer}>
      {language && (
        <Text style={baseStyles.textDetails}>{language}</Text>
      )}

      <Text style={baseStyles.textDetails}>
        stars:
        {' '}
        {stars}
      </Text>

      <Text style={baseStyles.textDetails}>
        forks:
        {' '}
        {forks}
      </Text>
    </View>

    <View style={styles.releases}>
      <Text style={styles.textName}>Releases:</Text>
    </View>
  </React.Fragment>
);

export default RepoHeader;
