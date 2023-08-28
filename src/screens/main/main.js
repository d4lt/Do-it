import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Text} from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from './style';

import { Todo } from '../../components/todoItem/todoItem';
import { TodoBar } from '../../components/todoBar/todoBar';


export default function Main() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  

  const [loaded] = useFonts({
    'Inter': require("../../../assets/fonts/Inter.ttf"),
  }); 
  if (!loaded) return null
  
  
  return (
    <>
      <StatusBar style="auto" />
      <Text style={styles.title}>Do-It!</Text>

      <TodoBar todos={todos} setTodos={setTodos} input={input} setInput={setInput}/>

      <FlatList
        data={todos}
        renderItem={( { item } ) => <Todo todo={item} todos={todos} setTodos={setTodos}/>}
      />
    </>
  );
}

