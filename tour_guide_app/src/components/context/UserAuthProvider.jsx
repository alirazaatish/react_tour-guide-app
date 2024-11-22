import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { 
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

} from "../Firebase/Firebase.js";


const UserAuthContext = createContext();

export function UserAuthContextProvider({childern}){

    const [ user , setUser ]=useState(null)
    const [ loading , setLoading ]=useState(true)

    const Signup = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password);
    }

    const Signin = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);

            return ()=>{
                unsubscribe();
            }
        })
    },[])

    return(
        <UserAuthContext.Provider value={{user, Signup, Signin}}>
            {childern}
        </UserAuthContext.Provider>
    )
}

export function UseUserAuth(){
    return(
        useContext(UserAuthContext)
    )
}