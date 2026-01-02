import styles from './onboardingPage.module.scss';
import BrandLogo from '@/components/BrandLogo';
import { Heading } from 'react-aria-components';
export default function OnboardingPage() {
  return (
    <main className={styles.container}>
      <BrandLogo />
      <div className={styles.content}>
        <Heading>Personalize your experience</Heading>
        <p>Add your name and profile picture to make Mood yours</p>
      </div>
    </main>
  );
}
