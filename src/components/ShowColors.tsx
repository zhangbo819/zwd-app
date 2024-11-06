import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getColorByWuxing, JZ_60} from '../util/wuxing';
import {mixHexColors} from '../constant/Util';
import {COLOR_THEME_COMMON} from '../constant/UI';

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
        const color = mixHexColors(c1, c2, 0.4);
        return (
          <View
            style={[
              styles.row,
              color === COLOR_THEME_COMMON && {borderColor: color},
            ]}
            key={t + d}>
            <Text style={[styles.tgdz, {color: c1}]}>
              {t}
              <Text style={[{color: c2}]}>{d}</Text>
            </Text>

            <View
              style={[
                styles.chunk,
                {
                  backgroundColor: color,
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
    width: '10%',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
  },
  chunk: {
    // margin: 0,
    width: '100%',
    height: 26,
  },
  chunk_text: {
    textAlign: 'center',
  },
  tgdz: {
    fontSize: 18,
    fontWeight: 'bold',
    // backgroundColor: '#fff',
  },
});

export default ShowColors;
