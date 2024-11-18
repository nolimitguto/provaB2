import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007BFF',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
