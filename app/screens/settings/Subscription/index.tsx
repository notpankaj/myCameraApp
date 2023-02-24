import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import BtnV1 from '../../../components/BtnV1';
import {COLORS} from '../../../helper/COLOR';
import {BoldText, RegularText} from '../../../components/MyText';
import {RadioButton} from 'react-native-radio-buttons-group';

const RADIO_TYPE = {
  month: 'month',
  year: 'year',
  cancel: 'cancel',
};
const Subscription = () => {
  const [selectedRadio, setSelectedRadio] = React.useState(RADIO_TYPE.month);
  const navigation = useNavigation();
  return (
    <DrawerPageContainer title="Subscription" onBack={navigation.goBack}>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          />
        </ScrollView>
      </View>
    </DrawerPageContainer>
  );
};

export default Subscription;
