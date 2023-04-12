import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="./images/image-product-desktop.jpg"
                    style={{
                        width: '50%',
                        height: '50%'
                    }}
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    );
}

export default BasicExample;