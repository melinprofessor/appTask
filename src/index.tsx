import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { TabNavigator } from './routers/navigation';

const Main = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default Main;