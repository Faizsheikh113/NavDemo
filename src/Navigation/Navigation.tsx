/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedScreen from '../Screens/Feed';
import NotificationScreen from '../Screens/Notification';
import SettingScreen from '../Screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Octicons';
import TweetDetailScreen from '../Screens/HomeStake/TweetDetails';
import ProfileScreen from '../Screens/DrawerStake/Profile';
import PaymentScreen from '../Screens/DrawerStake/Payment';
import LogoutScreen from '../Screens/DrawerStake/Logout';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TweetScreen from '../Screens/HomeStake/Tweet';
import {Pressable} from 'react-native';

// Define your stack navigator
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          height: 4,
          borderRadius: 20,
        },
        // tabBarActiveTintColor:'black',
      }}>
      <TopTabs.Screen name="Main" component={FeedScreen} />
      <TopTabs.Screen name="Tweet" component={TweetScreen} />
      <TopTabs.Screen name="Payment" component={PaymentScreen} />
    </TopTabs.Navigator>
  );
}

function HomeGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
      />
    </HomeStack.Navigator>
  );
}

function DrawerGroup() {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen
        name="HomeGroup"
        component={HomeGroup}
        options={{headerShown: false}}
      />
      <DrawerStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: true}}
      />
      <DrawerStack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{headerShown: true}}
      />
      <DrawerStack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{headerShown: true}}
      />
    </DrawerStack.Navigator>
  );
}

function TabGroup() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{
          tabBarLabel: '@FaizSheikh',
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Icon1
                name="three-bars"
                size={20}
                color="black"
                style={{paddingLeft: 40,paddingRight:20}}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
}
