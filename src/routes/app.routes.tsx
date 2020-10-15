/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  /*para aplicacao já começar pelo signup
  initialRouteName='SignUp'*/
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
