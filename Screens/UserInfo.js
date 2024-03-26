import React from 'react';
import Gender from './InfoScreens/Gender';
import Weight from './InfoScreens/Weight';
import Height from './InfoScreens/Height';
import Age from './InfoScreens/Age';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();
export default function UserInfoBoarding() {
  return (
    <Tab.Navigator  initialRouteName='Gender' screenOptions={{tabBarShowLabel:false,tabBarStyle:{display:'none'}}} backBehavior={'order'}  >
     <Tab.Screen  name='Gender' component={Gender}  />
     <Tab.Screen  name='Weight' component={Weight} />
     <Tab.Screen  name='Height' component={Height} />
     <Tab.Screen  name='Age' component={Age} />
    </Tab.Navigator>
  )
}
