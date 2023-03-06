import {View, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../../helper/COLOR';
import {BoldText, RegularText} from '../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonHeader from '../../components/CommonHeader';
import Voice from '@react-native-voice/voice';
const AudioQuestionScreen = () => {
  const [listening, setListening] = React.useState(false);
  const [result, setResult] = React.useState('');
  const [error, setError] = React.useState('');

  const startRec = async () => {
    console.log('startRec() ');
    try {
      const voiceAvailable = await Voice.isAvailable();
      const getSpeechRecognitionServices =
        await Voice.getSpeechRecognitionServices();
      console.log(voiceAvailable, 'voiceAvailable');
      console.log(getSpeechRecognitionServices, 'getSpeechRecognitionServices');
      // const res = await Voice.start('en-US');
      // const res = await Voice.start('en-US', {
      //   RECOGNIZER_ENGINE: 'services',
      //   EXTRA_PARTIAL_RESULTS: true,
      // });
      const res = await await Voice.start('en-US', {
        RECOGNIZER_ENGINE: 'GOOGLE',
        EXTRA_PARTIAL_RESULTS: true,
      });
      console.log('res 1', res);
    } catch (error) {
      console.log(error, 'error 1');
    }
  };
  const stopRec = async () => {
    console.log('stopRec');
    try {
      await Voice.stop();
    } catch (error) {
      console.log(error);
    }
  };
  const destroyRecognizer = async () => {
    console.log('destroyRecognizer()');
    try {
      await Voice.destroy();
    } catch (e) {
      console.log(e);
    }
  };

  //------LISTENERS START
  const onSpeechStart = () => {
    console.log('onSpeechStart');
    setListening(true);
  };
  const onSpeechResults = (r: any) => {
    console.log(r, 'onSpeechResults');
  };
  const onSpeechEnd = () => {
    console.log('onSpeechEnd');
    setListening(false);
  };
  const onSpeechError = (e: any) => {
    console.log('onSpeechError', e);
    destroyRecognizer();
  };
  //------LISTENERS END
  React.useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    return () => {
      destroyRecognizer().then(() => {
        Voice.removeAllListeners();
      });
    };
  }, []);
  return (
    <>
      <CommonHeader isLight />
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
          onPressIn={() => {
            startRec();
            setListening(true);
          }}
          onPressOut={() => {
            stopRec();
            setListening(false);
          }}
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
