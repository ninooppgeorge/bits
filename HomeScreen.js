import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// import SplashScreen from "react-native-splash-screen";



export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    onpressCall(e) {
        this.props.navigation.navigate('SupportCall');
    }
    onpressNews(e) {
        this.props.navigation.navigate('SupportCall');
    }
    componentDidMount() {
        // SplashScreen.hide();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgcont}>
                    <Image
                        source={require('./assets/logo.png')}
                    />
                </View>
                <View style={styles.buttoncont}>
                    <TouchableOpacity onPress={this.onpressCall.bind(this)}>
                        <Text style={styles.button}>LOG A SUPPORT CALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onpressNews.bind(this)}>
                        <Text style={styles.button}>LATEST NEWS</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    imgcont: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        marginTop: 30
    },
    buttoncont: {
        flex: 1
    },
    button: {
        backgroundColor: '#005983',
        borderRadius: 10,
        padding: 20,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff'
    },
    textc: {
        color: '#fff'
    }
});
