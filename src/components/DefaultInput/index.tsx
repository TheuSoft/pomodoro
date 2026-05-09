import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  // ...rest é uma forma de coletar todas as outras props que não foram explicitamente listadas, como placeholder, value, onChange, etc.
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* Condicional para renderizar o label apenas se labelText for fornecido */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} id={id} {...rest} />
    </>
  );
}
