'use client';
import SignupForm from '@/components/ui/SignupForm/SignupForm';
import BrandLogo from '@/components/ui/BrandLogo';
import styles from './signup.module.scss';

export default function signup() {
  return (
    <main className={styles.container}>
      <BrandLogo className={styles.logo} />
      <SignupForm
        title="Create an account"
        description="Join to track your daily mood and sleep with ease."
        buttonText="Sign Up"
        actionText="Already got an account?"
        anchorText="Log In."
        anchorLink="/login"
      />
    </main>
  );
}
