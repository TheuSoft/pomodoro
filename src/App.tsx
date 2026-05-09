import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { DefaultInput } from './components/DefaultInput';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu></Menu>
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              type='text'
              labelText='Task'
              placeholder='O que você vai fazer?'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet consectetur,</p>
          </div>
          <div className='formRow'>
            <Cycles />
            <p>000000</p>
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
