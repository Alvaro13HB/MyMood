import { StyleSheet } from "react-native";

const CRIMSON = '#ff4d5c';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff0f1",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    title: {
      fontSize: 32,
      fontWeight: '900',
      color: CRIMSON,
      marginBottom: 32,
      textAlign: 'center',
    },
    input: {
      height: 50,
      width: '100%',
      borderRadius: 12,
      paddingHorizontal: 16,
      marginBottom: 16,
      fontSize: 16,
      backgroundColor: CRIMSON,
      color: '#fff0f1',
    },
    button: {
      backgroundColor: CRIMSON,
      borderRadius: 25,
      paddingVertical: 14,
      paddingHorizontal: 40,
      marginTop: 10,
      marginBottom: 10,
      elevation: 2,
      width: '100%',
    },
    buttonText: {
      color: "#fff0f1",
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    switchText: {
      color: CRIMSON,
      fontSize: 16,
      marginTop: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    invalid: {
        borderColor: 'yellow',
    }
  });
  
export default styles;  