import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../helper/COLOR';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BoldText, RegularText, SmallText} from '../../../components/MyText';
import GradientWrapper from '../../../components/GradientWrapper';
import {api_stripePayment} from '../../../api';
import {
  initPaymentSheet,
  presentPaymentSheet,
} from '@stripe/stripe-react-native';
import {myAlert} from '../../../helper/myAlert';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import {FONTS} from '../../../../assets/fonts';
import MainContainer from '../../../components/MainContainer';
import OfferBox from '../../../components/OfferBox';
import AppIcon from '../../../components/icons/AppIcon';

const list = [
  'Free tail days',
  'Ask Unlimited Questions per day',
  'More detailed explainations to answers',
  'Skipping of Queue',
  'No Ads',
  'Canncel your subscription any time',
  'Unlock all Feature',
];
const Subscription = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const handleBuyPress = async () => {
    // const payload = {
    //   name: 'ravi',
    //   address: '53 street',
    //   postal_code: '99501',
    //   city: 'cal',
    //   state: 'california',
    //   country: 'US',
    //   product: {
    //     amount: '2000',
    //     des: 'asduhas asdas da',
    //   },
    // };
    // setLoading(true);
    // try {
    //   const res = await api_stripePayment(payload);
    //   console.log(res);
    // } catch (error: any) {
    //   console.log(error);
    //   Alert.alert('Alert', error.message);
    // } finally {
    //   setLoading(false);
    // }
    await presentPaymentSheet();
    myAlert({type: ALERT_TYPE.SUCCESS, title: 'SUCCESS', textBody: 'SUCCESS'});
  };

  const initializePaymentSheet = async () => {
    const {paymentIntent, ephemeralKey, customer} = {
      paymentIntent:
        'pi_3MhB6BSFJgtn9Lb90VD846cB_secret_Er8oehuB7n9tjPfknDS3nhoFE',
      customer: 'cus_NS5GH5IhCx4Rz2',
      ephemeralKey:
        'ek_test_YWNjdF8xTTBMMlZTRkpndG45TGI5LHptQk9WMzFmbWpsSmdGTXV1azNkR0xRRjluM2hXQ1E_00zeep3hHj',
    };
    console.log({paymentIntent, ephemeralKey, customer});
    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,

      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    });
  };

  React.useEffect(() => {
    initializePaymentSheet();
  }, []);
  return (
    <>
    <MainContainer>
      <View style={{flex: 1, backgroundColor: COLORS.primaryBg}}>
        {/* header start */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <RegularText text="Try Chappie Plus!" style={{fontSize: 30}} />
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{
              width: 30,
              height: 30,
              backgroundColor: COLORS.white,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: 25,
            }}>
            <Ionicons name="close" color={'#000'} size={20} />
          </TouchableOpacity>
        </View>
        {/* header end */}
        <View style={{paddingHorizontal: 20, flex: 0.95}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 10,
              elevation: 1,
            }}
            contentContainerStyle={{
              paddingHorizontal: 10,
              paddingVertical: 12,
            }}>
            <RegularText style={{fontSize:20 , marginBottom:10}} text="Get access to: " />

            <View>
              {list.map(i => {
                return (
                  <View
                    key={i}
                    style={{flexDirection: 'row', marginBottom: 10,
                    
                    alignItems: 'center',}}>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 20,
                        borderColor: COLORS.accentOne,
                        borderWidth: 1.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Feather
                        size={12}
                        name="check"
                        color={COLORS.accentOne}
                      />
                    </View>
                    <RegularText text={i} />
                  </View>
                );
              })}
            </View>

            <View style={{flexDirection: 'row', gap: 10, justifyContent:'center',marginVertical: 40}}>
              <OfferBox
                title={'Monthly'}
                priceDes={'Only $8.99 / Month'}
                trialDetail={'14 Days Free Trail'}
                selectedColor={COLORS.primaryBg}
              />

              <OfferBox
                title={'Yearly'}
                priceDes={'Only $59.99 / Year'}
                oldPrice={'$120.99'}
                trialDetail={'14 Days Free Trail'}
                discount={'50% off'}
                active
                selectedColor={COLORS.primaryBg}
              />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={handleBuyPress}>
                <GradientWrapper
                  containerStyle={{
                    height: 40,
                    width: 130,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8,
                    marginBottom: 10,
                  }}
                  reverse>
                  {loading ? (
                    <ActivityIndicator size={'small'} color={'white'} />
                  ) : (
                    <RegularText text="START NOW" style={{color: COLORS.white, fontSize:18}} />
                  )}
                </GradientWrapper>
              </TouchableOpacity>

              <SmallText text="Cancel any time  in the App Store" />

              <View style={{flexDirection: 'row'}}>
                <RegularText
                  style={{color: COLORS.accentOne}}
                  text="Terms of Services"
                />
                <RegularText text={'&'} bold />
                <RegularText
                 
                  style={{color: COLORS.accentOne}}
                  text="Privacy Policy"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </MainContainer>
   <SafeAreaView style={{backgroundColor:COLORS.primaryBg, justifyContent:'center',alignItems:'center'}}>
  <AppIcon/>
   </SafeAreaView>
    </>
  );
};

export default Subscription;
