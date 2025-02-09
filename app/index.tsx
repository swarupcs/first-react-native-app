import { StyleSheet, TextInput, View } from "react-native";
import { TodoItem } from "./TodoItem";
import { theme } from "./theme";
import { useState } from "react";

type TodoItem = {
  todoValue: string;
  isCompleted?: boolean;
};

export default function HomeScreen() {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  function handleChange(data: string) {
    setTodo(data);
  }

  function handleSubmit() {
    console.log("Submitted todo: ", todo);
    setTodoList([
      ...todoList,
      {
        todoValue: todo,
        isCompleted: false,
      },
    ]);
    setTodo("");
  }

  function handleTodoComplete(todoIndex: number) {
    const newTodoList = todoList.map((currentTodo, index) => {
      if (index === todoIndex) {
        return {
          ...currentTodo,
          isCompleted: !currentTodo.isCompleted,
        };
      }
      return currentTodo;
    });
    setTodoList(newTodoList);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a new todo ..."
        style={styles.textInput}
        onChangeText={handleChange}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
        value={todo}
      />
      {todoList.map((currentTodo, index) => (
        <TodoItem
          key={index}
          todoValue={currentTodo.todoValue}
          isCompleted={currentTodo.isCompleted}
          markComplete={() => handleTodoComplete(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: theme.lightBlue,
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    fontSize: 20,
  },
});
