import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "./theme";

type TodoItemProps = {
  todoValue: string;
  isCompleted?: boolean;
  markComplete: () => void;
};

export function TodoItem({
  todoValue,
  isCompleted,
  markComplete,
}: TodoItemProps) {
  function handlePress() {
    Alert.alert(
      "Delete todo",
      `Are you sure you want to mark this todo ${
        isCompleted ? "pending" : "completed"
      }?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("No pressed"),
        },
        {
          text: "Go Ahead",
          onPress: () => markComplete(),
        },
      ]
    );
  }

  return (
    <View style={styles.todoContainer}>
      <Text
        style={[
          styles.todoText,
          isCompleted ? styles.textCompleted : undefined,
        ]}
      >
        {todoValue}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.buttonCompleted : undefined,
        ]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: theme.lightBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 5,
    padding: 6,
    backgroundColor: theme.lightRed,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  buttonCompleted: {
    backgroundColor: theme.grey,
  },
  textCompleted: {
    color: theme.grey,
    textDecorationLine: "line-through",
  },
});
