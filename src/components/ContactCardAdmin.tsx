'use client';

import { Card, Col, Image } from 'react-bootstrap';
import { Contact } from '@/lib/validationSchemas';

/* Renders a single contact card with owner info for admin view. */
const ContactCardAdmin = ({ firstName, lastName, address, image, description, owner }: Contact) => (
  <Col>
    <Card className="h-100">
      <Card.Header className="d-flex align-items-center">
        <Image src={image} width={75} roundedCircle className="me-2" />
        <Card.Title>
          {firstName}
          {' '}
          {lastName}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <p className="blockquote-footer">{owner}</p>
      </Card.Body>
    </Card>
  </Col>
);

export default ContactCardAdmin;
