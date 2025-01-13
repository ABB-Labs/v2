import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  View,
  Text,
  Image
} from 'react-native';
import NavBar from '../components/nav/NavBar';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';

export default function SignIn() {
  const leaderboard = [
    {
      image: require('./icon.png'),
      name: 'Cowland',
      days: 109,
      isCurrentUser: false
    },
    {
      image: require('./icon.png'),
      name: 'Cowland',
      days: 109,
      isCurrentUser: false
    },
    {
      image: require('./icon.png'),
      name: 'Cowland',
      days: 109,
      isCurrentUser: false
    },
    {
      image: require('./icon.png'),
      name: 'Cowland',
      days: 109,
      isCurrentUser: false
    },
    {
      image: require('./icon.png'),
      name: 'Cowland',
      days: 109,
      isCurrentUser: false
    },
    {
      image: require('./icon.png'),
      name: 'Cowland',
      days: 109,
      isCurrentUser: false
    },
    {
      image: require('./icon.png'),
      name: 'YOU',
      days: 109,
      isCurrentUser: true
    },
    {
      image: require('./icon.png'),
      name: 'Cowland',
      days: 109,
      isCurrentUser: false
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, zIndex: 2, backgroundColor: '#090909' }}>
      <StatusBar style='light' />
      <NavBar styles={{ backgroundColor: 'transparent' }} />
      <View style={{flexDirection:'row',marginLeft: 20, marginRight: 20, marginTop: 5}}>
        <Svg width={20} height={20} viewBox='0 0 20 20' fill='none'>
          <Path d='M13.333 9.167V2.5H6.666v5h-5v10h16.667V9.167h-5zm-5-5h3.333v11.666H8.333V4.167zm-5 5h3.333v6.666H3.333V9.167zm13.334 6.666h-3.334v-5h3.333v5z' fill='#fff' />
        </Svg>
        <Text style={{color: '#FFF', fontSize: 20, fontWeight: '300', marginLeft: 8}}>Leaderboard</Text>
      </View>
      <Text style={{color: '#FFF', fontSize: 30, fontWeight: '500', marginLeft: 20, marginRight: 20, marginTop: 10}}>#{leaderboard.findIndex((element) => element.isCurrentUser)+1} Against Friends</Text>
      <ScrollView style={{ margin: 20 }}>
        {
          leaderboard.map((item, index) => {
            index += 1;
            if (item.isCurrentUser) {
              if (index <= 3) {
                return (
                  <View style={{ flexGrow: 1, flex: 1, flexDirection: 'row', marginBottom: 30, padding: 30, borderRadius: 25, borderWidth: 1, borderStyle: 'dashed', borderColor: 'rgba(255, 255, 255, 0.25)', backgroundColor: '#0c0c0c'}}>
                    <View style={{flexGrow: 1, flexDirection: 'column'}}>
                      <Image source={item.image} style={{width: 40, height: 40, borderRadius: 40, marginBottom: 10}}></Image>
                      <Text style={{color: '#FFF', fontSize: 19, fontWeight: '700', letterSpacing: 1.5}}>{item.name}</Text>
                      <Text style={{color: '#FFF', fontSize: 19, fontWeight: '400', letterSpacing: 1.5, marginTop: 35}}>{item.days} Days</Text>
                    </View>
                    <View style={{flex: 1}}></View>
                    <Text style={{color: '#FFF', textAlign: 'right', fontSize: 125, fontWeight: '500', letterSpacing: 10}}>#{index}</Text>
                  </View>
                )
              } else {
                return (
                  <View style={{ flexGrow: 1, flex: 1, flexDirection: 'row', marginBottom: 30, padding: 30, borderRadius: 20, borderWidth: 1, borderStyle: 'dashed', borderColor: 'rgba(255, 255, 255, 0.25)', backgroundColor: '#0c0c0c', alignItems: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 22, fontWeight: '700'}}>#{index}</Text>
                    <Text style={{color: '#FFF', fontSize: 15, fontWeight: '700', letterSpacing: 1.2, marginLeft: 25}}>{item.name}</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{color: '#FFF', fontSize: 15, fontWeight: '400'}}>{item.days} Days</Text>
                  </View>
                )
              }
            } else {
              if (index <= 3) {
                return (
                  <View style={{ flexGrow: 1, flex: 1, flexDirection: 'row', marginBottom: 30, padding: 30, borderRadius: 25, borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(255, 255, 255, 0.08)', backgroundColor: '#0c0c0c'}}>
                    <View style={{flexGrow: 1, flexDirection: 'column'}}>
                      <Image source={item.image} style={{width: 40, height: 40, borderRadius: 40, marginBottom: 10}}></Image>
                      <Text style={{color: '#FFF', fontSize: 19, fontWeight: '700', letterSpacing: 1.5}}>{item.name}</Text>
                      <Text style={{color: 'rgba(255, 255, 255, 0.15)', fontSize: 19, fontWeight: '400', letterSpacing: 1.5, marginTop: 35}}>{item.days} Days</Text>
                    </View>
                    <View style={{flex: 1}}></View>
                    <Text style={{color: 'rgba(255, 250, 137, 0.05)', textAlign: 'right', fontSize: 125, fontWeight: '500', letterSpacing: 10}}>#{index}</Text>
                  </View>
                  )
              } else {
                return (
                  <View style={{ flexGrow: 1, flex: 1, flexDirection: 'row', marginBottom: 30, padding: 30, borderRadius: 20, borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(255, 255, 255, 0.08)', backgroundColor: '#0c0c0c', alignItems: 'center'}}>
                    <Text style={{color: 'rgba(255, 255, 255, 0.05)', fontSize: 22, fontWeight: '700'}}>#{index}</Text>
                    <Text style={{color: '#FFF', fontSize: 15, fontWeight: '700', letterSpacing: 1.2, marginLeft: 25}}>{item.name}</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{color: 'rgba(255, 255, 255, 0.15)', fontSize: 15, fontWeight: '400'}}>{item.days} Days</Text>
                  </View>
                  )
              }
            }
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}