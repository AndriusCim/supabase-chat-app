import { Card, Container, Row, Spacer, Text } from '@nextui-org/react';
import React from 'react';

const Login: React.FC = () => {
  return (
    <Container
      css={{ height: '100vh' }}
      display="flex"
      justify="center"
      alignItems="center"
    >
      <Card color="default">
        <Row justify="center" align="center">
          <Text h1 color="white" css={{ m: 0 }}>
            Welcome to
          </Text>
          <Spacer />
          <Text
            h1
            color="gradient"
            css={{ m: 0, textGradient: '45deg, $blue600 -20%, $pink600 50%' }}
          >
            Login
          </Text>
        </Row>
      </Card>
    </Container>
  );
};

export default Login;
