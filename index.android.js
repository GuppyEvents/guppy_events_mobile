/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left,
  Right, Body, Icon } from 'native-base';

export default class SeruventApp extends Component {
  render() {
    return (
      <Container>
          <Header>
              <Left>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Left>
              <Body>
                  <Title>Menu</Title>
              </Body>
              <Right />
          </Header>
          <Content>

          </Content>
          <Footer>
            <FooterTab>
                <Button>
                    <Icon name="apps" />
                    <Text>Apps</Text>
                </Button>
                <Button>
                    <Icon name="camera" />
                    <Text>Camera</Text>
                </Button>
                <Button active>
                    <Icon active name="navigate" />
                    <Text>Navigate</Text>
                </Button>
                <Button>
                    <Icon name="person" />
                    <Text>Contact</Text>
                </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SeruventApp', () => SeruventApp);
