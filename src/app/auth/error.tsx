'use client';

import { useSearchParams } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <Container className="py-3">
      <Row>
        <Col className="text-center">
          <h2>Authentication Error</h2>
          {error && (
            <p className="text-danger">
              Error:
              {' '}
              {error}
            </p>
          )}
          <p>There was an error during authentication. Please try again.</p>
          <a href="/auth/signin" className="btn btn-primary">Back to Sign In</a>
        </Col>
      </Row>
    </Container>
  );
}
