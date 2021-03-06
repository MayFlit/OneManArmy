import React from "react";
import {SafeAreaView, ImageBackground, Image, TouchableOpacity, View} from 'react-native';
import {Enemy} from "../Enemy/Enemy";
import hero from '../../store/hero';
import {observer} from "mobx-react-lite";
import {GameStyle} from "./style";
import { Shop } from "../Shop/Shop";
import { Bar } from "../Bar/Bar";
import { Skills } from "../Skills/Skills";
import {Boss} from "../Boss/Boss";


export const Game = observer (({ navigation }) => {
  const loadScene = () => {
    navigation.navigate('Shop');
  }
  const loadScene1 = () => {
    navigation.navigate('Profile');
  }

    return (
        <ImageBackground source={require('../../assets/backgrounds/background2.png')} style={{width: '100%', height: '100%'}}>
            <Bar />

            <SafeAreaView style={GameStyle.container}>

                <View style={GameStyle.shopContainer}>
                <TouchableOpacity onPress={loadScene}>
                <Image source={require('../../assets/skills/icons/shop2.png')} style={GameStyle.shop}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene1}>
                <Image source={require('../../assets/skills/icons/profile2.png')} style={GameStyle.shop}/>
                </TouchableOpacity>
                </View>


                {!hero.bossIndicator && <Enemy/>}
                {hero.bossIndicator && <Boss/>}


                {hero.doubleDamageIndicator ?
                <TouchableOpacity onPress={() => hero.doubleHit()}>
                    <View style={GameStyle.heroContainer}>
                        <Image source={require('../../assets/hero/mage.gif')} style={GameStyle.hero}/>
                    </View>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => hero.hit()}>
                    <View style={GameStyle.heroContainer}>
                        <Image source={require('../../assets/hero/mage.gif')} style={GameStyle.hero}/>
                    </View>
                </TouchableOpacity>}

                <Skills />
              
            </SafeAreaView>
        </ImageBackground>
    );
})


