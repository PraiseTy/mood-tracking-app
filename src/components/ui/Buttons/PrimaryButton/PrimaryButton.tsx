import styles from './PrimaryButton.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  buttonStyles?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
export default function PrimaryButton({
  children,
  buttonStyles,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={` ${styles.button} ${buttonStyles ?? ' '}`}>
      {children}
    </button>
  );
}
