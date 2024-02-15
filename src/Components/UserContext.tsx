// UserSessionContext.tsx
import React from 'react';

interface UserContextProps {
    user_id: string;
    setUserId: (id: string) => void;
}

export const UserContext = React.createContext<UserContextProps>({
    user_id: '',
    setUserId: () => {},
});
