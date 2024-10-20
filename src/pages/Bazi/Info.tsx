import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import paipan from '../../util/paipan';

const BaziInfo: FC<{}> = () => {
  // const [gender, setGender] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>
          text
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BaziInfo;
