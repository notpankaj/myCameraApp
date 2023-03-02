import {View, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../../helper/COLOR';
import {BoldText, RegularText} from '../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonHeader from '../../components/CommonHeader';

const AudioQuestionScreen = () => {
  const [listening, setListening] = React.useState(false);
  return (
    <>
      <CommonHeader />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primaryBg,
          paddingHorizontal: 40,
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <BoldText
            text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aut sequi velit quisquam blanditiis quaerat maxime consequuntur veniam facilis? Quia ab perspiciatis labore est modi maxime unde sint nisi magni.`}
          />
        </View>

        <Pressable
          onPressIn={() => setListening(true)}
          onPressOut={() => setListening(false)}
          style={{
            width: 75,
            height: 75,
            borderRadius: 75,
            borderWidth: listening ? 8 : 1.5,
            borderColor: '#ec94d0',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: listening ? 'white' : '#e6e4e4',
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          {({pressed}) => {
            // if (pressed) {
            //   return (
            //     <FontAwesome
            //       name="microphone-slash"
            //       size={35}
            //       color={COLORS.textDark}
            //     />
            //   );
            // }
            return (
              <FontAwesome
                name="microphone"
                size={35}
                color={COLORS.textLight}
              />
            );
          }}
        </Pressable>

        <RegularText
          style={{textAlign: 'center'}}
          // text={listening ? 'Let go when done!' : 'Hold when speek!'}
          text={listening ? 'Let go when done!' : ''}
        />
      </View>
    </>
  );
};

export default AudioQuestionScreen;
