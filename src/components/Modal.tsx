import { Button, Dialog, DialogTrigger, Heading, Input, Label, Modal, TextField } from 'react-aria-components';

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  canOpen?: (isOpen: boolean) => void;
}

export default function ModalContainer({ children, isOpen, canOpen }: ModalProps) {
  return (
    <DialogTrigger>
      <Button>Sign up…</Button>
      <Modal>
        <Dialog>
          <form>
            <Heading slot="title">Sign up</Heading>
            <TextField autoFocus>
              <Label>First Name:</Label>
              <Input />
            </TextField>
            <TextField>
              <Label>Last Name:</Label>
              <Input />
            </TextField>
            <Button slot="close">Submit</Button>
          </form>
        </Dialog>
      </Modal>
    </DialogTrigger>
    // <Modal isOpen={isOpen} onOpenChange={canOpen}>
    //   {children}
    // </Modal>
  );
}
