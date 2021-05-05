import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import ButtonAdd from '../../components/ButtonAdd';
import ListTask from '../../components/ListTask';
import Task, { Status } from '../../entity/Task';
import * as yup from 'yup';
import { useFormik } from 'formik';

interface InitialValues {
  title: string;
  description: string;
}

const schema = yup.object().shape({
  title: yup.string().required('O campo é obrigatório!'),
  description: yup.string().required('O campo é obrigatório!'),
});

const initialValues: InitialValues = {
  title: '',
  description: '',
};

interface ButtonSave {
  title: string;
  onPress: () => void;
}
const ButtonSave: React.FC<ButtonSave> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonSave}>
        <Text style={styles.buttonSaveText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const TaskView = () => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible((t) => !t);
  };
  const formik = useFormik<InitialValues>({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => console.log(values),
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true
  });

  return (
    <SafeAreaView
      style={{ padding: 20, height: '100%', width: '100%', flex: 1 }}
    >
      <Modal transparent={true} animationType="fade" visible={visible}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <View
              style={{ display: 'flex', alignSelf: 'flex-end', marginLeft: 15, height: 30 }}
            >
              <FontAwesome5 onPress={toggleModal} name="times-circle" size={30} color="black" />
            </View>
            <View style={styles.form}>
              {/* template input */}
              <View>
                <View style={{ paddingBottom: 15 }}>
                  <Text style={styles.label}>Título</Text>
                </View>
                <View>
                  <TextInput
                    style={
                      formik.errors.title
                        ? [styles.textInput, { borderBottomColor: 'red' }]
                        : styles.textInput
                    }
                    onChangeText={(text) => formik.setFieldValue('title', text)}
                    placeholder="digite um título para tarefa..."
                  />
                  {formik.errors.title ? (
                    <Text style={styles.messageError}>
                      {formik.errors.title}
                    </Text>
                  ) : null}
                </View>
              </View>
              {/* template input */}
              <View style={{ marginTop: 30 }}>
                <View style={{ paddingBottom: 15 }}>
                  <Text style={styles.label}>Descrição</Text>
                </View>
                <View>
                  <TextInput
                    style={
                      formik.errors.description
                        ? [styles.textInput, { borderBottomColor: 'red' }]
                        : styles.textInput
                    }
                    editable
                    numberOfLines={5}
                    maxLength={150}
                    multiline
                    onChangeText={(text) =>
                      formik.setFieldValue('description', text)
                    }
                    placeholder="descrição da tarefa..."
                  />
                  {formik.errors.description ? (
                    <Text style={styles.messageError}>
                      {formik.errors.description}
                    </Text>
                  ) : null}
                </View>
              </View>
            </View>
            <View>
              <ButtonSave title="Salvar" onPress={()=>formik.handleSubmit()} />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <ListTask
          list={lista.filter(
            (t) => t.status === Status.PENDENTE || t.status === Status.NOVO
          )}
        />
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
    width: '80%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSave: {
    backgroundColor: 'blue',
    minWidth: '80%',
    minHeight: 50,
    borderRadius: 10,
  },
  buttonSaveText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginTop: 6,
  },
  form: {
    width: '100%'
    // height: '80%',
    // display: 'flex',
    // justifyContent:'space-between'
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    minWidth: '80%',
    fontSize: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageError: {
    color: 'red',
  },
});
export default TaskView;

const lista: Task[] = [
  {
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
  },
  {
    id: 4,
    title: 'Teste',
    description: 'TESTe',
    status: Status.CANCELADO,
  },
  {
    id: 5,
    title: 'Teste',
    description: 'TESTe',
    status: Status.PENDENTE,
  },
  {
    id: 6,
    title: 'Teste',
    description:
      'TESTe adasdasd da  asdasdas asdas dasasd asdas d a sddadasdasdasdsaddasdasdasdaasdasdasddasdsadasasdasd',
    status: Status.PENDENTE,
  },
  {
    id: 7,
    title: 'Teste',
    description: 'TESTe',
    status: Status.NOVO,
  },
];
