import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getColorByWuxing, JZ_60} from '../util/wuxing';
import {mixHexColors} from '../constant/Util';

const ShowColors: FC<{}> = () => {
  const data = [];
  for (let key in JZ_60) {
    data.push(key);
  }
  //   data.sort((a, b) => a[0] - b[0]);

  return (
    <View style={styles.contentContainer}>
      {data.map(([t, d]) => {
        const [c1, c2] = [getColorByWuxing(t), getColorByWuxing(d)];
        return (
          <View style={styles.row} key={t + d}>
            <Text style={{color: mixHexColors(c1, c2, 0.5)}}>
              {t}
              {d}
            </Text>
            <View
              style={[
                styles.chunk,
                {
                  backgroundColor: mixHexColors(c1, c2, 0.5),
                },
              ]}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  row: {
    //   flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  chunk: {
    padding: 20,
  },
});

export default ShowColors;
