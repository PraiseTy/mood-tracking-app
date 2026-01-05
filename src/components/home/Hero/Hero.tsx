import styles from './Hero.module.scss';
import { PrimaryButton } from '@/components';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_section}>
        <p>Hello, Lisa!</p>
        <p>How are you feeling today?</p>
        <p>Wednesday, April 16th, 2025</p>
        <div>
          <PrimaryButton children="Log today's mood" buttonStyles={styles.button} />
        </div>
      </div>
    </div>
  );
}
