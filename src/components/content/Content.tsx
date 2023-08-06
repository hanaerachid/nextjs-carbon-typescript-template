import React, { useState } from 'react';
import styles from './content.module.scss'
import { Button, Form, TextInput, Tile } from 'carbon-components-react'
import { Heading, Section } from 'carbon-components-react/lib/components/Heading';
import { Add20 } from '@carbon/icons-react';

interface RegistrationFormState {
  name: string;
  email: string;
  tel: string;
}

const initialFormState: RegistrationFormState = {
  name: '',
  email: '',
  tel: ''
};


const Content = (): JSX.Element => {

  const [formState, setFormState] = useState<RegistrationFormState>(initialFormState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formState);
    // Reset form state
    setFormState(initialFormState);
  };


  return (

    <>
      <br />
      <br />
      <br />
      <div className={styles.content}>
        <Tile>
          <Section as="div">
            <Heading>Register now</Heading>
            <br />
            <Form onSubmit={handleSubmit} >
              <TextInput value={formState.name}
                onChange={handleChange} name="name" type="text" size="lg" placeholder="John Doe" id={'edwefe'} labelText={'Name'} />
              <br />
              <TextInput value={formState.tel}
                onChange={handleChange} name="telephone" type="tel" size="lg" placeholder="+1555332323" id={'edwefe'} labelText={'Phone Number'} />
              <br />
              <TextInput value={formState.email}
                onChange={handleChange} name="email" type="email" size="lg" placeholder="john@doe.org" id={'edwefe'} labelText={'Email'} />
              <br />
              <Button renderIcon={Add20} type="submit">Submit</Button>
            </Form>
          </Section>
        </Tile>
      </div>
    </>)
}

export default Content
