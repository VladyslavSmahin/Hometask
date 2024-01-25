import {createContext} from "react";

export const DarkThemeContext = createContext({
    colorLinks: 'text-yellow-300',
    backgroundHeader: 'bg-slate-700',
    backgroundMain: 'bg-slate-500',
    backgroundFooter: 'bg-gray-900',
    textColor: 'text-yellow-100',
    textResume: 'text-gray-50',
    textGray200: 'text-yellow-100',
    textButton: 'Light Theme'
})
export const LightThemeContext = createContext({
    colorLinks: 'text-stone-600',
    backgroundFooter: 'bg-slate-200',
    backgroundHeader: 'bg-slate-100',
    backgroundMain: 'bg-slate-50',
    textColor: 'black',
    textGray200: 'text-black',
    textResume: 'text-zinc-500',
    textButton: 'Dark Theme'
})

