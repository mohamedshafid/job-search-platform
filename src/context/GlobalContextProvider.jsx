'use client'

import React, { createContext, useContext, useState } from 'react';

const globalContext=createContext();

const GlobalContextProvider = ({children}) => {
    const [state,setState]=useState("");

      const setSearchQuery = (query) => {
        setState(query);
      };

  return <globalContext.Provider value={{state,setSearchQuery}}>{children}</globalContext.Provider>;
}

export const useGlobalContext=()=>useContext(globalContext);

export default GlobalContextProvider;