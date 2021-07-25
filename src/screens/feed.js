import React from 'react';
import { Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import NoteFeed from '../components/NoteFeed';

const GET_NOTES = gql`
  query notes {
    notes {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const Feed = (props) => {
  const { loading, error, data } = useQuery(GET_NOTES);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error loading notes</Text>;

  return <NoteFeed notes={data.notes} navigation={props.navigation} />;
};

Feed.navigationOptions = {
  title: 'Feed',
};

export default Feed;
