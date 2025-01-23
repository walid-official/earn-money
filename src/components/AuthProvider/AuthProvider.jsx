import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [availableCoin,setAvailableCoin] = useState(null);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createSignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
      .then(() => {
        // Manually update the user state with the new information
        setUser({
          ...auth.currentUser,
          displayName: updatedData.displayName,
          photoURL: updatedData.photoURL,
        });
      })
      .catch((error) => {
        throw error;
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  
      if (currentUser) {
        console.log(currentUser);
     
        const userInfo = { email: currentUser.email };

        axios.post("http://localhost:5000/jwt", userInfo).then((res) => {
          console.log(res.data);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setUser(currentUser);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setUser(null);
        setLoading(false);
      }
      
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authEarnInfo = {
    user,
    loading,
    createUser,
    userSignOut,
    createSignInUser,
    updateUserProfile,
    signInWithGoogle,
    // availableCoin,
    // setAvailableCoin,
  };

  return (
    <AuthContext.Provider value={authEarnInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
