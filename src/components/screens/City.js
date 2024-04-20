import React from 'react'
import {SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native'
import moment from 'moment'
import IconText from '../iconText'

function City({ weatherData }) {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText, 
    riseSetWrapper,
    riseSetText,
    imageLayout,
    rowLayout
    } = styles

    const { name,country,population,sunrise,sunset } =weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground 
        source={require('../../../assets/dubai_bg.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText 
            iconName={'user'} 
            iconColor={'#cad7ed'} 
            bodyText={`Population: ${population}`} 
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText 
            iconName={'sunrise'} 
            iconColor={'white'} 
            bodyText={moment(sunrise).format('h:mm:ss a')} 
            bodyTextStyles={riseSetText} 
          />
          <IconText 
            iconName={'sunset'} 
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')} 
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex:1
  },
  cityName: {
    fontSize:40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper:{
    justifyContent: 'center',
    marginTop: 30
  },
  populationText:{
    fontSize: 25,
    marginLeft: 7.5,
    color: '#cad7ed'
  },
  riseSetWrapper:{
    justifyContent: 'space-around',
    marginTop:30,
  },
  riseSetText:{
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default City
