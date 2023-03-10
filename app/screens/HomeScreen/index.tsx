import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerActions,
  useNavigation,
  useIsFocused,
  NavigationProp,
} from '@react-navigation/native';
import {SheetManager} from 'react-native-actions-sheet';
import {GET_SUBSCRIPTION_SHEET} from '../../sheets/types';
import {COLORS} from '../../helper/COLOR';
import CropView from './CropView';
import {SmallText} from '../../components/MyText';
import {useDispatch, useSelector} from 'react-redux';
import {
  setTabBarVisiblity,
  tabBarVisibilitySelector,
} from '../../redux/features/theme/themeSlice';
import BtnV1 from '../../components/BtnV1';
import ImagePicker from 'react-native-image-crop-picker';
import {APP_NAME} from '../../helper/constants';
import {RootStackParams} from '../../navigation/types';
import QuestionMark from '../../components/icons/QuestionMark';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MainContainer from '../../components/MainContainer';

const {width} = Dimensions.get('window');

type FlashType = {ON: 'on'; OFF: 'off'};
const FLASH: FlashType = {
  ON: 'on',
  OFF: 'off',
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [isFullScreenMode, setIsFullScreenMode] = React.useState(false);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  const isFocused = useIsFocused();
  const camera = useRef<Camera>(null);
  const [flash, setFlash] = React.useState<'on' | 'off'>(FLASH.OFF);
  const [isCameraActive, setIsCameraActive] = React.useState(true);
  const [imageUrl, setImageUrl] = React.useState<null | string>(null);
  const [showImageModeOnValue, setShowImageModeOnValue] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const askForPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission, 'newCameraPermission');
  };
  const tabVisible = useSelector(tabBarVisibilitySelector);
  const openDrawer = () => {
    navigation?.dispatch(DrawerActions.openDrawer());
  };

  const toggleFlash = () => {
    setFlash(s => (s === FLASH.ON ? FLASH.OFF : FLASH.ON));
  };
  const tookPhoto = async () => {
    if (camera.current === null) return;
    try {
      const snapshot = await camera.current.takeSnapshot({
        quality: 100,
        skipMetadata: true,
      });
      const imagePath = `file://${snapshot.path}`;
      openImageCroper(imagePath);
    } catch (err: any) {
      console.log(err, 'err');
    }
  };

  const toggleTabBar = (bool: boolean) => {
    dispatch(setTabBarVisiblity(!tabVisible));
  };

  const showImageModeOn = (uri: string) => {
    setIsCameraActive(false);
    setShowImageModeOnValue(true);
    setImageUrl(uri);
  };
  const hideImageModeOn = () => {
    setIsCameraActive(true);
    setShowImageModeOnValue(false);
    setImageUrl(null);
  };

  const openImageCroper = (imagePath: string) => {
    // @ts-ignore
    ImagePicker.openCropper({
      path: imagePath,
      freeStyleCropEnabled: true,
      cropperToolbarTitle: '',
      cropperActiveWidgetColor: COLORS.accentOne,
      cropperToolbarWidgetColor: COLORS.accentOne,
    })
      .then(image => {
        console.log(image, 'image');
        showImageModeOn(image.path);
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };

  const pickPhotoFormGallery = async () => {
    // try {
    //   const result = await launchImageLibrary({
    //     mediaType: 'photo',
    //   });

    //   if (result.assets === undefined) return;
    //   const imageUrl = result?.assets[0];
    //   console.log(imageUrl, 'imageUrl');
    //   if (imageUrl?.uri) {
    //     showImageModeOn(imageUrl.uri);
    //   }
    // } catch (error: any) {
    //   console.log(error);
    //   Alert.alert('Alert', error?.messgae || 'Something Went Wrong!');
    // }
    try {
      const image = await ImagePicker.openPicker({
        cropping: true,
        freeStyleCropEnabled: true,
        cropperToolbarTitle: '',
        cropperActiveWidgetColor: COLORS.accentOne,
        cropperToolbarWidgetColor: COLORS.accentOne,
      });
      console.log(image);

      if (image?.path) {
        showImageModeOn(image.path);
      }
    } catch (error: any) {
      console.log(error);
      // Alert.alert('Alert', error?.messgae || 'Something Went Wrong!');
    }
  };

  React.useEffect(() => {
    const init = async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus();
      if (cameraPermission !== 'authorized') {
        askForPermission();
      }
      console.log(cameraPermission, 'cameraPermission');
    };
    init();
  }, []);

  React.useEffect(() => {
    setIsCameraActive(true);
    return () => setIsCameraActive(false);
  }, [navigation]);

  if (device == null)
    return (
      <MainContainer>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>{Platform.OS === 'ios' ? 'use real device!' : 'Loading'}</Text>
        </View>
      </MainContainer>
    );
  return (
    <MainContainer>
      <View style={[styles.container]}>
        {isFocused && (
          <Camera
            ref={camera}
            photo={true}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isCameraActive}
            torch={flash}
          />
        )}

        {imageUrl && <CropView imageUri={imageUrl} close={hideImageModeOn} />}
        <View style={styles.container}>
          {/* header start */}
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={openDrawer}>
                <Ionicons name="settings-sharp" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  SheetManager.show(GET_SUBSCRIPTION_SHEET);
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    borderColor: COLORS.white,
                    borderWidth: 0.9,
                    borderRadius: 5,
                    color: COLORS.white,
                    padding: 5,
                    paddingHorizontal: 12,
                  }}>
                  3 Times Left
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <BtnV1 containerStyle={{padding: 1, borderRadius: 5}}>
                <SmallText
                  bold
                  style={{
                    color: COLORS.white,
                    fontSize: 11,
                    paddingHorizontal: 12,
                  }}
                  text={'plus +'}
                />
              </BtnV1>
              <TouchableOpacity
                onPress={() => {
                  toggleTabBar(!isFullScreenMode);
                  setIsFullScreenMode(!isFullScreenMode);
                }}>
                {isFullScreenMode ? (
                  <MaterialIcons
                    name="fullscreen-exit"
                    size={24}
                    color="white"
                  />
                ) : (
                  <Octicons name="screen-full" size={24} color="white" />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleFlash}>
                <MaterialCommunityIcons
                  name={flash === FLASH.ON ? 'flash-off' : 'flash'}
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* header end */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* {tabVisible && (
            <View
              style={{
                flexDirection: 'column',
                display: !showImageModeOnValue ? 'flex' : 'none',
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  paddingBottom: 5,
                }}>
                Take a Picture of the Text
              </Text>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 2,
                  backgroundColor: 'transparent',
                  borderColor: COLORS.white,
                  width: width * 0.8,
                  height: 150,
                }}
              />
            </View>
          )} */}
          </View>
          {/* footer start */}
          <View style={{paddingBottom: 30}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <QuestionMark
                onPress={() => navigation.navigate('FaqScreen')}
                containerStyle={{
                  margin: 10,
                  position: 'absolute',
                  top: 25,
                  left: 20,
                }}
              />
              {showImageModeOnValue ? null : (
                <TouchableOpacity
                  onPress={() => {
                    tookPhoto();
                  }}
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: COLORS.white,
                    borderRadius: 80,
                    borderWidth: 5,
                    borderColor: 'rgba(255,255,255,0.6)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                    }}
                    source={require('../../../assets/icons/magic-starts.png')}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={pickPhotoFormGallery}
                style={{
                  margin: 10,
                  position: 'absolute',
                  top: 25,
                  right: 20,
                }}>
                <FontAwesome color={COLORS.white} size={24} name="image" />
              </TouchableOpacity>
            </View>
          </View>
          {/* footer end */}
        </View>
      </View>
    </MainContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.transparentBlack,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
