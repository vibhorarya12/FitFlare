import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './DashboardScreens/Home';
import MonthlyStatsScreen from './DashboardScreens/MonthlyStats';
import WaterReminder from './DashboardScreens/WaterReminder';

const Stack = createStackNavigator();

export default function DashBoardScreen() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen  name='monthly-screen' component={MonthlyStatsScreen} />
      <Stack.Screen name='water-reminder' component={WaterReminder} />
    </Stack.Navigator>
  );
}
