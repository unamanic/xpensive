import React from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import { WebBrowser } from 'expo';
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Text,
  Title,
  H1,
  Button,
} from 'native-base';
import { loginAction, logoutAction } from "../services/authentication/authentication.actions";
import { navigateAction } from "../services/navigation/navigation.action";
import { connect } from "react-redux";

class HomeScreen extends React.Component {

  handleHome2 = () => {
    this.props.nav('Home2');
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Xpensive App</Title>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.container} contentContainerStyle={styles.contentContainer}>
          <H1>Welcome to the Xpensive App</H1>
          <Button onPress={this.handleHome2}>
            <Text>Home2</Text>
          </Button>
          <Button onPress={this.handleLogout}>
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>

    );
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
    nav: (routeName, params) => dispatch(navigateAction(routeName, params)),
    logout: () => dispatch(logoutAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
