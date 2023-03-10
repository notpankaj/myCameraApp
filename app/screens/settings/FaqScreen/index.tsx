import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Platform, UIManager} from 'react-native';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import {RegularText, SmallText} from '../../../components/MyText';
import {COLORS} from '../../../helper/COLOR';

import {AccordionItem} from 'react-native-accordion-list-view';
import {ScrollView} from 'react-native';
type AIProps = {
  title: string;
  body: string;
};
const AI = ({title, body}: AIProps) => {
  const [active, setActive] = React.useState(false);
  return (
    <AccordionItem
      customTitle={() => (
        <RegularText
          style={{
            color: COLORS.textDark,
            fontSize: 17,
          }}
          text={title}
        />
      )}
      customBody={() => <SmallText text={body} style={{fontSize: 12}} />}
      animationDuration={400}
      isOpen={false}
      onPress={isOpen => {
        if (isOpen) {
          setActive(true);
        } else {
          setActive(false);
        }
      }}
      containerStyle={{
        padding: 10,
        marginBottom: 10,
        borderWidth: active ? 1.5 : 0,
        borderColor: active ? COLORS.accentOne : 'white',
      }}
      customIcon={() => <></>}
    />
  );
};
const FaqScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      body: 'Ans, AskMojo is a mobile app that allows users to take a photo of a problem and receive solutions and explanations.',
      title: 'What is AskMojo?',
    },
    {
      body: 'Ans, The accuracy of answers is based on the collective knowledge and the AskMojo App extension does not alter or manipulate this information.',
      title: 'How does AskMojo ensure the accuracy of the answers it provides?',
    },
    {
      body: 'Ans, While AskMojo is primarily designed for academic purposes, it can be used to solve a wide variety of questions and puzzles that require factual answers. However, it should not be used for academic dishonesty.',
      title:
        'Can AskMojo be used for non-academic purposes, such as solving trivia questions or crossword puzzles?',
    },

    {
      body: 'Ans, AskMojo is primarily a search tool for finding specific answers, but it may sometimes provide explanations or context depending on the nature of the question and the available study sets.',
      title:
        'Is AskMojo able to provide explanations or step-by-step solutions to problems in addition to direct answers?',
    },

    {
      body: "Ans, AskMojo can search for questions and answers in a wide variety of supported languages including Spanish, French, German, Japanese, Chinese, and more. The language of the search is determined by the user's browser settings or the language of the Quizlet set being searched.",
      title:
        'Can an AskMojo search for answers in languages other than English?',
    },

    {
      body: 'Ans, AskMojo offers free attempts but after a while you need to buy the subscription. There is a monthly and annual subscription plan available. To get free bonus scans, you can refer the application to your friends as well.',
      title:
        'Is the AskMojo free to use, or do I need to pay for a subscription?',
    },
    {
      body: 'Ans, AskMojo can work with a wide variety of homework and test questions and it tries to provide the user with the best and most relevant answer.',
      title:
        'Does the AskMojo work with all types of homework and test questions, or are there any limitations?',
    },

    {
      body: 'Ans, AskMojo can sometimes provide definitions or explanations depending on the nature of the question. However, it is primarily designed to search for specific answers rather than general information.',
      title:
        'Can an AskMojo help me with finding definitions and explanations in addition to specific answers?',
    },

    {
      body: 'Ans, To use AskMojo effectively, be sure to enter your search query as specifically as possible, including any relevant keywords or phrases. You can also type in your question using the keyboard option to get the best result.',
      title:
        'How do I use an AskMojo effectively to get the best results from my searches?',
    },

    {
      body: 'Ans, Yes, AskMojo can solve handwritten math problems, but the handwriting needs to be clear and legible for accurate results.',
      title: 'Can AskMojo solve handwritten problems?',
    },

    {
      body: "Ans, The AskMojo can scan both printed and handwritten questions, as long as the handwriting is legible and the question is written in a language that the AskMojo is programmed to recognize.  \n However, it's important to note that AskMojo's accuracy may be affected by factors such as handwriting quality, lighting, and image resolution. To maximize the chances of getting an accurate answer, users should ensure that their images are well-lit and in focus, and that the handwriting is clear and easy to read. You can also type your question using the keyboard option.",
      title:
        'Can AskMojo scan handwritten questions, or does it only work with printed text?',
    },

    {
      body: 'Ans, If AskMojo does not provide a correct solution, users can report the problem and receive assistance from customer support.',
      title: 'Does AskMojo store or share user data?',
    },
    {
      body: 'Ans, The AskMojo may store user data, such as images of scanned questions, for the purpose of improving its algorithms and providing better service to users. \n However, the AskMojo has a clear privacy policy that outlines how user data is collected, stored, and used. Users should review the privacy policy and ensure that they are comfortable with the level of data collection and sharing before using the platform.',
      title: 'What if AskMojo does not provide a correct solution?',
    },
  ];

  const [openIndex, setOpenIndex] = useState<any>([]);
  console.log({openIndex});
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  React.useEffect(() => {}, [openIndex]);
  return (
    <DrawerPageContainer title="FAQs" onBack={navigation.goBack} iconContainerStyle={{display:'none'}} titleStyle={{fontWeight:'normal'}} >
      <View
        style={{
          paddingHorizontal: 10,
          flex: 0.9,
          backgroundColor: COLORS.primaryBg,
        }}>
        <View
          style={{
            borderRadius: 10,
          }}>
          <ScrollView style={styles.container}>
            {data.map((item, index) => {
              return <AI title={item.title} body={item.body} key={index} />;
            })}
          </ScrollView>
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
  },
});
