import React, { useState } from 'react';
import { View, Button, SafeAreaView, StyleSheet, Modal } from 'react-native';
import ButtonAdd from '../../components/ButtonAdd';
import ListTask from '../../components/ListTask';

const Task = () => {
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
        <ListTask list={lista} />
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
export default Task;

const lista = [{
  id: 1,
  title: 'Teste',
  description: 'TESTe',
  status: true,
},
{
  id: 2,
  title: 'Teste',
  description: 'TESTe',
  status: true,
},
{
  id: 3,
  title: 'Teste',
  description: 'TESTe',
  status: true,
},{
  id: 4,
  title: 'Teste',
  description: 'TESTe',
  status: true,
},
{
  id: 1,
  title: 'Teste',
  description: 'TESTe',
  status: true,
},
{
  id: 4,
  title: 'Teste',
  description: 'TESTe',
  status: true,
},
{
  id: 1,
  title: 'Teste',
  description: 'TESTe',
  status: true,
}]