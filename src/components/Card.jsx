import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
    return (
        <Container
        style={{
            marginTop: '120px'
        }}
        >
            <Row>
                <Col>
                    <div 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center' }}>
                        <Image 
                        src="./images/image-product-desktop.jpg"
                        style={{ height: '60%' }}
                        />
                        <div className="font-link" style={{ marginLeft: '40px' }}>
                            <h2>PERFUME</h2>
                            <h1 className="font-link-two">Gabrielle<br/>Essence Eau<br/>De Parfum</h1>
                            <p>
                                A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                            </p>
                            <Container>
                                <Row>
                                    <Col>149.99</Col>
                                    <Col>169.99</Col>
                                </Row>
                                <Row>
                                    <Button>Add to Cart</Button>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BasicExample;