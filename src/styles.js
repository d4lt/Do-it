import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#161217',
      fontFamily: 'Inter'
    },
  
    title: {
      color: '#6605ab',
      fontFamily: 'Inter',
      fontSize: 50,
      fontWeight:"700",
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 80,
    },
  });

const todoBarStyle = StyleSheet.create({
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

const todoStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    marginVertical: 8,
    marginHorizontal:15,
    alignItems: 'center',
    gap: 8,
    
    // borderWidth: 1,
    // borderColor: 'red',fff
  },

  removeTodoBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,

    backgroundColor: '#6605ab',
  },

  todoTextContainer: {
    flex: 1,
    backgroundColor: '#333333',
    // borderWidth: 1,
    // borderColor: 'purple',
    borderRadius: 10,
    justifyContent: 'center',

    height: '100%',
    width: '100%',
  },

  todoText: {
    color: '#e3e3e3',
    fontSize: 18,
    fontWeight: 'medium',
    paddingHorizontal: 12,
    paddingVertical: 5,
    // backgroundColor: 'pink'
  },
});

export {styles, todoBarStyle, todoStyle}