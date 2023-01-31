import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Cart = () => {
  return (
    <ScrollView>
    <View>
      <View style={styles.mainCardView}>

<Image style={styles.stretch}
    source={require('../Image/xr.jpg')} />
<View>
    <Text style={{ paddingRight: 200 }}>iPhone Xr</Text>
    <Text style={{ paddingRight: 200 }}>SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with</Text>
    <Text style={{ paddingRight: 200 }}>Rs: 40,000</Text>
    <Text style={{ paddingRight: 200 }}>Discount - 10%</Text>
    <Text style={{ paddingRight: 200 }}>Stock-123</Text>
    <Text style={{ paddingRight: 200 }}>Brand-Apple</Text>
    <Text style={{ paddingRight: 200 }}>Category: 'SmartPhone'</Text>
</View>

</View>
 <TouchableOpacity style={styles.button} >
                    <Text>Buy Now</Text>
                </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
    mainCardView: {
        // height: 150,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#ffff',
        borderRadius: 15,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 8,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // paddingLeft: 16,
        // paddingRight: 14,
        marginTop: 30,
        // marginBottom: 6,
        // marginLeft: 16,
        // marginRight: 16,

    },
    stretch: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginTop:50

    },
})