import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Button, Platform } from 'react-native';
import styles from './styles';




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
      behavior={Platform.OS=='ios'?'padding' : null}
      style={styles.input}
      placeholder="Ex: R$50.00" 
      keyboardType="numeric"
      value={conta}
      onChangeText={n => setConta(n)}
      />

      <View style={styles.PctArea}>

     

        <Button color='#093E70' title='10%' onPress={() =>setPct(10)} />
        <Button color='#093E70' title='15%' onPress={() =>setPct(15)} />
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





