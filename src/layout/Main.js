
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/LeftSideNav/LeftSideNav';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Footer/Footer';

const Main = () => {


    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
