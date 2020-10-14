/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable no-use-before-define */
import React from "react";

import { AuthProvider } from "./Auth";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
