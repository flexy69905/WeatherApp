import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../RowText';
import { weatherType } from '../../utilities/weatherType';

function CurrentWeather({ weatherData }) {
  const {
    wrapper,
    container,
    tempStyles,
    imageLayout,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles;

  const { main: { temp, feels_like,temp_max, temp_min }, weather } = weatherData;
  const weatherCondition = weather[0].main;

  // Get the icon name dynamically based on the weather condition
  const iconName = weatherType[weatherCondition.icon]; 

  return (
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weatherCondition].backgroundColor}]}>
      <ImageBackground
        source={require('../../../assets/dubai_bg.jpg')}
        style={imageLayout}
      >
        <View style={container}>
          {/* Render Feather icon dynamically */}
          <Feather
            name={'sun'}
            size={100}
            color={"#faf607"}
          />
          <Text style={tempStyles}>{`${temp}°`}</Text>
          <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
          <RowText
            messageOne={`High: ${temp_max}°  `}
            messageTwo={`Low: ${temp_min}°`}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
        </View>
        <RowText
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageLayout: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  tempStyles: {
    color: 'white',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'white'
  },
  highLow: {
    color: 'white',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather;
