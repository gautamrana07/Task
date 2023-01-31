import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView, } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ViewDetail from './ViewDetail'

const Product = ({ navigation }) => {

    let param = useParams();

    const [data, setData] = useState()
    const [id, setId] = useState('')

    const url = "https://dummyjson.com/products"

    useEffect(() => {
        fetch(url)
            .then(response =>
                // {console.log("response12",response)
                response.text()
                // }
            )
            .then(json => {
                console.log("jsonnnn", JSON.parse(json))
                setData(JSON.parse(json))
            }).catch(e => {
                console.log("e", e)
            })
    }, [])

    console.log("ss0", data)



    // const details = (e, id) => {
    //     if(id.length != 0){
    //  navigation.navigate("ViewDetail")}
    //  console.log("iss", id)
    // }

    // useEffect(()=>{
    //     const details = (e, id) => {
    //         navigation.navigate("ViewDetail")
    //        }
    // },[id])


    return (
        <ScrollView style={{ backgroundColor: '#ffff', height: '100%', width: '100%' }}>
            <View>
                {data?.products?.map((item) => {
                    return (
                        <View>
                            {/* <Image source={require('../Image/1.jpg')} /> */}
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Product</Text>
                            <View style={styles.mainCardView}>

                                <Image style={styles.stretch}
                                    // source={require('../Image/xr.jpg')}

                                    source={{
          uri: item?.images[0]
        }}
                                    
                                    
                                     />


                                {/* {data?.products?.map((item) => {
                            return ( */}
                                <View>
                                    <Text style={{ paddingRight: 200 }}>{item.title}</Text>
                                    <Text style={{ paddingRight: 200 }}>{item.description}</Text>
                                    <Text style={{ paddingRight: 200 }}>{item.price}</Text>
                                    <Text style={{ paddingRight: 200 }}>{item.discountPercentage}</Text>
                                    <Text style={{ paddingRight: 200 }}>{item.stock}</Text>
                                    <Text style={{ paddingRight: 200 }}>{item.brand}</Text>
                                    <Text style={{ paddingRight: 200 }}>{item.category}</Text>
                                </View>
                                {/* )
                        })} */}


                            </View>

                            <TouchableOpacity style={styles.button} onPress={(e,) => {
                                navigation.navigate(`ViewDetail`,{id:item?.id})
                                // details(e, item?.id)
                                // setId(item?.id)
                            }} >
                                <Text>View Detail</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.but} onPress={() => {
                                navigation.navigate("Carts")
                            }} >
                                <Text>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>)
                })}
                
            </View>

        </ScrollView>
    )
}

export default Product

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
    view: {
        width: '100%',
        height: 40,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,

    },
    but: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginTop: 10
    }

})