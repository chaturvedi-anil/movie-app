import React from 'react';
import {BrowserRouter} from "react-router-dom";

export default function AppProvider({children}: {children: React.ReactNode}) {
  return (
    <BrowserRouter>{children}</BrowserRouter>
  )
}
