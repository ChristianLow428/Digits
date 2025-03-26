'use client';

import { Card, Col, Image } from 'react-bootstrap';
import { Contact } from '@/lib/validationSchemas';

/* Renders a single contact card. See list/page.tsx. */
const ContactCard = ({ firstName, lastName, address, image, description }: Contact) => (
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
      </Card.Body>
    </Card>
  </Col>
);

export default ContactCard;
