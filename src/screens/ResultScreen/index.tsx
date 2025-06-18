import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './style';
import { FontAwesome5 } from '@expo/vector-icons'; 

export function Result({ route, navigation }: any) {
  const {value} = route.params

  function Message({ value }: { value: number }) {
    let icon = '';
    let title = '';
    let message = '';

    if (value === 1) {
      icon = 'grin-beam';
      title = 'Você está muito feliz hoje!';
      message = 'Continue espalhando essa energia maravilhosa pelo mundo!';
    } else if (value === 2) {
      icon = 'meh'; 
      title = 'Você está se sentindo neutro.';
      message = 'Tudo bem estar assim. Aproveite o momento com leveza.';
    } else {
      icon = 'sad-tear';
      title = 'Você está triste.';
      message = 'Está tudo bem sentir-se assim. Cuide de você e busque apoio.';
    }

    return (
      <View style={styles.card}>
        <FontAwesome5 name={icon} size={40} color="#ff4b5c" style={{ marginBottom: 16 }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <TextInput
          style={styles.textArea}
          placeholder='Por que você está se sentindo assim?'
          multiline={true}
          textAlignVertical='top'
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {value !== null && <Message value={value} />}
    </View>
  );
}