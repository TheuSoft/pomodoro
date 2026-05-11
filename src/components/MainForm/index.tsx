import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
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
  );
}
