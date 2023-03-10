import React from 'react'
import { SafeAreaView ,StyleProp,ViewStyle} from 'react-native'
import { COLORS } from '../helper/COLOR'

type Props = {
    children: React.ReactNode;
    bgColor?: string;
    style?: StyleProp<ViewStyle>
}
const MainContainer = ({ children, bgColor,style }: Props) => {
    return <SafeAreaView 
    style={[{ flex: 1, backgroundColor: bgColor || COLORS.primaryBg },style]}>
        {children}
    </SafeAreaView>
}

export default MainContainer