import React from 'react';
import './footer.css';
import { Container, Col, Row } from 'reactstrap';
import fb from '../../../Assests/icons/footer/fb.png';
import insta from '../../../Assests/icons/footer/insta.png';
import wordpress from '../../../Assests/icons/footer/word.png';
import google from '../../../Assests/icons/footer/google.png';
import tweet from '../../../Assests/icons/footer/tweet.png';
import heart from '../../../Assests/icons/footer/heart.png';
const footer = () => {
    return (
        <footer id="footer" className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="storage">
                            <a href='/'>About Us</a>
                            <a href="/">Blog</a>
                            <a href="/">Pages</a>
                            <a href="/">Map</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="storage2">
                            <a href="/" ><img src={insta} alt="Icon" /></a>
                            <a href="/" ><img src={fb} alt="Icon" /></a>
                            <a href="/" ><img src={wordpress} alt="Icon" /></a>
                            <a href="/" ><img src={tweet} alt="Icon" /></a>
                            <a href="/" ><img src={google} alt="Icon" /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="footer-text">Contact: 9936657710<br />Order: 9670300800, 9670400900, 9670800100 <br />
                            &copy; COPYRIGHT 2018 reserved by 2 Brother Pizza and Burger<br /><br/>
                            Made with <img src={heart} alt="Heart" style={{ height: "22px", padding: "0 3px", float: "none" }} /> from <a style={{ display: "inline", float: "none" }} href="https://www.wordpress.com">Aashish Peepra aka Iron Programmer (Love Aashiya)</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default footer;