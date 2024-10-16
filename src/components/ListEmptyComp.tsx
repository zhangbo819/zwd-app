import {Text, View} from 'react-native';
import STYLES from '../constant/STYLES';
import {getHeight} from '../constant/Util';

export function ListEmptyComponent() {
  return (
    <View style={[STYLES.CCC, {marginTop: getHeight(10)}]}>
      <Text>暂无</Text>
    </View>
  );
}
