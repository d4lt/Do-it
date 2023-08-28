import { StyleSheet } from "react-native";

export const todoStyle = StyleSheet.create({
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