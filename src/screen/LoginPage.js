import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Button, } from 'react-native';



const LoginPage = () => {

  const [state, setState] = useState({
    email: "",
    password: ""
  })
  const image = require('../../assets/Background.png');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.img_bg}>
        <Image style={styles.img_logo} source={require('../../assets/Logo_new_wh.png')} />
      </ImageBackground>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#77838F"
          onChangeText={text => setState({ ...state, email: text })} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#77838F"
          onChangeText={text => setState({ ...state, password: text })} />
      </View>
      <View style={styles.inputButton}>

        <TouchableOpacity
          style={styles.btnSignIn}
        >
          <Text style={styles.texts}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.text_or}>or</Text>
        <TouchableOpacity
          style={styles.btnFB}
        >
        <Image style={styles.imgFB} source={require('../../assets/facebook.png')} />

          {/* <Text style={styles.textFB}>Sign In with Facebook</Text> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnIp}
        >
        <Image style={styles.imgIp} source={require('../../assets/apple.png')} />
          {/* <Text style={styles.texts}>Sign In with Apple</Text> */}
        </TouchableOpacity>
      </View>

      <View >

        <Text style={styles.text_sign}>Need An Account? <Text style={styles.text_links}>Sign up</Text></Text>
        <Text style={styles.text_sign}>Forgot Your Password? <Text style={styles.text_links}>Retrive</Text> </Text>
      </View>

    </View>


  );
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    // backgroundColor:"#FFF",
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
    borderColor: "#DBDBDB",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  img_logo: {
    width: 200,
    height: 200,
    marginLeft: "25%",
    // marginRight: "50%",
    justifyContent: "center",
    resizeMode: "cover",
    alignItems: "center"
  },
  img_bg: {
    // flex:1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: 478
  },
  btnSignIn: {
    elevation: 8,
    backgroundColor: "#83397A",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 120,
    height: 40,
    width: 286,
  },
  btnFB: {
    elevation: 8,
    backgroundColor: "#2D4CB3",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 40,
    width: 286,
  },
  btnIp: {
    elevation: 8,
    backgroundColor: "#000000",
    borderRadius: 22.5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 40,
    width: 286,


  },
  texts: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_sign: {
    color: '#77838F'
  },  
  text_links: {
    color: '#2FC3DD',
  },
  inputButton: {
    width: "80%",
    // backgroundColor:"#FFF",
    borderRadius: 15,
    // height:50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  text_or: {
    alignContent: "center",
    justifyContent: "center",
    marginLeft:"45%", 
    paddingTop: 10,
    paddingBottom: 10
  },
  imgFB: {
    // position: 'absolute',
    left: 40,
  },
  imgIp: {
    left: 40
  },

});