// import React from 'react';
// import {Text, TouchableOpacity, View, FlatList, Dimensions} from 'react-native';
// import ActionSheet, {
//   SheetManager,
//   SheetProps,
// } from 'react-native-actions-sheet';
// import {COLORS} from '../helper/COLOR';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {HISTORY_SHEET, RESULT_SHEET} from './types';

// const DATA = [
//   {
//     title: 'Question 1',
//     des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, atque repellat? Quisquam officia, quasi placeat tempora quae voluptate minima itaque.',
//   },
//   {
//     title: 'Question 2',
//     des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, atque repellat? Quisquam officia, quasi placeat tempora quae voluptate minima itaque.',
//   },
// ];

// const {width: WIDTH} = Dimensions.get('window');
// function HistorySheet(props: SheetProps) {
//   const handleClose = () => {
//     SheetManager.hide(HISTORY_SHEET);
//   };
//   return (
//     <ActionSheet
//       id={props.sheetId}
//       containerStyle={{height: WIDTH * 1.7, backgroundColor: COLORS.primaryBg}}
//       gestureEnabled={false}>
//       <View style={{flex: 1, paddingHorizontal: 30}}>
//         <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
//           History
//         </Text>
//         <TouchableOpacity
//           onPress={handleClose}
//           style={{
//             width: 30,
//             height: 30,
//             backgroundColor: 'tomato',
//             borderRadius: 30,
//             position: 'absolute',
//             top: 10,
//             right: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <FontAwesome name="close" color="white" size={20} />
//         </TouchableOpacity>
//         <FlatList
//           data={DATA}
//           contentContainerStyle={{paddingVertical: 50}}
//           keyExtractor={item => item.title}
//           renderItem={({item}) => {
//             return (
//               <TouchableOpacity
//                 onPress={() => {
//                   SheetManager.hide(HISTORY_SHEET);
//                   SheetManager.show(RESULT_SHEET);
//                 }}
//                 style={{
//                   backgroundColor: 'white',
//                   padding: 10,
//                   borderRadius: 10,
//                   marginBottom: 10,
//                 }}>
//                 <Text style={{fontSize: 15, fontWeight: 'bold'}}>
//                   {item.title}
//                 </Text>
//                 <Text style={{fontSize: 12}}>{item.des}</Text>
//               </TouchableOpacity>
//             );
//           }}
//         />
//       </View>
//     </ActionSheet>
//   );
// }

// export default HistorySheet;

export {};
