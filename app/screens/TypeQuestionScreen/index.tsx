import React from 'react';
import {TextInput, Text, TouchableOpacity, View} from 'react-native';
import GradientWrapper from '../../components/GradientWrapper';
import {BoldText} from '../../components/MyText';
import {COLORS} from '../../helper/COLOR';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonHeader from '../../components/CommonHeader';

function TypeQuestionScreen() {
  const [height, setHeight] = React.useState(250);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 10,
      }}>
      <CommonHeader />
      <BoldText
        style={{textAlign: 'center', paddingVertical: 50}}
        text="What would like you to know?"
      />
      <TextInput
        onFocus={() => setHeight(450)}
        onBlur={() => setHeight(250)}
        placeholder="Type a question"
        style={{
          textAlign: 'left',
          verticalAlign: 'top',
          borderRadius: 10,
          paddingHorizontal: 10,
          flex: 0.8,
          fontSize: 16,
          color: COLORS.textLight,
        }}
      />
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <GradientWrapper
          containerStyle={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 10,
            height: 40,
            width: 180,
          }}>
          <MaterialCommunityIcons
            color={COLORS.white}
            size={24}
            name="lightbulb-on-outline"
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'white',
              paddingRight: 10,
            }}>
            Ask Question
          </Text>
        </GradientWrapper>
      </TouchableOpacity>
    </View>
  );
}

export default TypeQuestionScreen;
