import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useState } from 'react';
import TheDynamic from './components/TheDynamic';

export default function App() {

  // The functionality for the toggle button. 
  const [toggleMoreButton, setToggleMoreButton] = useState(false);




  const [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <ImageBackground
      source={require('./assets/light-bg.png')}
      style={styles.backgroundImageContainer}
    >
      {/* The container */}
      <View style={styles.theContainer}>
        {/* Upper portion */}
        <View style={styles.upperContainer}>
          <View style={styles.textContaianer}>
            <Text style={[styles.normalText]}>“The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract
              truth and value.”
            </Text>

            <Text style={[styles.normalText, styles.writer]}>
              - Ada Lovelace
            </Text>
          </View>

          <Image
            source={require('./assets/refresh.png')}
          />
        </View>



        {/* Lower portioin */}
        <View style={styles.lowerContainer}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image
              source={require('./assets/sun.png')} />

            <Text style={[styles.goodMorning]}>Good Morning</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.theTime}>11:37  <Text style={{ fontSize: 15, color: '#fff', alignSelf: 'flex-end' }}>BST</Text></Text>
          </View>

          <View>
            <Text style={[styles.goodMorning, styles.inLondon]}>In London, UK</Text>
          </View>

          {/* <Button title='Show more'></Button> Don't use this button. Rather use as below.  */}
          <TouchableOpacity onPress={() => setToggleMoreButton(!toggleMoreButton)}
            style={styles.touchableOpacityButton}
          >
            {toggleMoreButton ? (<Text style={[styles.buttonText]}>Less</Text>
            ) : (<Text style={[styles.buttonText]}>More</Text>
            )}

            {
              toggleMoreButton ? (<Image
                source={require('./assets/arrow-down.png')}
                style={styles.upArrowDownArrow} />
              ) : (<Image
                source={require('./assets/arrow-up.png')}
                style={styles.upArrowDownArrow} />
              )
            }
          </TouchableOpacity> 
        </View>


        {
          toggleMoreButton && ( <View style={{marginHorizontal:-20, paddingHorizontal: 2, marginVertical: -32}}>
            <TheDynamic littleText='Current time zone' bigText='Europe/London'/>
            <TheDynamic littleText='Day of the year' bigText='295'/>
            <TheDynamic littleText='Day of the week' bigText='5'/>
            <TheDynamic littleText='Day of the week number' bigText='42'/>
          </View>)
        }
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
  },
  theContainer: {
    marginVertical: 38,
    marginHorizontal: 28,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  // Styleing for the upper container.
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContaianer: {
    flexDirection: 'column',
  },
  normalText: {
    color: '#fff',
    fontFamily: 'Inter-Regular',
    fontSize: 12
  }
  , writer: {
    marginTop: 10,
  },





  // Styleing for the lower container.
  goodMorning: {
    fontFamily: 'Inter-Regular',
    fontSize: 25,
    color: '#fff',
  },
  theTime: {
    fontFamily: 'Inter-Bold',
    fontSize: 85,
    color: '#fff',
  },
  inLondon: {
    fontFamily: 'Inter-Bold',
    color: '#fff',
    letterSpacing: 3
  },
  touchableOpacityButton: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 2,
    marginTop: 38,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#000',
    fontFamily: 'Inter-Bold',
    fontSize: 28,
  },
  upArrowDownArrow: {
    width: 40,
    height: 40,
  }
});










// const [toggled, setToggled] = React.useState(false);
// const toggle = () => {
//   setToggled(!toggled);
// };

// // The functionality for the time. 
// const [time, setTime] = React.useState(new Date());
// const tick = () => {
//   setTime(new Date());
// };

// // The functionality for the weather. 
// const [weather, setWeather] = React.useState(null);
// const fetchWeather = async () => {
//   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=d2333333333333333333333333333333');
//   const data = await response.json();
//   setWeather(data);
// };