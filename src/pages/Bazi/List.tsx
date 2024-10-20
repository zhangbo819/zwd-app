import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const List: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default List;
