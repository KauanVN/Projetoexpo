import React from "react"
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from "./style";


export default function CardFilmes(){
    return(

<TouchableOpacity>
    <Image style = {styles.ImagesFilmes} source = {require(`../../Img/1.jpg`)} ></Image>
    <Text style ={styles.tituloFilmes} > Shazam </Text>
    <Text style={styles.notaFilmes}> 8.8 </Text>
     

</TouchableOpacity>

    );
}