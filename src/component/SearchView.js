import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View, Text } from 'react-native';

export default class SearchView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: ''
        }
    }
    getWeatherMessage () {
        const { isError, isLoading, cityName, temp } = this.props;
        console.log(this.props)
        if (isLoading) return '...Loading';
        if (isError) return 'Vui long thu lai';
        if (!cityName) return 'Nhap ten thanh pho cua ban!';
        return `${cityName} hiện tại là ${temp}oC`;
    }
    render () {
        const { searchTemp } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.message}>{this.state.cityName}</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.cityName}
                    onChangeText={cityName => this.setState({ cityName })}
                />
                <Text style={styles.message}>{this.getWeatherMessage()}</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => searchTemp(this.state.cityName)}>
                    <Text style={styles.buttonText}>Lấy nhiệt độ</Text>
                </TouchableOpacity>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        color: 'white',
        fontSize: 25
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 50
    },
    buttonText: {
        color: 'white'
    },
    textInput: {
        margin: 10,
        backgroundColor: 'black',
        height: 40,
        paddingHorizontal: 10,
        color: 'white'
    }
});