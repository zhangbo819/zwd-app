import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {JZ_60, WuXing} from '../util/wuxing';
import {mixHexColors} from '../util';
import {COLOR_THEME_COMMON} from '../constant/UI';

const ShowColors: FC<{}> = () => {
  const data = [];
  for (let key in JZ_60) {
    data.push(key);
  }
  //   data.sort((a, b) => a[0] - b[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>六十甲子</Text>
      <View style={styles.contentContainer}>
        {data.map(([t, d]) => {
          const [c1, c2] = [
            WuXing.getColorByWuxing(t),
            WuXing.getColorByWuxing(d),
          ];
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    marginBottom: 8,
    color: COLOR_THEME_COMMON,
    fontSize: 20,
    fontWeight: 'bold',
  },
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
