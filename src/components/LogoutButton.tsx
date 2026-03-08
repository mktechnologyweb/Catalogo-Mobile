import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../screens/authSlice";
import { router } from "expo-router";
import { COLORS } from "../components/styles/colors"

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>Sair da conta</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:"#E63535",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius:4,
  },
  text: {
    color: "#fff",
    textAlign:"center",
    fontWeight: "600",
  },
});