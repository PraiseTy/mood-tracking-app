'use client';
import { Button, FieldError, Input, Label, TextField, Text } from 'react-aria-components';
import styles from './signupForm.module.scss';
import Link from 'next/link';
import { Dialog } from '@/components';

interface SignupFormProps {
  title: string;
  description: string;
  buttonText: string;
  actionText: string;
  anchorText: string;
  anchorLink: string;
}
export default function SignupForm({
  title,
  description,
  buttonText,
  actionText,
  anchorText,
  anchorLink
}: SignupFormProps) {
  return (
    <form className={styles.container}>
      <h1 slot="title">{title}</h1>
      <p slot="description" className={styles.tag}>
        {description}
      </p>
      <div>
        <TextField name="email" type="email" className={styles.field} isRequired>
          <Label>
            Email Address <Dialog />
          </Label>
          <Input />
          <FieldError />
        </TextField>
      </div>
      <div>
        <TextField name="password" type="password" isRequired>
          <Label>Password</Label>
          <Input />
        </TextField>
      </div>
      <Button type="submit" className={styles.button}>
        {buttonText}
      </Button>

      <Text slot="action" className={styles.anchor}>
        {actionText} <Link href={anchorLink}>{anchorText}</Link>
      </Text>
    </form>
  );
}
