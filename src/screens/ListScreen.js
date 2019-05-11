import React, { useState } from 'react';
import {
  View, TextInput, Text, StyleSheet,
} from 'react-native';
import { RepoList } from '../components';
import { colors, baseStyles } from '../variables';

const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 8,
  },
  emptyContainer: {
    marginTop: 50,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.BLUE_20,
    padding: 8,
  },
  emptyText: {
    fontSize: 14,
    color: colors.BLUE,
    textAlign: 'center',
  },
});

const ListScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.screen}>
      <View style={[baseStyles.paddingHorizontal, styles.inputContainer]}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={value => setText(value)}
          placeholder="Search repository"
          clearButtonMode="while-editing"
        />
      </View>

      {text ? (
        <RepoList
          searchText={text}
        />
      ) : (
        <View style={[styles.container, styles.emptyContainer]}>
          <Text style={styles.emptyText}>
            Search repository to see results
          </Text>
        </View>
      )}
    </View>
  );
};

export default ListScreen;
