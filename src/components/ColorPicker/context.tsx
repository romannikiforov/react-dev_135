import React from 'react'
import { reducer, RGBColorType, Action } from '@picker/reducer'

type RGBContextType = RGBColorType & {
    dispatch: React.Dispatch<Action>
}

const RGBContext = React.createContext<RGBContextType>({} as RGBContextType);

export const RGBContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [rgb, dispatch] = React.useReducer(reducer, { red: 0, green: 0, blue: 0 })

    return <RGBContext.Provider value={{ ...rgb, dispatch }}>{children}</RGBContext.Provider>
}

export default RGBContext