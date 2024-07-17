import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import aboutImage from './assets/about-image.jpg';  
import './About.css';

const teamMembers = [
  { id: 1, name: 'Team Member 1', img: require('./assets/team-member-1.jpg') },
  { id: 2, name: 'Team Member 2', img: require('./assets/team-member-2.jpg') },
  { id: 3, name: 'Team Member 3', img: require('./assets/team-member-3.jpg') },
  { id: 4, name: 'Team Member 4', img: require('./assets/team-member-4.jpg') },
  { id: 5, name: 'Team Member 5', img: require('./assets/team-member-5.jpg') },
  { id: 6, name: 'Team Member 6', img: require('./assets/team-member-6.jpg') },
  { id: 7, name: 'Team Member 7', img: require('./assets/team-member-7.jpg') },
  { id: 8, name: 'Team Member 8', img: require('./assets/team-member-8.jpg') },
  { id: 9, name: 'Team Member 9', img: require('./assets/team-member-9.jpg') },
  { id: 10, name: 'Team Member 10', img: require('./assets/team-member-10.jpg') },
  { id: 11, name: 'Team Member 11', img: require('./assets/team-member-11.jpg') },
  { id: 12, name: 'Team Member 12', img: require('./assets/team-member-12.jpg') },
  { id: 13, name: 'Team Member 13', img: require('./assets/team-member-13.jpg') },
  { id: 14, name: 'Team Member 14', img: require('./assets/team-member-14.jpg') },
];

const About = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <img src={aboutImage} alt="About" className="img-fluid"/>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h2>About Us</h2>
            <p>
              We denounce with righteous indignation and dislike men who are so beguiled and demoralized 
              by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee 
              the pain and trouble that are bound to ensue.
            </p>
            <Button variant="primary">Learn More</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <h3 className="text-center">Our Team</h3>
          </Col>
          <Col md={12}>
            <div className="team-container">
              {teamMembers.map(member => (
                <Card key={member.id} className="team-card">
                  <Card.Img variant="top" src={member.img} className="team-img"/>
                  <Card.Body className="team-body">
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>
                      Brief description of the team member.
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
