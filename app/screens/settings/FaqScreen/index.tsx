import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Image, Platform, UIManager} from 'react-native';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import {BoldText, RegularText} from '../../../components/MyText';
import {COLORS} from '../../../helper/COLOR';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import YoutubePlayer from 'react-native-youtube-iframe';
import Input from '../../../components/Input';
import {AccordionList} from 'react-native-accordion-list-view';

const FaqScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      body: 'Answer: AskMojo is a mobile app that allows users to take a photo of a problem and receive solutions and explanations.',
      title: '1. What is AskMojo?',
    },
    {
      body: 'Answer: The accuracy of answers is based on the collective knowledge and the AskMojo App extension does not alter or manipulate this information.',
      title:
        '2. How does AskMojo ensure the accuracy of the answers it provides?',
    },
    {
      body: 'Answer: While AskMojo is primarily designed for academic purposes, it can be used to solve a wide variety of questions and puzzles that require factual answers. However, it should not be used for academic dishonesty.',
      title:
        '3. Can AskMojo be used for non-academic purposes, such as solving trivia questions or crossword puzzles?',
    },

    {
      body: 'Answer: AskMojo is primarily a search tool for finding specific answers, but it may sometimes provide explanations or context depending on the nature of the question and the available study sets.',
      title:
        '4. Is AskMojo able to provide explanations or step-by-step solutions to problems in addition to direct answers?',
    },

    {
      body: "Answer: AskMojo can search for questions and answers in a wide variety of supported languages including Spanish, French, German, Japanese, Chinese, and more. The language of the search is determined by the user's browser settings or the language of the Quizlet set being searched.",
      title:
        '5. Can an AskMojo search for answers in languages other than English?',
    },

    {
      body: 'Answer: AskMojo offers free attempts but after a while you need to buy the subscription. There is a monthly and annual subscription plan available. To get free bonus scans, you can refer the application to your friends as well.',
      title:
        '6. Is the AskMojo free to use, or do I need to pay for a subscription?',
    },
    {
      body: 'Answer: AskMojo can work with a wide variety of homework and test questions and it tries to provide the user with the best and most relevant answer.',
      title:
        '7. Does the AskMojo work with all types of homework and test questions, or are there any limitations?',
    },

    {
      body: 'Answer: AskMojo can sometimes provide definitions or explanations depending on the nature of the question. However, it is primarily designed to search for specific answers rather than general information.',
      title:
        '8. Can an AskMojo help me with finding definitions and explanations in addition to specific answers?',
    },

    {
      body: 'Answer: To use AskMojo effectively, be sure to enter your search query as specifically as possible, including any relevant keywords or phrases. You can also type in your question using the keyboard option to get the best result.',
      title:
        '9. How do I use an AskMojo effectively to get the best results from my searches?',
    },

    {
      body: 'Answer: Yes, AskMojo can solve handwritten math problems, but the handwriting needs to be clear and legible for accurate results.',
      title: '10. Can AskMojo solve handwritten problems?',
    },

    {
      body: "Answer: The AskMojo can scan both printed and handwritten questions, as long as the handwriting is legible and the question is written in a language that the AskMojo is programmed to recognize.  \n However, it's important to note that AskMojo's accuracy may be affected by factors such as handwriting quality, lighting, and image resolution. To maximize the chances of getting an accurate answer, users should ensure that their images are well-lit and in focus, and that the handwriting is clear and easy to read. You can also type your question using the keyboard option.",
      title:
        '11. Can AskMojo scan handwritten questions, or does it only work with printed text?',
    },

    {
      body: 'Answer: If AskMojo does not provide a correct solution, users can report the problem and receive assistance from customer support.',
      title: '13. Does AskMojo store or share user data?',
    },
    {
      body: 'Answer: The AskMojo may store user data, such as images of scanned questions, for the purpose of improving its algorithms and providing better service to users. \n However, the AskMojo has a clear privacy policy that outlines how user data is collected, stored, and used. Users should review the privacy policy and ensure that they are comfortable with the level of data collection and sharing before using the platform.',
      title: '12. What if AskMojo does not provide a correct solution?',
    },
  ];

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  return (
    <DrawerPageContainer title="FAQ" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 10,
            flex: 0.98,
            paddingHorizontal: 20,
          }}>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.primaryBg,
              paddingHorizontal: 10,
              marginVertical: 10,
              borderRadius: 10,
            }}>
            <FontAwesome name="search" size={24} color="black" />
            <TextInput placeholder="Search topics or questions" />
          </View> */}
          <View style={styles.container}>
            <AccordionList
              customIcon={() => <></>}
              data={data}
              customTitle={item => (
                <Text
                  style={{
                    borderBottomColor: '#000',
                    borderBottomWidth: 0.5,
                    width: '100%',
                  }}>
                  {item.title}
                </Text>
              )}
              customBody={item => (
                <Text
                  style={{
                    backgroundColor: COLORS.primaryBg,
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  {item.body}
                </Text>
              )}
              animationDuration={400}
              expandMultiple={false}
            />
          </View>
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default FaqScreen;

const styles = StyleSheet.create({
  image: {width: 75, height: 75, borderRadius: 75},
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '100%',
    backgroundColor: 'white',
  },
});
