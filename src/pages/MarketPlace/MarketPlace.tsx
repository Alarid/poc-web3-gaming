import { Outlet } from 'react-router-dom';

import Container from '../../components/Container';

export default function MarketPlace() {
  return (
    <Container title="Market Place">
      <Outlet />
    </Container>
  );
}
