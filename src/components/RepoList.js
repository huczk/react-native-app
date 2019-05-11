import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Subject } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import RepoInList from './RepoInList';
import { keyExtractor } from '../helpers';
import { getSearchedRepositories } from '../store/actions';

// subject for limiting request
const subject = new Subject().pipe(
  debounceTime(400),
  filter(params => Boolean(params.searchText) && params.page > 0),
  distinctUntilChanged((prev, curr) => (
    prev.searchText !== curr.searchText && prev.page !== curr.page
  )),
);

const RepoList = ({
  searchText = '',
  repositories = [],
  searchRepo = () => null,
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    subject.subscribe(searchRepo);
    return () => subject.unsubscribe();
  }, [searchRepo]);

  useEffect(() => {
    subject.next({ page, searchText });
  }, [page, searchText]);

  return (
    <FlatList
      data={repositories}
      keyExtractor={keyExtractor}
      onEndReached={() => setPage(page + 1)}
      renderItem={({ item }) => <RepoInList item={item} />}
    />
  );
};

const mapStateToProps = (
  { repositories = {}, search = {} },
  { searchText = '' },
) => ({
  repositories: search[searchText]?.map(id => repositories[id]) || [],
});

export default connect(mapStateToProps, { searchRepo: getSearchedRepositories })(RepoList);
