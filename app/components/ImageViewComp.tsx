import {View, Text} from 'react-native';
import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
const ImageViewComp = ({imageUrl}: {imageUrl: string}) => {
  return (
    // <View style={[ {zIndex: 1}]}>
    <ImageViewer
      style={[StyleSheet.absoluteFill]}
      imageUrls={[{url: imageUrl}]}
      show={true}
      useNativeDriver={true}
      enableImageZoom={true}
    />
    // </View>
  );
};

export default ImageViewComp;
