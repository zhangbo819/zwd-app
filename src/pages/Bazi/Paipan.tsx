import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Paipan: FC<{}> = () => {
//   const [gender, setGender] = useState(0);

  return <View style={styles.container}>
    <Text>Paipan</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Paipan;
