import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findTopRatedMovies } from '../../actions/movies';
import { FlatList, RefreshControl } from 'react-native';
import { List } from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';
import { Container, Content, Header } from '../../components';

const TopRatedMoviesScreen = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(-1);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTopRatedMovies(page + 1));
  }, [dispatch]);

  const { data: storeData, loading: storeLoading, error: storeError } = useSelector(state => state.topRatedMovies);
  useEffect(() => {
    if (storeData && page != storeData.page) {
      setPage(storeData.page);
      setTotalPages(storeData.total_pages);
      setData([...data, ...storeData.results]);
    }
  }, [storeData]);

  const renderItem = ({ item }) => {
    return (
      <List.Item
        title={item.title}
        description={item.overview}
        descriptionNumberOfLines={0}
        left={props =>
          <AutoHeightImage {...props}
            source={{ uri: 'http://image.tmdb.org/t/p/w92' + item.poster_path }}
            width={92} />
        }
      />
    );
  };

  const onRefresh = () => {
    setPage(0);
    dispatch(findTopRatedMovies(page + 1));
  };

  const onEndReached = () => {
    if (page < totalPages || totalPages > -1) {
      dispatch(findTopRatedMovies(page + 1));
    }
  };

  return (
    <Container>
      <Header title="Movies" />
      <Content>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={storeLoading} onRefresh={onRefresh} />
          }
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
      </Content>
    </Container>
  );
};

export default TopRatedMoviesScreen;
