import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function FloatingButton() {
  return (
    <TouchableOpacity style={styles.fab}>
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 120,
    right: 20,
    backgroundColor: "#2567E8",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  fabText: {
    color: "#ffff",
    fontSize: 24,
  },
});