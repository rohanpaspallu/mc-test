import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, IconButton, Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {ReactComponent as TuneIcon} from '../../../assets/images/controls.svg';
import {Path, Svg} from 'react-native-svg';
import controlsLogo from '../../../assets/images/controls.svg';
import {readFile} from 'react-native-fs';

const SecondPage = () => {
  const loadSvgFile = async () => {
    try {
      const svgString = await readFile(
        '../../../assets/images/controls.svg',
        'utf8',
      );
      return svgString;
    } catch (error) {
      console.error('Error loading SVG file:', error);
      return null;
    }
  };

  const imageSources = [
    {id: 1, url: '../../../assets/images/MasterCardImage.png'},
    {id: 2, url: '../../../assets/images/MasterCardImage.png'},
    {id: 3, url: '../../../assets/images/MasterCardImage.png'},
  ];
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 20}}>
          Mastercard •••• 1234
        </Text>

        {/* <Image
          source={require('../../../assets/images/MasterCardImage.png')}
          style={{width: 300, height: 200}}
        /> */}

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {imageSources.map((source, index) => (
              <Image
                key={index}
                source={require('../../../assets/images/MasterCardImage.png')}
                style={{
                  width: 350,
                  height: 200,
                  marginHorizontal: 15,
                  borderRadius: 10,
                }} // adjust width, height, and margin as needed
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            {/* <TouchableOpacity onPress={() => console.log('Pressed')}>
              <IconButton
                icon={async () => {
                  const svgString = await loadSvgFile();
                  if (svgString) {
                    return (
                      <Svg width={24} height={24} viewBox="0 0 24 24">
                        <Path d={svgString} />
                      </Svg>
                    );
                  } else {
                    return null;
                  }
                }}
                onPress={() => {
                  // Handle onPress event
                }}
              />
              <Text style={{marginTop: 5}}>Your Text Here</Text>
            </TouchableOpacity> */}
          </View>

          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => console.log('Pressed')}>
            <IconButton
              icon="tune"
              iconColor="#E35205"
              size={50}
              style={{
                borderColor: '#E35205',
                borderWidth: 3,
              }}
            />
            <Text style={{marginTop: 5}}>Your Text Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: -30,
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
});

export default SecondPage;
