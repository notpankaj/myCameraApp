import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import {BoldText, RegularText} from '../../../components/MyText';
import {COLORS} from '../../../helper/COLOR';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-clipboard/clipboard';
import GradientWrapper from '../../../components/GradientWrapper';
import QRCode from 'react-native-qrcode-svg';
import BtnV1 from '../../../components/BtnV1';
import {shareAPI} from '../../../helper';
import { APP_NAME } from '../../../helper/constants';

const InviteScreen = () => {
  const navigation = useNavigation();

  const [code, setCode] = React.useState( APP_NAME  +'1234');

  const onShare = async () => {
    shareAPI();
  };

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    ToastAndroid.show('code copied!', ToastAndroid.SHORT);
  };

  return (
    <DrawerPageContainer titleStyle={{fontWeight:'normal', }} title="Invite Friends" onBack={navigation.goBack} iconContainerStyle={{backgroundColor: COLORS.white}}  iconStyle={{tintColor: COLORS.textDark}} >
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <RegularText
          style={{textAlign: 'center', marginVertical: 25}}
          text="Invite friends and get 10 FREE scans everyday for every new player."
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              height: 280,
              width: 280,
            }}>
            <QRCode
              size={200}
              value={code}
              logoSize={100}
              logoBackgroundColor="transparent"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: COLORS.primaryBg,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            marginVertical: 20,

            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <RegularText text={`Code: ${code}`} />
        
          <TouchableOpacity>
            <GradientWrapper
              containerStyle={{
                borderRadius: 8,
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RegularText
                text={'COPY'}
                style={{color: COLORS.white, fontSize: 15, textAlign: 'center'}}
              />
            </GradientWrapper>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <RegularText
            style={{textAlign: 'center'}}
            text="Share this code via link:"
          />
          <View
            style={{
              borderColor: COLORS.accentOne,
              borderWidth: 1,
              borderRadius: 20,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              onPress={onShare}
              name={'share-alt'}
              size={10}
              color={COLORS.accentOne}
            />
          </View>
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default InviteScreen;

const styles = StyleSheet.create({
  image: {width: 150, height: 150, borderRadius: 10, padding: 25},
});
