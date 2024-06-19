import React, { PropsWithChildren, createContext, useState } from 'react'

type UserInfo = {
    username: string
}

type AuthentificationState = {
    token: string | undefined,
    setToken: (token: string | undefined) => void,
    userInfo?: UserInfo,
    setUserInfo: (userInfo: UserInfo) => void
};

export const AuthentificationContext = createContext<AuthentificationState | undefined>(undefined);

export const AuthentificationProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
    const [token, setToken] = useState<string | undefined>();
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>();

    return (
        <AuthentificationContext.Provider value={{token, setToken, userInfo, setUserInfo}}>
            {children}
        </AuthentificationContext.Provider>
    )
}
