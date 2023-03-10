import {Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../helper/COLOR';
import {RegularText, SmallText} from './MyText';
import {FONTS} from '../../assets/fonts';

type Props = {
  title: string;
  priceDes: string;
  trialDetail: string;
  oldPrice?: string;
  discount?: string;
  active?: boolean;
  selectedColor?:string
};
const OfferBox = ({
  title,
  priceDes,
  oldPrice,
  trialDetail,
  discount,
  active,
  selectedColor
}: Props) => {
  const [selected, setSelected] = React.useState(active);
  return (
    <TouchableOpacity
      style={{
        justifyContent:"flex-end",
        alignItems: 'center',
        height: 180,
      }}>
      <SmallText
        style={{
          fontSize: 15,
          color: COLORS.accentOne,
        }}
        text={discount ? discount : ''}
      />
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          height: 160,
          paddingVertical:10,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: selected ? COLORS.accentOne : 'rgba(0,0,0,0.2)',
          backgroundColor: selected ? selectedColor ||'white' : 'transparent',
        }}>
        <RegularText text={title} style={{color: COLORS.textLight}} />
        <RegularText text={priceDes} />
        <Text
          style={{
            padding: 15,
            opacity:0.8,
            textDecorationLine: 'line-through',
            fontSize: 12,
            fontFamily: FONTS.Poppins,
          }}>
          {oldPrice ? oldPrice : ''}
        </Text>
        <SmallText
          text={trialDetail}
          style={{
            width: '80%',
            textAlign: 'center',
            color: COLORS.greenDark,
            backgroundColor: COLORS.greenLight,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default OfferBox;

{
  /* <TouchableOpacity
style={{
  flex: 1,
  height: 150,
  borderWidth: 1,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: COLORS.accentOne,
}}>
<SmallText
  style={{
    fontSize: 15,
    position: 'absolute',
    top: -30,
    left: 40,
    color: COLORS.accentOne,
  }}
  bold
  text={'50% off'}
/>
<RegularText
  bold
  text="Yearly"
  style={{color: COLORS.textLight}}
/>
<RegularText bold text="Only $59.99 / Year" />
<Text
  style={{
    padding: 15,
    textDecorationLine: 'line-through',
    fontSize: 10,
    fontFamily: FONTS.Poppins,
    fontWeight: 'bold',
  }}>
  $120.99
</Text>
<SmallText
  bold
  text="14 Days Free Trail"
  style={{
    width: '80%',
    textAlign: 'center',
    color: COLORS.greenDark,
    backgroundColor: COLORS.greenLight,
  }}
/>
</TouchableOpacity> */
}
