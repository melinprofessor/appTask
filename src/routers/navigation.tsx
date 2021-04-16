import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Task from '../views/AddTask/task';
import { FontAwesome5 } from '@expo/vector-icons';
import List from '../views/list';

const Tab = createBottomTabNavigator();
const icons:any = {
    Task: {
        lib: FontAwesome5,
        name: 'plus',
        size: 20
    },
    List: {
        lib: FontAwesome5,
        name: 'list-ol',
        size: 20
    }
}
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 20,
        },
      }}
      screenOptions={({route, navigation})=> ({
          tabBarIcon: ({color, size, focused}) => {
              const {lib: Icon, name} = icons[route.name]
              return <Icon name={name} size={size} color={color} />
          }
      })}
    >
      <Tab.Screen
        name="Task"
        options={{ title: 'Add'}}
        component={Task}
      />
    <Tab.Screen
        name="List"
        options={{ title: 'Listar'}}
        component={List}
      />
    </Tab.Navigator>
  );
};
