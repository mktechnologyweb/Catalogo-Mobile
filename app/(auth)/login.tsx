import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import FormInput from "../../src/components/FormInput";
import { COLORS } from "../../src/components/styles/colors";
import { login } from "../../src/screens/authSlice";

const { height } = Dimensions.get("window");

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [generalError, setGeneralError] = useState("");

  const dispatch = useDispatch<any>();

  const handleLogin = () => {
    let newErrors: any = {};
    setGeneralError("");

    if (!username) newErrors.username = "Campo obrigatório";
    if (!password) newErrors.password = "Campo obrigatório";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (username !== "admin" || password !== "123") {
      setGeneralError("Username ou senha inválidos");
      return;
    }

    dispatch(login(username));
    router.replace("/products");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>
          Insira seus dados para entrar na sua conta.
        </Text>
      </View>

      
      <View style={styles.card}>
        {generalError ? (
          <Text style={styles.generalError}>{generalError}</Text>
        ) : null}

        <FormInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          error={errors.username}
        />

        <FormInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secure
          error={errors.password}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  topSection: {
    backgroundColor: COLORS.primary,
    height: height * 0.45,
    paddingTop: 110,
    paddingHorizontal: 24,
  },

  title: {
    paddingTop: 60,
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 8,
    textAlign:"center"
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign:"center"
  },

  card: {
    position: "absolute",
    top: height * 0.32,
    alignSelf: "center",
    width: "88%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderColor:"#BDBDBD",
    borderWidth:1,
    padding: 22,
   
  },

  generalError: {
    color: "#B91C1C",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "500",
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },
});