import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Modal,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {faceId} from '../../utilities/commonLogos';

const CardControls = (props: any) => {
  const {iconSources, setIconSources} = props;
  const [showOverlay, setShowOverlay] = useState(false);
  const navigation = useNavigation();
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleIconPress = (index: number) => {
    if (!showOverlay) {
      setShowOverlay(true);
      setClickedIndex(index);
      setIconSources((prevIconSources: any) =>
        prevIconSources.map((source: any, i: number) =>
          i === index ? {...source, isClicked: !source.isClicked} : source,
        ),
      );
    }
  };

  const handleOutsidePress = () => {
    setShowOverlay(false);
    if (clickedIndex === 0) {
      navigation.navigate('CardControls');
    }
  };

  return (
    <View style={styles.container}>
      {iconSources.map((source: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={{alignItems: 'center'}}
          onPress={() => handleIconPress(index)}>
          <SvgXml
            xml={source.isClicked ? source.iconClicked : source.icon}
            width="70"
            height="70"
          />
          <Text style={styles.text}>{source.text}</Text>
        </TouchableOpacity>
      ))}

      <Modal visible={showOverlay} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.overlay} onPress={handleOutsidePress}>
          <View style={styles.centeredIcon}>
            <SvgXml xml={faceId} width="70" height="70" />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 30,
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredIcon: {
    position: 'absolute',
    top: height / 2 - 35,
    left: width / 2 - 35,
  },
});

export default CardControls;
