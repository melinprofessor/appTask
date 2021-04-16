import React from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface Props {
  onPress: () => void;
}
const ButtonAdd: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: 'absolute',
        bottom: 20,
        right: 30,
      }}
    >
      <View style={styles.button}>
        <FontAwesome5 name="plus" color="white" size={40} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
});
export default ButtonAdd;
