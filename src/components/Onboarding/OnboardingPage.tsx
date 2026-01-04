import styles from './onboardingPage.module.scss';
import BrandLogo from '@/components/ui/BrandLogo';
import { FieldError, Input, TextField } from 'react-aria-components';
import PictureAvatar from '@/components/ui/PictureAvatar';
export default function OnboardingPage() {
  return (
    <form className={styles.container}>
      <BrandLogo className={styles.logo} />
      <div className={styles.content}>
        <div>
          <h1 className={styles.heading}>Personalize your experience</h1>
          <p className={styles.description}>Add your name and profile picture to make Mood yours</p>
        </div>
        <div>
          <div>
            <TextField type="text">Name</TextField>
            <Input type="text" placeholder="Jane Appleseed" />
            <FieldError />
          </div>
          <div className={styles.upload_container}>
            <PictureAvatar />
            <div className={styles.upload_text}>
              <p> Upload Image</p>
              <p>Max 250KB, PNG or JPEG</p>
              <button>Upload</button>
            </div>
          </div>
        </div>

        <button className={styles.track_button}>Start Tracking</button>
      </div>
    </form>
  );
}
