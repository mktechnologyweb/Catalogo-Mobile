import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

export default function BottomTabBar() {

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.push("/products")} >
        <Entypo  style={styles.icon} name="home" size={24} color="#2567E8" /><Text style={styles.home}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Feather style={styles.icon} name="settings" size={24} color="#5F6368" />
        <Text style={styles.item}> Configurações</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    bottom: 40,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"#ffff"
  },

  item: {
    fontSize: 16,
    color: "#5F6368"
  },

   home: {
    fontSize: 16,
    color: "#2567E8"
  },

  icon:{
   textAlign:"center",
  
  },

});