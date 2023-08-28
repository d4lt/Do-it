import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useFonts } from 'expo-font';
import { styles, todoBarStyle } from './styles';
import { Entypo } from '@expo/vector-icons';

import { Todo } from './components/todoItem';


export default function Main() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  

  const [loaded] = useFonts({
    'Inter': require("../assets/fonts/Inter.ttf"),
  }); 
  if (!loaded) return null
  
  
  return (
    <>
      <StatusBar style="auto" />
      <Text style={styles.title}>Do-It!</Text>

      <View style={todoBarStyle.addTodos}>
        <TextInput
          style={todoBarStyle.writeTodo}
          placeholder="Enter your To Do"
          onChangeText={text => setInput(text)}
          defaultValue={input}
        />

        <TouchableHighlight
          style={todoBarStyle.addTodosBtn}
          underlayColor="#c474fc"
          onPress={ () => {
            setTodos([...todos, {todoName: input, id: todos.length + 1}])
            setInput("")
          }}
        >
          <Entypo name="plus" size={24} color="#e3e3e3" />
        </TouchableHighlight>
      </View>

      <FlatList
        data={todos}
        renderItem={( { item } ) => <Todo todo={item} todos={todos} setTodos={setTodos}/>}
      />
    </>
  );
}

