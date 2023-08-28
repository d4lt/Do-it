import { View } from 'react-native';
import { styles } from './src/screens/main/style';
import Main from './src/screens/main/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

