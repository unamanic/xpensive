import React from 'react';
import { loginAction } from '../services/authentication/authentication.actions';
import { connect } from 'react-redux';
import { Container, Label, Input, Form, Item, Card, CardItem, H1, Button, Text, Content, Header } from 'native-base';
import { View, Image } from 'react-native';
import { navigateAction } from "../services/navigation/navigation.action";

class LoginScreen extends React.Component {

  handleLogin= () => {
    this.props.login('', '');
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header transparent/>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
          </View>
          <Card>
            <CardItem>
            </CardItem>
            <CardItem>
              <H1>Login</H1>
            </CardItem>
            <Form>
              <Item floatingLabel>
                <Label>Username:</Label>
                <Input/>
              </Item>
              <Item floatingLabel>
                <Label>Password:</Label>
                <Input secureTextEntry/>
              </Item>
            </Form>
            <Button block style={styles.login.button} onPress={this.handleLogin}>
              <Text>Login</Text>
            </Button>
          </Card>
          <View style={{ flex: 1 }}/>

        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(loginAction(username, password)),
    nav: (routeName, params) => dispatch(navigateAction(routeName, params)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = {
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  login: {
    button: {
      marginTop: 40,
    },
  },
};