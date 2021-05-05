import React from 'react';
import Task from '../entity/Task';
import ItemTask from './ItemTask';
import { ScrollView } from 'react-native';
const ListTask: React.FC<{ list: Task[] }> = ({ list }) => {
  // list.map((task) => <ItemTask item={task} />

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      {list.map((task) => (
        <ItemTask key={task.id} item={task} />
      ))}
    </ScrollView>
  );
};
export default ListTask;
