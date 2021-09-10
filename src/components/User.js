import React from 'react';
import { Text, ScrollView } from 'react-native';
const User = props => {
    return (
        <ScrollView>
            <Text  style={{padding: 10 }}>
                Username: {props.user.username}
                {"\n"}
                Email: {props.user.email}</Text>
        </ScrollView>
    );
};
export default User;