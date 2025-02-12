import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { OPENROUTER_API_KEY } from '@env';
import styles from '../styles/styles';
import LogoWhite from './LogoWhite';

const MotivationalApp = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMotivation = async () => {
    if (!inputText) {
      setResponseText("Digite algo antes de gerar a motivação!");
      return;
    }
    setLoading(true);
    Keyboard.dismiss();
    try {
      const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
        model: 'openai/gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Me motive: ${inputText}` }],
      }, {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      setResponseText(response.data.choices[0].message.content);
    } catch (error) {
      setResponseText('Erro ao obter resposta. Verifique a API Key e tente novamente.');
    }
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoWhite size={100} />
        </View>
        <View style={{ height: 40 }} />  
       
        <View style={styles.spacer} />
        <Text style={styles.title}>Como você está se sentindo?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui..."
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity 
          onPress={fetchMotivation} 
          style={styles.button}>
          <Text style={styles.buttonText}>Gerar Motivação</Text>
        </TouchableOpacity>
        {loading && <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 10 }} />}
        {responseText ? <Text style={styles.response}>{responseText}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MotivationalApp;
