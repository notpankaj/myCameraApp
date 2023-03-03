import {View, Text, Alert, BackHandler} from 'react-native';
import React, {useEffect} from 'react';

const useBackHandler = () => {
  function handleBackButtonClick() {
    Alert.alert('EXIT', 'Are You Sure Want To Exit!');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  return null;
};

export default useBackHandler;
