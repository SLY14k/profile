// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import FullName from './components/Profile/Fullname';
import Address from './components/Profile/Address';

function App() {
  return (
    <div className="App">
      {/* <Menu/> */}
      <Row className="landing">
        <Col><FullName/></Col>
        <Col><Address/></Col>
        <Col><ProfilePhoto/></Col>
      </Row>
    </div>
  );
}

export default App;
