import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="onboarding" options={{}} />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default RootLayout;
