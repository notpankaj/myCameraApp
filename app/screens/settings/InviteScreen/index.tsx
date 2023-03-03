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

const InviteScreen = () => {
  const navigation = useNavigation();

  const [code, setCode] = React.useState('Chappie123');

  const onShare = async () => {
    shareAPI();
  };

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    ToastAndroid.show('code copied!', ToastAndroid.SHORT);
  };

  return (
    <DrawerPageContainer title="Invite Friends" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <BoldText
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
              height: 220,
              width: 220,
            }}>
            <QRCode
              value={code}
              logoSize={50}
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
          <BoldText text={code} style={{}} />
          <BtnV1
            onPress={() => copyToClipboard(code)}
            containerStyle={{
              borderRadius: 5,
            }}>
            <RegularText
              text={'copy code'}
              style={{fontSize: 15, color: COLORS.white}}
            />
          </BtnV1>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BoldText
            style={{textAlign: 'center'}}
            text="Share this code via link:"
          />
          <FontAwesome
            onPress={onShare}
            name={'share-alt'}
            size={20}
            color={COLORS.accentOne}
          />
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default InviteScreen;

const styles = StyleSheet.create({
  image: {width: 150, height: 150, borderRadius: 10, padding: 25},
});
