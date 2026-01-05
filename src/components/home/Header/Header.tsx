import styles from './Header.module.scss';
import BrandLogo from '@/components/ui/BrandLogo';
import PictureAvatar from '@/components/ui/PictureAvatar';

export default function Header() {
  return (
    <div className={styles.container}>
      <div>
        <BrandLogo />
      </div>
      <div>
        <PictureAvatar />
      </div>
    </div>
  );
}
