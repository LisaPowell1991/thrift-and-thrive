import React, { createContext, useState, useEffect } from 'react';

// Define the shape of the context
interface UserSessionContextProps {
    userSession: any;
    setUserSession: React.Dispatch<React.SetStateAction<any>>;
}

// Create the context with default value as null
export const UserSessionContext = createContext<UserSessionContextProps | null>(
    null
);

// Create a provider for the UserSessionContext
export const UserSessionProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    // Define state variable for user session
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

    // Provide the context to child components
    return (
        <UserSessionContext.Provider value={{ userSession, setUserSession }}>
            {children}
        </UserSessionContext.Provider>
    );
};
