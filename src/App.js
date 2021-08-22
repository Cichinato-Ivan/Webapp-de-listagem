import React from 'react';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header.jsx';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Nav/>
            <Header/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
