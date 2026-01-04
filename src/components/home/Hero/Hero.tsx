import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_section}>
        <p>Hello, Lisa!</p>
        <p>How are you feeling today?</p>
        <p>Wednesday, April 16th, 2025</p>
        <button>Log today's mood</button>
      </div>
    </div>
  );
}
