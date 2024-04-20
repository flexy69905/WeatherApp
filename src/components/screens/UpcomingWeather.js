/* eslint-disable indent */
import React from 'react' 
import { SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../ListItem';


function UpcomingWeather({weatherData}) {
    const renderItem = ({item})=> (
      <ListItem
        condition={item.weather[0].main} 
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max} 
        />
        )

    const {container, image} = styles
    
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../../assets/upcoming_background.jpg')} 
        style={image}
      >
      
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
})
export default UpcomingWeather
