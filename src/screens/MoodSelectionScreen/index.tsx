import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import styles from "./style";

export function MoodSelection({navigation}: any){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Como você está se sentindo hoje?</Text>
  
        <TouchableOpacity activeOpacity={0.8} style={styles.moodButton} onPress={() => {navigation.navigate('Result', {value: 1});}}>
          <FontAwesome5 name="smile-beam" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.moodText}>Feliz</Text>
        </TouchableOpacity>
  
        <TouchableOpacity activeOpacity={0.8} style={styles.moodButton} onPress={() => {navigation.navigate('Result', {value: 2});}}>
          <FontAwesome5 name="meh" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.moodText}>Neutro</Text>
        </TouchableOpacity>
  
        <TouchableOpacity activeOpacity={0.8} style={styles.moodButton} onPress={() => {navigation.navigate('Result', {value: 3});}}>
          <FontAwesome5 name="sad-tear" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.moodText}>Triste</Text>
        </TouchableOpacity>
      </View>
    );
};