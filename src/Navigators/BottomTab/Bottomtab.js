import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../colors/colors';
import Home from '../../Screens/Home/Home';
import Account from '../../Screens/Account/Account';
import MyOrders from '../../Screens/MyOrders/MyOrders';
import Departments from '../../Screens/Departments/Departments';

function MyTabs() {


    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator

            tabBarOptions={{
                activeTintColor: colors.main,
                inactiveTintColor: "#90a4ae",

                style: {
                    position: "absolute",
                    borderTopWidth: 1,
                }

            }} screenOptions={({ navigation, route, }) => {
                return {
                    tabBarLabel: ({ color }) => <Text color={color} fontSize={10} textTransform="uppercase">{route.name === "MyOrders" ? "My Orders" : route.name}</Text>
                }
            }}>
            <Tab.Screen options={({ navigation, route }) => ({
                tabBarIcon: ({ color, focused }) => <Icon name="home" size={22} color={color} />
            })} name="Home" component={Home} />
            <Tab.Screen options={({ navigation, route }) => ({
                tabBarIcon: ({ color, focused }) => <AntDesign name="appstore1" size={22} color={color} />
            })} name="Departments" component={Departments} />
            <Tab.Screen options={({ navigation, route }) => ({
                tabBarIcon: ({ color, focused }) => <Icon name="truck" size={22} color={color} />
            })} name="MyOrders" component={MyOrders} />
            <Tab.Screen options={({ navigation, route }) => ({

                tabBarIcon: ({ color, focused }) => <Icon name="user-alt" size={22} color={color} />
            })} name="Account" component={Account} />

        </Tab.Navigator>
    );
}


export default MyTabs;