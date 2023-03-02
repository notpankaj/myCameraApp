import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../helper/COLOR';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
    <View style={{flex: 1, backgroundColor: COLORS.primaryBg}}>
      {/* header start */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <BoldText text="Try AskMojo Plus!" style={{fontSize: 30}} />
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
          <AntDesign name="close" color={COLORS.textDark} size={15} />
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
                      borderWidth: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Feather size={20} name="check" color={COLORS.accentOne} />
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
              <SmallText
                text="14 Days Free Trail"
                style={{
                  margin: 10,
                  color: COLORS.greenDark,
                  backgroundColor: COLORS.greenLight,
                }}
              />
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
              <SmallText
                text="14 Days Free Trail"
                style={{
                  margin: 10,
                  color: COLORS.greenDark,
                  backgroundColor: COLORS.greenLight,
                }}
              />
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
                  borderRadius: 5,
                  marginBottom: 10,
                }}>
                <RegularText text="START NOW" style={{color: COLORS.white}} />
              </GradientWrapper>
            </TouchableOpacity>

            <SmallText text="Cancel any time  in the App Store" />

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
        </ScrollView>
      </View>
    </View>
  );
};

export default Subscription;
