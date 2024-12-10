'use client';
import { useRef, useState, FC } from 'react';

import emailjs from '@emailjs/browser';
import validator from 'validator';

import { BsSendCheck } from 'react-icons/bs';

const ContactForm: FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleSubmit() {
    setFormSubmitted(true);
    setFormValues({
      name: '',
      email: '',
      message: '',
    });
    setEmailMessage('');
    setTimeout(() => setFormSubmitted(false), 7000);
  }

  function validateEmail(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailMessage('');
    } else {
      setEmailMessage('Please enter a valid email...');
    }
  }

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({ ...formValues, email: e.target.value });
    validateEmail(e);
  }

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('Sending email');

    if (form.current) {
      console.log('Form current');
      console.log(process.env.NEXT_PUBLIC_EMAIL_KEY);
      emailjs
        .sendForm(
          'contact_service',
          'contact_form',
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_KEY
        )
        .then(
          (result) => {
            console.log('Hello');
            console.log(result);
            if (result.status === 200) {
              handleSubmit();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <section className="flex flex-col items-center gap-6 w-full">
      {/* Confirmation that the message was sent */}
      <div className="flex flex-col items-center gap-2 relative w-full">
        <p className="invisible" aria-hidden="true">
          Place Holder Text
        </p>
        {formSubmitted && (
          <div className="flex flex-col items-center absolute top-0 w-full">
            <BsSendCheck />
            <p className="">Thank you for reaching out, talk to you soon!</p>
          </div>
        )}
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        noValidate
        className="flex flex-col gap-4 p-4 w-full sm:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/2 rounded-lg mt-2 border-t-[1px] border-t-green bg-dark-green-1"
      >
        <div className="flex flex-col gap-2">
          <label className="text-lg">Name</label>
          <input
            type="text"
            name="from_name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            className="p-2 text-md bg-dark-green-1 rounded border-[0.1px] focus:border-orange border-green focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg">Email</label>
          <input
            type="text"
            name="from_name"
            value={formValues.email}
            onChange={(e) => handleEmail(e)}
            className="p-2 text-md bg-dark-green-1 rounded border-[0.1px] focus:border-orange border-green focus:outline-none"
          />

          {/* Email Validator Message */}
          <div className="text-red-500 relative text-sm">
            <span className="invisible" aria-hidden="true">
              Email message placeholder
            </span>
            <p className="absolute top-0 left-0">{emailMessage}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg">Message</label>
          <textarea
            value={formValues.message}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
            rows={3}
            className="p-2 text-md bg-dark-green-1 rounded border-[0.1px] focus:border-orange border-green focus:outline-none"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Send"
            className="py-1 px-2 border-[1px] border-green w-fit rounded text-white hover:bg-dark-green-2 hover:text-orange hover:cursor-pointer hover:border-orange"
          />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
