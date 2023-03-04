import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import {BoldText, RegularText} from '../../../components/MyText';
import {COLORS} from '../../../helper/COLOR';
import YoutubePlayer from 'react-native-youtube-iframe';
import {APP_NAME} from '../../../helper/constants';

const HelpScreen = () => {
  const navigation = useNavigation();
  return (
    <DrawerPageContainer title="Help and Support" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 20, flex: 0.98}}>
        <ScrollView
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 10,
            minHeight: 550,
            paddingHorizontal: 20,
            marginBottom: 10,
            elevation: 0.8,
          }}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
          showsVerticalScrollIndicator={false}>
          <BoldText style={{fontSize: 22}} text={`Intro to ${APP_NAME}`} />
          <RegularText text="Updated * 1 month ago" />
          <RegularText
            style={{
              color: COLORS.textLight,
              textAlign: 'left',
              marginVertical: 5,
              fontSize: 15,
            }}
            text="Welcome to the Chappie Help and Support Section!"
          />
          <RegularText
            style={{
              color: COLORS.textLight,
              textAlign: 'left',
              marginVertical: 5,
              fontSize: 15,
            }}
            text="Chappie is here to help you with all problems by providing you with the best answers and helping you to make the most out of the application.            "
          />
          <RegularText
            style={{
              color: COLORS.textLight,
              textAlign: 'left',
              marginVertical: 5,
              fontSize: 15,
            }}
            text="Watch the video below for step-by-step instructions on downloading and installing the app, creating an account, and using the photo scanner to get answers."
          />
          <RegularText
            style={{
              color: COLORS.textLight,
              textAlign: 'left',
              marginVertical: 5,
              fontSize: 15,
            }}
            text="If you have any questions or concerns that are not addressed in this section, please contact our customer support team by emailing them."
          />
          <View
            style={{
              height: 170,
              width: '100%',
              backgroundColor: COLORS.accentTwo,
              borderRadius: 10,
            }}>
            <YoutubePlayer
              height={200}
              // width={300}
              play={true}
              videoId={'iee2TATGMyI'}
            />
          </View>
        </ScrollView>
      </View>
    </DrawerPageContainer>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  image: {width: 75, height: 75, borderRadius: 75},
});
