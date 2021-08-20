import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#093E70',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      width: "90%",
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      fontSize: 16,
      color: '#093E70',
      fontWeight: 'bold'
      
    },
    calcButton: {
      marginTop: 10,
      backgroundColor: '#FAB71C',
      width: '50%',
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    calcButtonText: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      alignItems: 'center',
  
    },
    resultArea: {
      width: '90%',
      marginTop: 30,
      backgroundColor: '#FFF',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    resultTitle: {
      fontSize: 16,
      fontWeight: 'bold',
  
    },
    resultItem: {
      fontSize: 15,
      fontWeight: '300',
      marginBottom: 20,
    },
    PctArea:{
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      margin: 20,
      
    },
  
  
  });

  export default styles