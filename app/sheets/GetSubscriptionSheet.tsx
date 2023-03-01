import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {RadioButton} from 'react-native-radio-buttons-group';
import GradientWrapper from '../components/GradientWrapper';
import {BoldText, RegularText, SmallText} from '../components/MyText';
import {COLORS} from '../helper/COLOR';

const RADIO_TYPE = {
  month: 'month',
  year: 'year',
};
function GetSubscriptionSheet(props: SheetProps) {
  const [selectedRadio, setSelectedRadio] = React.useState(RADIO_TYPE.month);
  return (
    <ActionSheet
      id={props.sheetId}
      containerStyle={{height: 600, backgroundColor: COLORS.primaryBg}}
      gestureEnabled={true}>
      <View style={{flex: 1, paddingHorizontal: 30}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 60,
              borderColor: COLORS.accentTwo,
              backgroundColor: '#fdeaff',
            }}>
            <BoldText text="3" style={{fontSize: 35}} />
          </View>
          <BoldText text="Scans Remaining" style={{fontSize: 24}} />
        </View>

        <TouchableOpacity
          style={styles.dealBox}
          onPress={() => setSelectedRadio(RADIO_TYPE.month)}>
          <View>
            <BoldText text="Month to Month Subscription" />
            <SmallText text="$ 9.99 / Month" />
          </View>
          <RadioButton
            selected={selectedRadio === RADIO_TYPE.month}
            id="1"
            size={15}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dealBox}
          onPress={() => setSelectedRadio(RADIO_TYPE.year)}>
          <View>
            <BoldText text="Annual Subscription" />
            <SmallText text="$ 55.99 / Year (*50% off)" />
          </View>
          <RadioButton
            selected={selectedRadio === RADIO_TYPE.year}
            id="2"
            size={15}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{alignSelf: 'center', marginVertical: 10}}>
          <GradientWrapper
            containerStyle={{
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Subscribe
            </Text>
          </GradientWrapper>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <RegularText text="Invite friends and get 10 FREE scans for every new players" />

          <TouchableOpacity>
            <RegularText
              text="Invite Friends"
              style={{color: COLORS.accentOne, textDecorationLine: 'underline'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopColor: `rgba(0,0,0,0.3)`,
            borderTopWidth: 0.7,
          }}>
          <RegularText text="Do not have account yet?." />

          <TouchableOpacity>
            <RegularText
              text="Create an Account!"
              style={{color: COLORS.accentOne, textDecorationLine: 'underline'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
}

export default GetSubscriptionSheet;

const styles = StyleSheet.create({
  dealBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
});
