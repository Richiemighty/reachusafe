import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";
import { app } from "../config/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(() => localStorage.getItem("userRole") || "");

  // Sync user on auth state change (e.g., page reload)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        const savedRole = localStorage.getItem("userRole");
        if (savedRole) {
          setUserRole(savedRole);
        }
      } else {
        setUserRole("");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const signUp = async (email, password, additionalData = {}) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (additionalData.displayName) {
      await updateProfile(user, { displayName: additionalData.displayName });
    }

    if (additionalData.role) {
      setUserRole(additionalData.role);
      localStorage.setItem("userRole", additionalData.role);
    }

    setCurrentUser(user);
    return user;
  };

  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
    return result;
  };

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    setUserRole("");
    localStorage.removeItem("userRole");
  };

  return (
    <AuthContext.Provider value={{ currentUser, userRole, setUserRole, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
