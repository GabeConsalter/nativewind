import { StyleSheet, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export function Test() {
  return (
    <TailwindProvider>
      <Text className="font-bold" style={styles.test}>
        Hello world!
      </Text>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  test: { color: "blue" },
});