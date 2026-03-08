import { Redirect, Stack } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../src/screens/store";

export default function AppLayout() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}