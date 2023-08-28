import { View, TextInput, TouchableHighlight } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { todoBarStyle } from "./style";

export function TodoBar( props ) {
  return (
    <View style={todoBarStyle.addTodos}>
      <TextInput
        style={todoBarStyle.writeTodo}
        placeholder="Enter your To Do"
        onChangeText={(text) => props.setInput(text)}
        defaultValue={props.input}
      />

      <TouchableHighlight
        style={todoBarStyle.addTodosBtn}
        underlayColor="#c474fc"
        onPress={() => {
          props.setTodos([...props.todos, { todoName: props.input, id: props.todos.length + 1 }]);
          props.setInput("");
        }}
      >
        <Entypo name="plus" size={24} color="#e3e3e3" />
      </TouchableHighlight>
    </View>
  );
}
