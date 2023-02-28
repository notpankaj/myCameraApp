import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../helper/COLOR';
import Feather from 'react-native-vector-icons/Feather';
import {BoldText, RegularText, SmallText} from '../../../components/MyText';
import GradientWrapper from '../../../components/GradientWrapper';

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
  return (
    <DrawerPageContainer title="Try AskMojo Plus!" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <ScrollView
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 10,
          }}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingVertical: 12,
          }}>
          <BoldText text="Get access to: " />

          <View>
            {list.map(i => {
              return (
                <View key={i} style={{flexDirection: 'row', marginBottom: 10}}>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 25,
                      borderColor: COLORS.accentOne,
                      borderWidth: 0.7,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Feather name="check" color={COLORS.accentOne} />
                  </View>
                  <SmallText text={i} />
                </View>
              );
            })}
          </View>

          <View style={{flexDirection: 'row', gap: 10, marginVertical: 40}}>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderRadius: 10,
                flex: 1,
                height: 150,
                borderColor: COLORS.textLight,
                justifyContent: 'space-evenly',
              }}>
              <SmallText text="Month to Month" />
              <RegularText text="Only $8.99 / Month" />
              <SmallText text="14 Days Trail" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                height: 150,
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'space-evenly',
                borderColor: COLORS.accentOne,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  position: 'absolute',
                  top: -30,
                  left: 40,
                  color: COLORS.accentOne,
                }}>
                50% off
              </Text>
              <SmallText text="Annual Subscription" />
              <RegularText text="Only $59.99 / Year" />
              <Text
                style={{
                  textDecorationLine: 'line-through',
                  fontSize: 10,
                  marginLeft: 5,
                }}>
                $120.99
              </Text>
              <SmallText text="14 Days Trail" />
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <GradientWrapper
                containerStyle={{
                  height: 40,
                  width: 130,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <RegularText text="START NOW" style={{color: COLORS.white}} />
              </GradientWrapper>
            </TouchableOpacity>

            <SmallText text="cancel any time  in the App Store" />

            <View style={{flexDirection: 'row'}}>
              <RegularText
                style={{color: COLORS.accentOne}}
                text="Terms of Services"
              />
              <RegularText text={'&'} />
              <RegularText
                style={{color: COLORS.accentOne}}
                text="Privacy Policy"
              />
            </View>
          </View>

          {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <BoldText text="Subscription Status" />
            <Text
              style={{
                backgroundColor: 'lightgreen',
                fontSize: 15,
                width: 100,
                textAlign: 'center',
                padding: 5,
              }}>
              active
            </Text>
          </View>
          <RegularText text="8 days left in your subscription" />
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <BoldText text="Renewal Date:" />
            <RegularText text="March 3rd, 2023" />
          </View>
          <BtnV1
            containerStyle={{width: 100, paddingVertical: 5, marginTop: 10}}
            text={'Renew'}
          />
          <BoldText text="Paln" style={{marginBottom: -10, marginTop: 10}} />
          <RegularText text="1 month subscription" />
          <BoldText text="Manage Subscription" style={{marginTop: 10}} />

          <View style={{flexDirection: 'row'}}>
            <RadioButton
              selected={selectedRadio === RADIO_TYPE.month}
              id="1"
              onPress={() => setSelectedRadio(RADIO_TYPE.month)}
              size={15}
            />
            <RegularText text="Month to month subscription: $2.99/month" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              selected={selectedRadio === RADIO_TYPE.year}
              id="2"
              size={15}
              onPress={() => setSelectedRadio(RADIO_TYPE.year)}
            />
            <RegularText text="Anual Subscription: $59.99/month" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              selected={selectedRadio === RADIO_TYPE.cancel}
              id="3"
              size={15}
              onPress={() => setSelectedRadio(RADIO_TYPE.cancel)}
            />
            <RegularText text="Cancel subscription" />
          </View>

          <BtnV1
            containerStyle={{width: 100, paddingVertical: 5, marginTop: 10}}
            text={'Update'}
          /> */}
        </ScrollView>
      </View>
    </DrawerPageContainer>
  );
};

export default Subscription;
