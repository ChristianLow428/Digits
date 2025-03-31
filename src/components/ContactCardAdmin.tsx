'use client';

import { Card, Col, Image } from 'react-bootstrap';
import Link from 'next/link';

/* Renders a single contact card with owner information for admin view. */
const ContactCardAdmin = ({
  id,
  firstName,
  lastName,
  address,
  image,
  description,
  owner,
}: {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
  owner: string;
}) => (
  <Col>
    <Card className="h-100">
      <Card.Header className="d-flex align-items-center">
        <Image
          src={image}
          width={75}
          height={75}
          alt={`${firstName} ${lastName}`}
          className="me-3"
        />
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
      <Card.Footer>
        <Link href={`edit/${id}`}>Edit</Link>
      </Card.Footer>
    </Card>
  </Col>
);

export default ContactCardAdmin;
