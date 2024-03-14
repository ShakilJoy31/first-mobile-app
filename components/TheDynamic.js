import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function TheDynamic({littleText, bigText}) {
    const [fontsLoaded] = useFonts({
        "Inter-Regular": Inter_400Regular,
        "Inter-Bold": Inter_700Bold,
      });
      if (!fontsLoaded) {
        return <ActivityIndicator />
      }


    return (
      <View style={styles.theContainer}>
        <View>
          <Text style={{color: '#fff', fontFamily:'Inter-Regular', fontSize: 18, color: '#000'}}>{littleText}</Text>
        </View>

        <View>
        <Text style={{color: '#fff', fontFamily:'Inter-Bold', fontSize: 28, color: '#000'}}>{bigText}</Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    theContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.8,
        backgroundColor:'#fff',
        paddingHorizontal: 5,
    },

  });