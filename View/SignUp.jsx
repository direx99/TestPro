import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import visible from './assest/visible.png';
import visibility from './assest/visibility.png';

const SignUp = () => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={{flex: 1}}>
      <View style={styles.SignUp}>
        <Text style={styles.SignUpTitle}>Register</Text>
        <Text style={styles.SignUpSubTitle}>Create your account</Text>
      </View>
      <View style={styles.FormView}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={'#A5ABAC'}
          style={styles.FullInput}></TextInput>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'#A5ABAC'}
          style={styles.FullInput}></TextInput>
        <View
          style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          <TextInput
            placeholder="Password"
            secureTextEntry={secureText ? true : false}
            keyboardType="visible-password"
            placeholderTextColor={'#A5ABAC'}
            style={styles.FullInput}></TextInput>
          {secureText ? (
            <TouchableOpacity
              style={styles.IconCon}
              onPress={() => {
                setSecureText(false);
              }}>
              <Image style={styles.VisibleIcon} source={visible} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.IconCon}
              onPress={() => {
                setSecureText(true);
              }}>
              <Image style={styles.VisibleIcon} source={visibility} />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          <TextInput
            placeholder="Password"
            secureTextEntry={secureText ? true : false}
            keyboardType="visible-password"
            placeholderTextColor={'#A5ABAC'}
            style={styles.FullInput}></TextInput>
          {secureText ? (
            <TouchableOpacity
              style={styles.IconCon}
              onPress={() => {
              }}>
              <Image style={styles.VisibleIcon} source={visible} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.IconCon}
              onPress={() => {
                setSecureText(true);
              }}>
              <Image style={styles.VisibleIcon} source={visibility} />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
            bottom: 40,
          }}>
          <Text style={styles.HaveAccount}>I have an account ? </Text>
          <Text style={[styles.HaveAccount,{color:'#99B65C',fontWeight:600}]}>Log in </Text>

        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  SignUp: {
    backgroundColor: '#1F2E3D',
    paddingHorizontal: 20,
    marginTop: -60,
  },
  SignUpTitle: {
    color: '#fff',
    marginTop: 160,
    fontWeight: 600,
    fontSize: 37,
  },
  SignUpSubTitle: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
    opacity: 0.7,
    marginBottom: 40,
  },
  FormView: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    gap: 20,
    marginBottom: -40,
  },
  FullInput: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  VisibleIcon: {
    width: 20,
    height: 20,
  },
  IconCon: {
    right: 20,
    position: 'absolute',
  },
});
