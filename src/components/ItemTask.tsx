import React from 'react';
import Task from '../entity/Task';
import {View, Text, StyleSheet} from 'react-native';

const ItemTask:React.FC<{item: Task}> = ({item}) => {
    return (
        <View key={item.id} style={styles.container}>
            <Text>{item.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '90%',
        marginTop: 20,
        backgroundColor: 'white',
        height: 100,
        borderRadius: 10,
        padding:5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})
export default ItemTask;