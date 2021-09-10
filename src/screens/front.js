import React from 'react';
import MainPage from '../components/MainPage';

const FrontScreen = props => {
    return (
        <MainPage navigation={props.navigation} />
    );
};

FrontScreen.navigationOptions = {
    title: 'Main Page'
};
export default FrontScreen;