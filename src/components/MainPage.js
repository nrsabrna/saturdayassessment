import React from 'react';
import { Text, View, Button } from 'react-native';
//import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Users from '../components/Users';
const MainPage = ({navigation}) => {
    return(
        <View>
   <Button
      title="List of users"
      onPress={() =>
        navigation.navigate({ Users })
      }
    />
  </View>
    );
};
export default MainPage;
