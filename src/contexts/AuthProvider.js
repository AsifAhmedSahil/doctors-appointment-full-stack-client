import React, { createContext } from 'react'
import  { getAuth,createUserWithEmailAndPassword } from "firebase/auth"
import app from "../firebase/firebase.config"


export const AuthContext = createContext()
    const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const createUser = (email,password) =>{
        createUserWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        createUser
    }
    

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider