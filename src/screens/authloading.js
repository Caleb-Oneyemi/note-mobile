import React, { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import Loading from '../components/Loading';

const AuthLoadingScreen = (props) => {
  const checkLoginState = async () => {
    const userToken = await SecureStore.getItemAsync('token');
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  
  useEffect(() => {
    checkLoginState();
  });

  return <Loading />;
};

export default AuthLoadingScreen;
