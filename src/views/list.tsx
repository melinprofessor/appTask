import React, { useEffect, useState } from 'react';
import { View, Button, SafeAreaView, StyleSheet, Modal } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import ListTask from '../components/ListTask';
import Task, { Status } from '../entity/Task';

const TaskView = () => {
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState<string>('');
  const [list, setList] = useState(lista)
  const [filtred, setFiltred] = useState(lista)
 

  const toggleModal = () => {
    setVisible((t) => !t);
  };

  useEffect(() => {
    
    const filtro = list.filter((item) => item.status.toString() === select)
    console.log(filtro)
    if(filtro.length> 0) {
      setFiltred(filtro);
    }
    if(select === '') {
      setFiltred(list);
    }
    
  }, [select])

  return (
    <SafeAreaView
      style={{ padding: 20, height: '100%', width: '100%', flex: 1 }}
    >
      <Modal transparent={true} animationType="fade" visible={visible}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Button title="fechar" onPress={toggleModal}>
              Fechar
            </Button>
          </View>
        </View>
      </Modal>
      <View>
          <Picker selectedValue={select}
          onValueChange={(item)=> setSelect(item.toString())}
          >
          <Picker.Item label='TODOS' value={''} />
            <Picker.Item label={Status.NOVO.toUpperCase()} value={Status.NOVO.toString()} />
            <Picker.Item label={Status.PENDENTE.toUpperCase()} value={Status.PENDENTE.toString()} />
            <Picker.Item label={Status.CONCLUIDO.toUpperCase()} value={Status.CONCLUIDO.toString()} />
            <Picker.Item label={Status.CANCELADO.toUpperCase()} value={Status.CANCELADO.toString()} />
          </Picker>
      </View>
      <View style={styles.container}>
        <ListTask list={filtred} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  modalView: {
    margin: 20,
    width:'80%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centerView: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
});
export default TaskView;

const lista: Task[] = [{
  id: 1,
  title: 'Teste',
  description: 'TESTe',
  status: Status.CANCELADO,
},
{
  id: 2,
  title: 'Teste',
  description: 'TESTe',
  status: Status.CONCLUIDO,
},
{
  id: 3,
  title: 'Teste',
  description: 'TESTe',
  status: Status.PENDENTE,
},{
  id: 4,
  title: 'Teste',
  description: 'TESTe',
  status: Status.CANCELADO,
},
{
  id: 5,
  title: 'Teste',
  description: 'TESTe',
  status:  Status.PENDENTE,
},
{
  id: 6,
  title: 'Teste',
  description: 'TESTe adasdasd da  asdasdas asdas dasasd asdas d a sddadasdasdasdsaddasdasdasdaasdasdasddasdsadasasdasd',
  status:  Status.PENDENTE,
},
{
  id: 7,
  title: 'Teste',
  description: 'TESTe',
  status:  Status.NOVO,
}]