import {
  View,
  Image,
  Alert,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import TextRecognition from 'react-native-text-recognition';
import {BoldText} from '../../components/MyText';
import GradientWrapper from '../../components/GradientWrapper';
import {COLORS} from '../../helper/COLOR';
import {SheetManager} from 'react-native-actions-sheet';
import {TEMP_SHEET} from '../../sheets/types';
type Props = {
  imageUri: string;
  close: () => void;
};

const CropView = ({imageUri, close}: Props) => {
  const [loading, setLoading] = React.useState(false);
  const handleGoPress = async (path: string) => {
    setLoading(true);
    try {
      const res = await TextRecognition.recognize(path);
      console.log(res, 'res');
      SheetManager.show(TEMP_SHEET, {
        payload: {value: res.length !== 0 ? res : 'no text found!'},
      });
    } catch (error: any) {
      Alert.alert('Alert', error.message || 'something went wrong!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelPress = () => {
    close();
  };

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          zIndex: 1,
          paddingVertical: 100,
          paddingHorizontal: 50,
        },
      ]}>
      <View
        style={{
          width: '100%',

          flex: 1,
        }}>
        <Image
          source={{uri: imageUri}}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginTop: 50,
        }}>
        <TouchableOpacity
          disabled={loading}
          onPress={() => handleGoPress(imageUri)}>
          <GradientWrapper
            containerStyle={{
              width: 120,
              height: 40,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {loading ? (
              <ActivityIndicator color={COLORS.white} size="small" />
            ) : (
              <BoldText style={{color: COLORS.white}} text="GO" />
            )}
          </GradientWrapper>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCancelPress}>
          <GradientWrapper
            dark
            containerStyle={{
              width: 120,
              height: 40,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <BoldText style={{color: COLORS.white}} text="CANCEL" />
          </GradientWrapper>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CropView;
