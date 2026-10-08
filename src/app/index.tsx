import { Link } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

const badge = require("../../assets/images/expo-badge.png");

export default function Home() {
  return (
    <View style={styles.container}>
      <Link href='/Input' style={styles.Btn}>Click Me</Link>
      <Image source={badge} style={styles.image}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin:20,
    marginTop: 20
    
  },
  Btn: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
  }
});
