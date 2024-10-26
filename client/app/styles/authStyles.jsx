import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  logo: {
    width: 200,
    height:150,
    margin: 'auto'
  }, 
  textInput: {
    padding: 16,
    borderColor: 'grey',
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
    marginTop: 10
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#841584',
    marginBottom: 20,
  },
  forgotPassowrd: {
    textAlign: 'right',
    marginTop: 10,
    color: '#0000EE'
  },
  buttonContainer: {
    backgroundColor: '#841584',
    borderRadius: 5,
    padding:10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
  errorText: {
    color: 'red',
    fontSize: 12
  }
})

export default styles