import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mayara e Ana Beatriz</Text>
      <Link href="/about" style={styles.button}>
       About
      </Link>
      <Link href="/pagina1" style={styles.button}>
        Pagina 1
      </Link>
      <Link href="/pagina2" style={styles.button}>
        Pagina 2
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 20,
    fontSize: 100
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    marginVertical: 10,
  },
});
