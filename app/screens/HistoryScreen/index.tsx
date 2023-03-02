import React from 'react';
import {Text, TouchableOpacity, View, FlatList, Dimensions} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {COLORS} from '../../helper/COLOR';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BoldText, RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {RESULT_SHEET} from '../../sheets/types';
import {AccordionList} from 'react-native-accordion-list-view';

const DATA = [
  {
    title: 'Why recently young people do not want to get married?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
  {
    title: 'How to write an essay?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
  {
    title: 'Why recently young people do not want to get married?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
  {
    title: 'How to write an essay?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
  {
    title: 'Why recently young people do not want to get married?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
  {
    title: 'How to write an essay?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
  {
    title: 'Why recently young people do not want to get married?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
  {
    title: 'How to write an essay?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
];

const {width: WIDTH} = Dimensions.get('window');
function HistoryScreen() {
  const [favFilter, setFavFilter] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: COLORS.primaryBg,
      }}>
      {/* header start */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{
            width: 30,
            height: 30,
            backgroundColor: COLORS.white,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="close" color={COLORS.textDark} size={15} />
        </TouchableOpacity>
        <BoldText
          text="History"
          style={{fontSize: 33, textAlign: 'center', paddingTop: 10}}
        />
        <TouchableOpacity
          onPress={() => {
            setFavFilter(s => !s);
          }}
          style={{
            width: 30,
            height: 30,
            backgroundColor: COLORS.white,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign
            name={favFilter ? 'star' : 'staro'}
            color={COLORS.textDark}
            size={15}
          />
        </TouchableOpacity>
      </View>
      {/* header end */}
      <AccordionList
        style={{marginBottom: 10}}
        containerItemStyle={{
          padding: 5,
          marginBottom: 10,
          elevation: 1,
        }}
        customIcon={() => <></>}
        data={DATA}
        customTitle={item => (
          <BoldText
            text={item.title}
            style={{fontSize: 19, fontWeight: 'bold', color: COLORS.textDark}}
          />
        )}
        customBody={item => (
          <RegularText text={item.des} style={{fontSize: 14}} />
        )}
        animationDuration={140}
        expandMultiple={true}
      />
    </View>
  );
}

export default HistoryScreen;
