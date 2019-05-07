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
  Icon,
  Button,
} from 'native-base';
import { backAction, navigateAction } from "../services/navigation/navigation.action";
import { connect } from "react-redux";

export class HomeScreen2 extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button>
              <Icon name={'arrow-back'} onPress={()=>this.props.back()}/>
            </Button>
          </Left>
          <Body>
            <Title>Screen 2</Title>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.container} contentContainerStyle={styles.contentContainer}>
          <H1>Welcome to the Xpensive App Screen 2</H1>
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
    back: () => dispatch(backAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen2)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
