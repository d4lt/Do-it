import { StyleSheet } from "react-native";

export const todoBarStyle = StyleSheet.create({
    writeTodo: {
      //   position: 'absolute',
        width: 270,
        backgroundColor: '#333333',
        color: 'white',
        padding: 10,
        paddingRight: 80,
  
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'white',
  
        opacity: 0.5,
      },
  
      addTodos: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // height: 63,
        // gap: 10,
  
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 15,
  
        boxSizing: 'content-box',
  
        // borderWidth: 1,
        // borderColor: 'red',
      },
  
      addTodosBtn: {
        margin: 0,
        backgroundColor: '#6605ab',
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      }
  });