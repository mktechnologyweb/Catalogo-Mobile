import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  category: string;
  setCategory: (value: string) => void;
}

export default function CategoryTabs({ category, setCategory }: Props) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={[styles.tab, category === "masculino" && styles.active]}
        onPress={() => setCategory("masculino")}
      >
        <Text style={styles.text}>Masculino</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, category === "feminino" && styles.active]}
        onPress={() => setCategory("feminino")}
      >
        <Text style={styles.text}>Feminino</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:-25,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
  },

  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "transparent",
  },

  active: {
    borderColor: "#2F6FED",
  },

  text: {
    fontWeight: "600",
  },
});