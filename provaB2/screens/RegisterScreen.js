import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import supabase from './supabaseclient';


export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { height: 40, borderBottomWidth: 1, marginBottom: 20 },
});
