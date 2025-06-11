import React from "react";
import styles from "./style";
import { View, Text } from "react-native";

export function Header(){
    return(
      <View style={styles.header}>
        <Text style={styles.title}>MyMood</Text>
      </View>
    );
};