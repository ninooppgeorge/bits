import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class LoadingScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./assets/loading.gif')}
                    style={{ width: 50, height: 50 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    }
});
