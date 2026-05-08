import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Heading>Menu</Heading>
      </Container>
      <Container>
        <Heading>Timer</Heading>
      </Container>
    </>
  );
}
