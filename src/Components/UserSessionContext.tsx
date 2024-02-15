import React, { createContext, useState, useEffect } from 'react';

type UserSessionContextType = {
    userSession: any;
    setUserSession: React.Dispatch<React.SetStateAction<any>>;
};

export const UserSessionContext = createContext<UserSessionContextType | null>(
    null
);

export const UserSessionProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [userSession, setUserSession] = useState<any>(null);

    // Load any existing session from localStorage when the component mounts
    useEffect(() => {
        const storedSession = localStorage.getItem('userSession');
        if (storedSession) {
            setUserSession(JSON.parse(storedSession));
        }
    }, []);

    // Save the session to localStorage whenever it changes
    useEffect(() => {
        if (userSession) {
            localStorage.setItem('userSession', JSON.stringify(userSession));
        } else {
            localStorage.removeItem('userSession');
        }
    }, [userSession]);

    return (
        <UserSessionContext.Provider value={{ userSession, setUserSession }}>
            {children}
        </UserSessionContext.Provider>
    );
};
