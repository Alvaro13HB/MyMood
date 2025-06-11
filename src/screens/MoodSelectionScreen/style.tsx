import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff0f1", 
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    title: {
      fontSize: 24,
      color: "#ff4b5c", 
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 30,
      fontFamily: "System", 
    },
    moodButton: {
      backgroundColor: "#ff4b5c",
      paddingVertical: 14,
      paddingHorizontal: 30,
      borderRadius: 30,
      marginBottom: 15,
      width: "80%",
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      elevation: 3,
    },
    moodText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
    },
    icon: {
        margin: 10,
    },
});

export default styles;