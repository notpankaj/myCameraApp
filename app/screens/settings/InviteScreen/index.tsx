import {
  View,
  Text,
  Alert,
  Share,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import {BoldText} from '../../../components/MyText';
import {COLORS} from '../../../helper/COLOR';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-clipboard/clipboard';

const InviteScreen = () => {
  const navigation = useNavigation();

  const [code, setCode] = React.useState('QU!123X');

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
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
          text="Invite friends and get a bonus scanning times for every new player!"
        />

        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 10,
            minHeight: 350,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 10,
            }}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require('../../../../assets/icons/profile1.png')}
            />
            <Entypo name="arrow-with-circle-right" color={'black'} size={50} />
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require('../../../../assets/icons/profile2.png')}
            />
          </View>

          <View
            style={{
              backgroundColor: COLORS.primaryBg,
              marginHorizontal: 20,
              height: 60,
              borderRadius: 10,
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <BoldText text={code} style={{marginLeft: 40}} />
            <TouchableOpacity
              style={[
                {
                  backgroundColor: COLORS.accentTwo,
                  borderRadius: 10,
                  height: 60,
                  width: 150,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <FontAwesome name="copy" size={15} color={COLORS.white} />
              <Text
                onPress={() => copyToClipboard(code)}
                style={[
                  {
                    textAlign: 'center',
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginLeft: 10,
                  },
                ]}>
                Copy Code
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              alignItems: 'center',
            }}>
            <BoldText text="Share this code via link:" />
            <FontAwesome
              onPress={onShare}
              name={'share-alt-square'}
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default InviteScreen;

const styles = StyleSheet.create({
  image: {width: 75, height: 75, borderRadius: 75},
});
