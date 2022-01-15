import { createContext, useContext } from 'react';
import { useState } from 'react';
const AppContext = createContext();

export function AppWrapper({ children }) {
    const [user, setUser] = useState({});
    let sharedState = { user, setUser }

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
