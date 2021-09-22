import { Fragment } from 'react';
import Head from 'next/dist/next-server/lib/head';

import ContactForm from '../components/contact/contact-form';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name='decription' content='Contact me by messages in form' />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
