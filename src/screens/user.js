import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import {BsPeopleCircle} from 'react-icons/bs';
// import { NavigationContainer } from "@react-navigation/native";
// import { block } from "react-native-reanimated";
const UserScreen = (props) => {
  const id = props.navigation.getParam("id");
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [userCompany, setUserCompany] = useState([]);

  getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        console.log(json);
        setUserAddress(json.address);
        setUserCompany(json.company);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    console.log(id);
    setLoading(true);
    getUser();
  }, []);
  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://i.pravatar.cc/300'}}/>
                <Text style={styles.name}> {user.username} </Text>
                <Text style={styles.userInfo}>{user.email} </Text>
                <Text style={styles.userInfo}>{userCompany.name} </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              </View>
                <Text style={styles.info}>{user.name}</Text>

            <View style={styles.item}>
              </View>
                <Text style={styles.info}>{user.phone}</Text>
 
            <View style={styles.item}>
              </View>
                <Text style={styles.info}>{user.website}</Text>

            <View style={styles.item}>
              </View>
                <Text style={styles.info}>{userAddress.zipcode}</Text>
          </View>
      </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#DCDCDC",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
    body:{
      backgroundColor: "#778899",
      height:500,
      alignItems:'center',
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:5
    },
    iconContent:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:18,
      marginTop:20,
      color: "#FFFFFF",
    }
  });
