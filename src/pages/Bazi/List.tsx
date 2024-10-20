import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const List: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>List</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default List;
