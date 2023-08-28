import { View, Text, Pressable, Alert } from "react-native";
import { todoStyle } from "./style";

export function Todo(props) {
  return (
    <View style={todoStyle.container}>
      <Pressable
        style={todoStyle.removeTodoBtn}
        onPress={
          () => props.setTodos(props.todos.filter( (t) => t.id !== props.todo.id ))
        }
      >
        <Text style={{color: 'white', fontWeight: '700'}}>X</Text>
      </Pressable>

      <View style={todoStyle.todoTextContainer}>
        <Text style={todoStyle.todoText}>{props.todo.todoName}</Text>
      </View>
    </View>
  );
}
