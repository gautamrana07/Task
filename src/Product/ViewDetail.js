import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'




const ViewDetail = (props) => {

    const [data, setData] = useState()

    const [data1, setData1] = useState()
    let param = useParams();

    console.log("sjdghfusgf", props?.route?.params?.id)

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

    useEffect(() => {

        data && data?.products?.map((item, id) => {
            if (item?.id == props?.route?.params?.id) {
                console.log("jhgdjshgvdf", item)
                setData1(item)

            }
        })
        // console.log("jshdguhdkfjgn",data.products)

    }, [data])

    const details = (e, id) => {
        if (id.length != 0) {
            navigation.navigate("ViewDetail")
        }

        console.log("iss", id)
    }


    return (
        <ScrollView>
            <View>



                <View>
                    <Image source={require('../Image/1.jpg')} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Product</Text>
                    <View style={styles.mainCardView}>

                        <Image style={styles.stretch}
                            // source={require('../Image/xr.jpg')}
                            source={{
                 uri: data1?.images[0]}}


                            />
                        {/* {data?.products?.map((item) => {
                            return ( */}
                        <View>
                            <Text style={{ paddingRight: 200 }}>{data1?.title}</Text>
                            <Text style={{ paddingRight: 200 }}>{data1?.description}</Text>
                            <Text style={{ paddingRight: 200 }}>{data1?.price}</Text>
                            <Text style={{ paddingRight: 200 }}>{data1?.discountPercentage}</Text>
                            <Text style={{ paddingRight: 200 }}>{data1?.stock}</Text>
                            <Text style={{ paddingRight: 200 }}>{data1?.brand}</Text>
                            <Text style={{ paddingRight: 200 }}>{data1?.category}</Text>
                        </View>
                        {/* )
                        })} */}


                    </View>

                 

                   
                </View>

             
            </View>
        </ScrollView>
    )
}

export default ViewDetail

const styles = StyleSheet.create({
    stretch: {
        width: 400,
        height: 350,
        resizeMode: 'stretch',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginTop: 80

    },
})