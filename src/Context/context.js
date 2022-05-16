import React, {useReducer} from "react";
import { rootReducer, userInitialState } from "./reducers";
 
const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

 
export function useAuthState() {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
      throw new Error("useAuthState must be used within a Provider");
    }
   
    return context;
  }
   
  export function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
      throw new Error("useAuthDispatch must be used within a Provider");
    }
   
    return context;
  }

  export const Provider = ({ children }) => {
    const [user, dispatch] = useReducer(rootReducer, userInitialState);   
    return (
      <AuthStateContext.Provider value={user}>
        <AuthDispatchContext.Provider value={dispatch}>
          {children}
        </AuthDispatchContext.Provider>
      </AuthStateContext.Provider>
    );
  };