import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TweetDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>TweetDetailScreen</Text>
    </View>
  );
}

export default TweetDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
