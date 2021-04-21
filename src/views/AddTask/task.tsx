import React, { useState } from 'react';
import { View, Button, SafeAreaView, StyleSheet, Modal } from 'react-native';
import ButtonAdd from '../../components/ButtonAdd';
import ListTask from '../../components/ListTask';
import Task, { Status } from '../../entity/Task'

const TaskView = () => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible((t) => !t);
  };
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
      <View style={styles.container}>
        <ListTask list={lista.filter(t=> t.status === Status.PENDENTE || t.status === Status.NOVO)} />
        {!visible && <ButtonAdd onPress={toggleModal} />}
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
  id: 1,
  title: 'Teste',
  description: 'TESTe',
  status:  Status.PENDENTE,
},
{
  id: 4,
  title: 'Teste',
  description: 'TESTe adasdasd da  asdasdas asdas dasasd asdas d a sddadasdasdasdsaddasdasdasdaasdasdasddasdsadasasdasd',
  status:  Status.PENDENTE,
},
{
  id: 1,
  title: 'Teste',
  description: 'TESTe',
  status:  Status.NOVO,
}]