import React from 'react';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
