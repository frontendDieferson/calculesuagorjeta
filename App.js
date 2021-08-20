import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const [conta, setConta] = useState('')
  const [gorjeta, setGorjeta] = useState(0)
  const [pct, setPct] = useState (10)

  const calc = () => {
    let nConta = parseFloat(conta);
    
    if(nConta) {
      setGorjeta((pct/100)*conta)
    } 
  }

useEffect(() => {
  calc()


}, [pct])
 


  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} />

      <Text style={styles.text}>Quanto deu a conta?</Text>
      <TextInput 
      style={styles.input}
      placeholder="Ex: R$50.00" 
      keyboardType="numeric"
      value={conta}
      onChangeText={n => setConta(n)}
      />

      <View style={styles.PctArea}>

     

        <Button color='#093E70' title='10%' onPress={() =>setPct(10)} />
        <Button color='#093E70' color='#093E70' title='15%' onPress={() =>setPct(15)} />
        <Button color='#093E70' title='20%' onPress={() =>setPct(20)} />
        <Button color='#093E70' title='25%' onPress={() =>setPct(25)} />
        <Button color='#093E70' title='30%' onPress={() =>setPct(30)} />
     
      

      </View>
     

      <TouchableOpacity 
      style={styles.calcButton}
      onPress={calc}
      
      
      >
        <Text style={styles.calcButtonText}>{`Calcular ${pct}%`}</Text>
      </TouchableOpacity>

      {gorjeta > 0 && 
      <View style={styles.resultArea}>
        <Text style={styles.resultTitle}>Valor da Conta</Text>

        <Text style={styles.resultItem}>R$ {parseFloat (conta).toFixed(2)}</Text>

        <Text style={styles.resultTitle}>Valor da Gorjeta</Text>

        <Text style={styles.resultItem}>R$ {gorjeta.toFixed(2)} ({pct}%)</Text>

        <Text style={styles.resultTitle}>Valor Total</Text>

        <Text style={styles.resultItem}>R$ {(parseFloat (conta) + gorjeta).toFixed(2)}</Text>
      
      </View>
      }
      <StatusBar style="auto" />
    </View>
  );
}





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
