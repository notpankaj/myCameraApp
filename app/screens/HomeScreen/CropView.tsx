import {View, StyleSheet} from 'react-native';
import React, {useRef} from 'react';

type Props = {
  imageUri: string;
};

const CropView = ({imageUri}: Props) => {
  let cropperRef = useRef(null).current;

  return (
    <View style={[StyleSheet.absoluteFill, {backgroundColor: 'pink'}]}></View>
  );
};

export default CropView;
