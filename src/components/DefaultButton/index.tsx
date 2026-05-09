import styles from './styles.module.css';

type DefaultButtonProps = {
  // O tipo React.ReactNode é um tipo que pode representar qualquer coisa que possa ser renderizada pelo React, como elementos JSX, strings, números, arrays de elementos, etc. Ele é usado aqui para permitir que o ícone seja flexível e possa ser de qualquer tipo que o React possa renderizar.
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      {/* // A classe do botão é composta pela classe base styles.button e a classe de cor styles[color], onde color é a prop que pode ser 'green' ou 'red'. Isso permite que o estilo do botão seja alterado dinamicamente com base na prop color. */}
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
