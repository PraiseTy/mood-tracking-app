import {
  Button,
  Dialog as DialogContainer,
  DialogTrigger,
  OverlayArrow,
  Popover,
  PopoverProps
} from 'react-aria-components';
import { BsInfoCircleFill } from 'react-icons/bs';
import styles from './Dialog.module.scss';

interface MyPopoverProps extends Omit<PopoverProps, 'children'> {
  children?: React.ReactNode;
}

function MyPopover({ children, ...props }: MyPopoverProps) {
  return (
    <Popover {...props}>
      <OverlayArrow>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="var(--color-blue-200)">
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      </OverlayArrow>
      <DialogContainer>{children}</DialogContainer>
    </Popover>
  );
}

export default function Dialog() {
  return (
    <DialogTrigger>
      <Button className={styles.iconButton}>
        <BsInfoCircleFill className={styles.icon} />
      </Button>
      <MyPopover placement="top" shouldFlip={false} className={styles.textContainer}>
        <div>
          <div className={styles.title}>
            <BsInfoCircleFill size={15} className={styles.icon} />
            Demo Access
          </div>
          <p className={styles.textAction}>
            You can sign up using a fake email, as long as it's in a valid format. I recommend signing up, so you can
            experience the full onboarding process.
          </p>
          <p>Alternatively, you can log in to an existing demo account using these credentials.</p>
          <div className={styles.example}>
            <p>
              Email: <span>jane@doe.com</span>
            </p>
            <p>
              Password: <span>Jane1234</span>
            </p>
          </div>
        </div>
      </MyPopover>
    </DialogTrigger>
  );
}
