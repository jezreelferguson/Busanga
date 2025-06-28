import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFE34B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#fff',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
