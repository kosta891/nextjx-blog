import { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './contact-form.module.css';
import Notification from '../ui/notification';

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    setRequestStatus('pending');
    try {
      const response = await axios.post('/api/contact', {
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      console.log(response.data.message);
      if (!response) {
        throw new Error(response.data.message || 'Something went wrong');
      }
      setRequestStatus('success');

      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');

      return;
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Your message has been sent',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.contorl}>
            <label htmlFor='email'>Your email</label>
            <input
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              type='email'
              id='email'
              required
            />
          </div>
          <div className={classes.contorl}>
            <label htmlFor='name'>Your name</label>
            <input
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              type='text'
              id='name'
              required
            />
          </div>
        </div>
        <div className={classes.contorl}>
          <label htmlFor='message'>Your message</label>
          <textarea
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
            name='message'
            id='message'
            rows='5'
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
