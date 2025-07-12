'use client';
import SignupForm from '@/components/Signup/SignupForm';
import BrandLogo from '@/components/BrandLogo';
import styles from '../signup/signup.module.scss';

export default function Login() {
  return (
    <main className={styles.container}>
      <BrandLogo />
      <SignupForm
        title="Welcome Back!"
        description="Log in to continue tracking your mood"
        buttonText="Log In"
        actionText="Haven't  got an account?"
        anchorText="Sign up"
        anchorLink="/signup"
      />
    </main>
  );
}
