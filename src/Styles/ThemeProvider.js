import React from 'react'
import { useSelector } from 'react-redux'
import { darkTheme, lightTheme } from '../Theme/ThemeColors'
import { TitleTheme } from './Title'

const ThemeProvider = () => {
    const selectedTheme = useSelector(state => state.theme.currentTheme)

    const currentTheme = (selectedTheme) ? darkTheme : lightTheme;
    TitleTheme(currentTheme)

    return (
        <>
            
        </>
    )
}

export default ThemeProvider