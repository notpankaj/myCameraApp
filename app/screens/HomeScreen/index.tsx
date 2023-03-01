import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerActions,
  useNavigation,
  useIsFocused,
} from '@react-navigation/native';
import {SheetManager} from 'react-native-actions-sheet';
import {
  ASK_QUESTION_SHEET,
  GET_SUBSCRIPTION_SHEET,
  HISTORY_SHEET,
} from '../../sheets/types';
import BtnV2 from '../../components/BtnV2';
import {COLORS} from '../../helper/COLOR';
import WelcomePopup from '../../components/WelcomePopup';
import CropView from './CropView';
import {SmallText} from '../../components/MyText';
import GradientWrapper from '../../components/GradientWrapper';
import {useDispatch, useSelector} from 'react-redux';
import {
  setTabBarVisiblity,
  tabBarVisibilitySelector,
} from '../../redux/features/theme/themeSlice';

const {width} = Dimensions.get('window');

type FlashType = {ON: 'on'; OFF: 'off'};
const FLASH: FlashType = {
  ON: 'on',
  OFF: 'off',
};

const TABS = {
  TYPE: 'TYPE',
  SCAN: 'SCAN',
  AUDIO: 'AUDIO',
  HISTORY: 'HISTORY',
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [welcomePopVisible, setWelcomePopVisible] = React.useState(true);
  const [isFullScreenMode, setIsFullScreenMode] = React.useState(false);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  const isFocused = useIsFocused();
  const camera = useRef<Camera>(null);
  const [flash, setFlash] = React.useState<'on' | 'off'>(FLASH.OFF);
  const [isCameraActive, setIsCameraActive] = React.useState(true);
  const [imageUrl, setImageUrl] = React.useState<null | string>(null);
  const [showImageModeOnValue, setShowImageModeOnValue] = React.useState(false);
  const navigation = useNavigation();
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
      const photo = await camera.current.takePhoto({});
      console.log(photo);

      showImageModeOn(`file://${photo.path}`);
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

  const pickPhotoFormGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });

      if (result.assets === undefined) return;
      const imageUrl = result?.assets[0];
      console.log(imageUrl, 'imageUrl');
      if (imageUrl?.uri) {
        showImageModeOn(imageUrl.uri);
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error?.messgae || 'Something Went Wrong!');
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

  const onHideWelcomePopup = () => {
    setWelcomePopVisible(false);
  };

  React.useEffect(() => {
    console.log('*****');
    setIsCameraActive(true);
    return () => setIsCameraActive(false);
  }, [navigation]);

  if (device == null)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  return (
    <View style={[styles.container]}>
      {/* @ts-ignore */}
      <WelcomePopup visible={welcomePopVisible} onHide={onHideWelcomePopup} />
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
          <View style={{flexDirection: 'row'}}>
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
                  borderRadius: 20,
                  padding: 5,
                  color: COLORS.white,
                }}>
                3 scans left
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 30}}>
            {/* <TouchableOpacity>
              <FontAwesome name="save" size={24} color="white" />
            </TouchableOpacity> */}
            <GradientWrapper
              containerStyle={{
                borderRadius: 20,
                width: 45,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SmallText
                style={{color: COLORS.white, fontSize: 9}}
                text={'PLUS +'}
              />
            </GradientWrapper>
            <TouchableOpacity
              onPress={() => {
                toggleTabBar(!isFullScreenMode);
                setIsFullScreenMode(!isFullScreenMode);
              }}>
              {isFullScreenMode ? (
                <MaterialIcons name="fullscreen-exit" size={24} color="white" />
              ) : (
                <Octicons name="screen-full" size={24} color="white" />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleFlash}>
              <MaterialCommunityIcons
                name={flash === FLASH.ON ? 'flash' : 'flash-off'}
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
          {showImageModeOnValue || (
            <View style={{flexDirection: 'column'}}>
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
          )}
        </View>
        {/* footer start */}
        <View style={{paddingBottom: 30}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {showImageModeOnValue ? null : (
              // <BtnV2 text="Cancel" onPress={hideImageModeOn} />
              <TouchableOpacity
                onPress={() => {
                  tookPhoto();
                }}
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: 'tomato',
                  borderRadius: 80,
                  borderWidth: 5,
                  borderColor: 'rgba(255,255,255,0.6)',
                }}
              />
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
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              gap: 20,
              paddingVertical: 20,
              backgroundColor: 'white',
              marginTop: 20,
              borderTopWidth: 5,
              borderTopColor: COLORS.pinkBorder,
              opacity: isFullScreenMode ? 0 : 1,
              display: isFullScreenMode ? 'none' : 'flex',
            }}>
            <TouchableOpacity
              onPress={() => {
                setActiveTab(TABS.TYPE);
                SheetManager.show(ASK_QUESTION_SHEET);
              }}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <FontAwesome
                color={
                  activeTab === TABS.TYPE ? COLORS.pinkBorder : COLORS.iconDark
                }
                size={25}
                name="keyboard-o"
              />
              <Text style={{fontSize: 9}}>Type</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveTab(TABS.SCAN);
                SheetManager.show(HISTORY_SHEET);
              }}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Entypo
                color={
                  activeTab === TABS.SCAN ? COLORS.pinkBorder : COLORS.iconDark
                }
                size={24}
                name="camera"
              />
              <Text style={{fontSize: 9}}>Scan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveTab(TABS.AUDIO);
                SheetManager.show(HISTORY_SHEET);
              }}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <FontAwesome5
                color={
                  activeTab === TABS.AUDIO ? COLORS.pinkBorder : COLORS.iconDark
                }
                size={24}
                name="microphone"
              />
              <Text style={{fontSize: 9}}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveTab(TABS.HISTORY);
                navigation.navigate('HistoryScreen');
              }}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <FontAwesome
                color={
                  activeTab === TABS.HISTORY
                    ? COLORS.pinkBorder
                    : COLORS.iconDark
                }
                size={24}
                name="history"
              />
              <Text style={{fontSize: 9}}>Past Answers</Text>
            </TouchableOpacity>
          </View> */}
        </View>
        {/* footer end */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack,
  },
});
