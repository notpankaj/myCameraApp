import React from 'react';
import {TextInput, Text, TouchableOpacity, View} from 'react-native';

function TypeQuestionScreen() {
  const [height, setHeight] = React.useState(250);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
      }}>
      {/* <View style={{flex: 1, paddingHorizontal: 30}}> */}
      <TextInput
        onFocus={() => setHeight(450)}
        onBlur={() => setHeight(250)}
        placeholder="Type a question"
        style={{
          borderRadius: 10,
          paddingHorizontal: 10,
          borderColor: 'gray',
          borderWidth: 0.4,
        }}
      />
      <TouchableOpacity
        style={{
          height: 40,
          width: '100%',
          backgroundColor: 'skyblue',
          borderRadius: 10,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
          Ask Question
        </Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
}

export default TypeQuestionScreen;
