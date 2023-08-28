import { View } from 'react-native';
import { styles, todoBarStyle } from './src/styles';
import Main from './src/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

