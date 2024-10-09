import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TweetScreen: React.FC = ({Navigation}) => {
  return (
    <View style={styles.container}>
      <Text>TweetScreen</Text>
    </View>
  );
};

export default TweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
