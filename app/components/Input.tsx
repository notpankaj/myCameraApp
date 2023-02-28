import {View, Text, TextInput, ScrollView} from 'react-native';
import {COLORS} from '../helper/COLOR';
type InputProps = {
  placeholder: string;
  label: string;
};
const Input = ({placeholder, label}: InputProps) => {
  return (
    <View style={{width: '100%', paddingHorizontal: 10}}>
      {/* <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#000',
          textAlign: 'left',
        }}>
        {label}
      </Text> */}
      <TextInput
        placeholder={placeholder}
        style={{
          // backgroundColor: '#fff',
          borderColor: COLORS.textLight,
          borderWidth: 0.5,
          borderRadius: 10,
          paddingVertical: 12,
          paddingHorizontal: 10,
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default Input;
