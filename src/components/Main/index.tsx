import React from 'react';

import { Container } from './styles';

export const Main: React.FC = () => {
  return (
    <Container>
      <h1>
        <span>Develop.</span>
        <span>Preview.</span>
        <span>Ship.</span>
      </h1>

      <div>
        <button>Starting Code</button>
        <button className="outline">Get a Demo</button>
      </div>

      <h2>
        Vercel combines the best developer experience with an obsessive focus on end-user performance.
        Their platform enables frontend teams to do their best work.
      </h2>
    </Container>
  );
};