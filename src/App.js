import './App.css';
import { Container,Navbar,Row,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect  } from 'react';
import ShowDonars from './component/ShowDonars'
import Certification from './component/Certificate'

function App() {
  useEffect(()=>{
    toast("مرحباً بك في وتين");
  },[]);
  return (
    <div className="App">
      <ToastContainer />
       <Container >
      <Row>
      <Router>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src="https://wateenapp.org/Assets/images/logos/wateen.svg"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <Nav.Link href="/">الرئيسية</Nav.Link>
            <Nav.Link href="/Certefication">شهادة الشكر</Nav.Link>
            <Nav.Link href="/Donars">التبرعات السابقة</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
            <img
              src="https://cdn.mosoah.com/wp-content/uploads/2019/10/09104206/1200px-Saudi_Ministry_of_Health_Logo.svg_1-e1570607054174.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src="https://mhtwyat.com/wp-content/uploads/2020/11/%D8%B5%D9%88%D8%B1-%D8%B4%D8%B9%D8%A7%D8%B1-%D8%B1%D8%A4%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-2030-%D9%85%D9%81%D8%B1%D8%BA.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
      </Container>
    </Navbar>
    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Certefication" element={<Certification />}></Route>
          <Route path="/Donars" element={<ShowDonars />}></Route>
        </Routes>
    </Router>
      </Row>
    </Container>
    </div>
  );
}

export default App;
