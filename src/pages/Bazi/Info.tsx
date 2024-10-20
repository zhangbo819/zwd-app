import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import paipan from '../../util/paipan';

const BaziInfo: FC<{}> = () => {
  // const [gender, setGender] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>
          {JSON.stringify(paipan.GetInfo(0, 1994, 8, 19, 5), null, 4)}
          {/* {JSON.stringify(paipan.GetInfo(0, 1995, 1, 1, 16), null, 4)} */}
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
