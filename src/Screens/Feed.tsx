/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useLayoutEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

const FeedScreen: React.FC = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.openDrawer()}>
          <Icon
            name="three-bars"
            size={20}
            color="black"
            // style={{paddingLeft: 50}}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed Screen</Text>
      <Pressable onPress={() => navigation.navigate('TweetDetailScreen')}>
        <Text>Go to Tweet Details</Text>
      </Pressable>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
