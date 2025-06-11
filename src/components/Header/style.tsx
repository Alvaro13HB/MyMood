import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
      backgroundColor: "#ff4b5c",
      paddingTop: 60,
      paddingBottom: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      elevation: 4,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    title: {
      color: "#fff",
      fontSize: 28,
      fontWeight: "bold",
      fontFamily: "System",
      letterSpacing: 1,
    },
  });

export default styles;