import React from 'react'
import { SafeAreaView } from 'react-native'
import { COLORS } from '../helper/COLOR'

type Props = {
    children: React.ReactNode;
    bgColor?: string
}
const MainContainer = ({ children, bgColor }: Props) => {
    return <SafeAreaView 
    style={{ flex: 1, backgroundColor: bgColor || COLORS.primaryBg }}>
        {children}
    </SafeAreaView>
}

export default MainContainer