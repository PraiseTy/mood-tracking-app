'use client';
import { Button, FieldError, Form, Input, Label, TextField, Heading, Text } from 'react-aria-components';
import styles from './signup.module.scss';
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
    <Form className={styles.container}>
      <Heading slot="title">{title}</Heading>
      <Text slot="description" className={styles.tag}>
        {description}
      </Text>
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
    </Form>
  );
}
