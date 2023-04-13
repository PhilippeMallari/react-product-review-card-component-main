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
                        <div style={{ marginLeft: '40px' }}>
                            <h2>PERFUME</h2>
                            <p>Gabrielle<br/>Essence Eau<br/>De Parfum</p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolorum distinctio esse, dolores quidem facere autem? Blanditiis esse unde optio.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BasicExample;