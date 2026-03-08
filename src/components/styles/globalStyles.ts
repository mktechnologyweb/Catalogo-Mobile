import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    elevation: 6,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.white,
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 10,
  },

  buttonText: {
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#F3F4F6",
    padding: 12,
    borderRadius: 10,
  },

  errorText: {
    color: COLORS.error,
    fontSize: 12,
  },
});