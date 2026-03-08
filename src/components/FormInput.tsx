import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
  error?: string;
}

export default function FormInput({
  label,
  value,
  onChangeText,
  secure = false,
  error,
}: Props) {
  const [hidePassword, setHidePassword] = useState(secure);

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error && styles.inputError]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hidePassword}
        />

        {secure && (
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.eye}
          >
            <Ionicons
              name={hidePassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#777"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <View style={styles.errorRow}>
          <MaterialIcons name="error-outline" size={14} color="#B91C1C" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    marginBottom: 4,
    color: "#262627",
  },
  inputContainer: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#ffff",
    padding: 12,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    borderWidth: 1,
  },
  inputError: {
    borderColor: "#B91C1C",
    borderWidth: 1,
  },
  eye: {
    position: "absolute",
    right: 12,
  },
  errorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  errorText: {
    color: "#B91C1C",
    fontSize: 12,
    marginLeft: 4,
  },
});