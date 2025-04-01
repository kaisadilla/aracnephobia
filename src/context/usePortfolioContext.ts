import { Context, createContext, useContext, useEffect, useMemo, useState } from "react";

interface OsContextState {
    activeWindowId: string | null;
}

const OsContext = createContext<OsContextState>({} as OsContextState);
const useOsContext = () => useContext(OsContext);

const OsContextProvider = ({ children }: any) => {
    const [state, setState] = useState<OsContextState>({
        activeWindowId: null,
    } as OsContextState);

    const value = useMemo(() => {
        return {
            ...state,
        }
    }, [state]);

    return (
        <OsContext value={value}>
            {children}
        </OsContext>
    );
}

export {
    useOsContext,
    OsContextProvider,
};
