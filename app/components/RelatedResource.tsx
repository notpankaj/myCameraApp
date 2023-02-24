import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BoldText, RegularText, SmallText} from './MyText';
import Octicons from 'react-native-vector-icons/Octicons';

import {COLORS} from '../helper/COLOR';

const dummyData = {
  title: 'How To Start And Stop A Car - YouTube',
  body: 'Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus ',
  link: 'https://www.youtube.com/watch?........=Videojug',
};

const RelatedResource = () => {
  return (
    <View style={{width: '100%', flex: 1}}>
      <RegularText text="Related Sources" style={{textAlign: 'center'}} />

      <View style={{flex: 1, backgroundColor: '#fff', borderRadius: 10}}>
        {[dummyData, dummyData, dummyData].map((item, index) => {
          return (
            <View
              key={index}
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 0.4,
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
              <RegularText text={item.title} />
              <SmallText text={item.body} />
              <TouchableOpacity
                style={{
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Octicons name="link" color={'black'} size={15} />
                <SmallText text={item.link} style={{color: COLORS.skyblue}} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RelatedResource;
