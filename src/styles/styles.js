import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
    color: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 8,
    color: '#ffffff',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#1E90FF',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  response: {
    marginTop: 20,
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
