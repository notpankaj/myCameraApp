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
      containerStyle={{height: 410, backgroundColor: COLORS.primaryBg}}
      gestureEnabled={true}>
      <View style={{flex: 1, paddingHorizontal: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BoldText text="3" style={{fontSize: 25}} />
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

        <TouchableOpacity
          style={{
            height: 40,
            width: '100%',
            backgroundColor: 'skyblue',
            borderRadius: 10,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            Subscribe
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <SmallText text="invite Friends" style={{color: '#238ee6'}} />
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <RegularText text="Do not have account yet?." />

          <TouchableOpacity>
            <RegularText text="Create An Account" style={{color: '#238ee6'}} />
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
