import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { WebView } from "react-native-webview";
import LoadingScreen from './loading';


export default class SupportCallScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{ uri: "https://bits.ie/create-ticket" }}
                    startInLoadingState={true}
                    renderLoading={() => {
                        return <LoadingScreen />
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    }
});
