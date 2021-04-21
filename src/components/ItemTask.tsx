import React from 'react';
import Task, { Status } from '../entity/Task';
import { View, Text, StyleSheet } from 'react-native';

const ItemTask: React.FC<{ item: Task }> = ({ item }) => {
  const getStatus = () => {
    let color = '';

    switch (item.status) {
      case Status.NOVO:
        color = 'green';
        break;
      case Status.CONCLUIDO:
        color = 'blue';
        break;
      case Status.PENDENTE:
        color = 'orange';
      case Status.CONCLUIDO:
        color = 'red';
        break;
      default:
        color = 'red';
        break;
    }

    return color;
  };
  const cor = getStatus();
  return (
    <View key={item.id} style={[styles.container, {shadowColor: cor}]}>
      <View>
        <View style={[styles.cardBody, { justifyContent: 'space-between' }]}>
          <View style={styles.cardBody}>
            <View>
              <Text numberOfLines={1} style={styles.titulo}>
                id:
              </Text>
            </View>
            <View style={styles.espacamento}>
              <Text style={styles.valor}>{`#${item.id}`}</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <View>
              <Text numberOfLines={1} style={styles.titulo}>
                status:
              </Text>
            </View>
            <View style={styles.espacamento}>
              <Text style={styles.valor}>{item.status}</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardBody}>
          <View>
            <Text style={styles.titulo}>Título:</Text>
          </View>
          <View style={styles.espacamento}>
            <Text style={styles.valor}>{item.title}</Text>
          </View>
        </View>
        <View style={styles.cardBody}>
          {/* <View>
            <Text style={styles.titulo}>Descrição:</Text>
          </View> */}
          <View style={[styles.espacamento, { paddingTop: 3 }]}>
            <Text numberOfLines={2} style={styles.valor}>
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    marginTop: 20,
    backgroundColor: 'white',
    minHeight: 120,
    borderRadius: 10,
    padding: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  valor: {
    fontSize: 20,
    fontWeight: '500',
  },
  espacamento: {
    marginLeft: 5,
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
});
export default ItemTask;
