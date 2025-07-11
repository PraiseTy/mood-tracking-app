'use client'
import {Button, FieldError, Form, Input, Label, TextField} from 'react-aria-components'

export default function Home() {
  return (
    <div>
        <Form>
            <TextField name="email" type="email" isRequired>
                <Label>Email</Label>
                <Input />
                <FieldError />
            </TextField>
            <TextField name="password" type="password" isRequired>
                <Label>Password</Label>
                <Input />
            </TextField>
            <Button type="submit">Submit</Button>
        </Form>
    </div>
  );
}
