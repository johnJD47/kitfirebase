import React, { Component } from 'react';
import {  AppRegistry } from 'react-native';
import firebase from 'firebase';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button , Body, Picker, Footer, Icon, Title, Right} from 'native-base';
const images = {
  background: require('./BG.png'),
  launchs: require('./logo2.png')
}
state = { submitted: '', name: '',
phone: '',
email: '',
submitted: '',
 }
var database = firebase.database;
class App extends React.Component {
  onButtonPress() {



    const { name, phone, email, selected1 } = this.state;

    console.log(this.state.name)
    firebase.database().ref('/user'+phone).set({
      name: name,
      phone: phone,
      email: email,
      dept: selected1
    }

  ).then(() =>  this.setState({ submitted: "Registered", name: '', email: '', phone: ''}) );



  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCblAx7XFoS6-oAfPZseV9eIUPm5PqQocM",
      authDomain: "students-27902.firebaseapp.com",
      databaseURL: "https://students-27902.firebaseio.com",
      projectId: "students-27902",
      storageBucket: "students-27902.appspot.com",
      messagingSenderId: "712441882422"
    })
      console.log(this.state.name)
  }
  constructor(props) {
        super(props);
        this.state = {


            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }

  static navigationOptions = {
  //   title: 'NaturesBowl',
  header: ({ state, setParams }) => ({
    visible: false,
     headerMode: 'none'
  })
  };
  render () {
    return (
      <ScrollView>
      <Container>

        <Image source={images.background} style={styles.imageBg}>
<Content>
<Body>
<Image
   style={{  marginTop: 10, height: 125, width: 125 ,  resizeMode: 'cover',
    alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}
    source={images.launchs}>
  </Image>
  <Text
    style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>KIT – Kalaignarkarunanidhi Institute of Technology</Text>
<Text
    style={{color: 'white', fontSize: 10, fontWeight: 'bold',marginBottom: 5}}>Appooved by AICTE and Affiliated to Anna University, Chennai.</Text>
<View
  style={{paddingTop: 0, backgroundColor: 'white', height: 350,width: '100%',borderRadius: 20,marginTop: 10 }}>
    <Form>
                           <Item floatingLabel>
                               <Label>Name</Label>
                               <Input
                                 onChangeText={(name) => this.setState({name})}

                                value={this.state.name}
                               />
                           </Item>
                           <Item floatingLabel last>
                               <Label>Phone Number</Label>
                               <Input
                                 keyboardType = 'numeric'
                                 returnKeyType='next'
                                 onChangeText={(phone) => this.setState({phone})}
                               value={this.state.phone}/>
                           </Item>
                           <Item floatingLabel last>
                               <Label>Email</Label>

                               <Input
                                 keyboardType="email-address"
                                 onChangeText={(email) => this.setState({email})}
                               value={this.state.email}/>
                           </Item>

                          <Picker
                            style={{marginLeft: 10, marginRight: 10}}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}>
                            <Item label="Aeronautical Engineering" value="aero" />
                            <Item label="Computer Science Engineering" value="cse" />
                            <Item label="Electrical Electronics Engineering" value="eee" />
                            <Item label="Electronics Communication Engineering" value="ece" />
                            <Item label="Mechanical Engineering" value="mech" />
                              <Item label="Agriculture Engineering" value="agri" />
                              <Item label="Biomedical Engineering" value="biomed" />
                              <Item label="Bio Technology" value="biotech" />
                         </Picker>
                      <View style={{justifyContent: 'center',alignItems: 'center'}}>

                          <Body>
                          <Text style={{fontWeight: 'bold'}}>
                            {this.state.submitted}
                          </Text>

                       <Button rounded
                         onPress={this.onButtonPress.bind(this)}
                         style={{backgroundColor: 'red',}}>
                         <Text style={{color: 'white',fontWeight: 'bold'}}>
                           Submit
                         </Text>
                       </Button>


                     </Body>

                     </View>
                         </Form>
                       </View>
</Body>
</Content>
        </Image>
       </Container>
      </ScrollView>
    )
  }
};
const styles = {
imageBg: {
  flex: 1,
  width: null,
  height: null,
}

}
AppRegistry.registerComponent('students', () => App);
