import React from 'react';

import {StatusBar} from 'react-native';

import {Container, Title} from './styles';

const Main = ({navigation}) => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#45046a" />
    <Container>
      <Title>Olá mundo!</Title>
    </Container>
  </>
);

Main.navigationOptions = {
  title: 'Home',
}

export default Main;
