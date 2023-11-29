import { View, Text, StyleSheet } from 'react-native';


const Home  = () => (
  <View style={styles.container}>
    <Text style={styles.label}>App testing environment variables</Text>

    <View style={styles.messageContainer}>
      <Text>{process.env.EXPO_PUBLIC_ENVIRONMENT_MESSAGE}</Text>
    </View>
  </View>
);


const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },

 label: {
  fontWeight: 'bold',
  marginBottom: 8
 },

 messageContainer: {
  padding: 16,
  borderRadius: 8,
  backgroundColor: '#fff8b0',
 }
});


export default Home;