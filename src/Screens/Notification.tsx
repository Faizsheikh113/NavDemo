import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const NotificationScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
    </View>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
