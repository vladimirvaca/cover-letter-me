import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { GoogleReCaptcha, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface ContactFormProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSuccess: (message: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onRequestClose, onSuccess }) => {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    setIsSubmitting(true);

    const captchaToken = await executeRecaptcha('contactForm');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, captchaToken }),
      });

      const data = await response.json();

      if (response.ok) {
        onSuccess(data.message || 'Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        onRequestClose();
      } else {
        console.error(data.error || 'An error occurred.');
      }
    } catch (error) {
      console.error('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Form"
      className="bg-background-light dark:bg-background-dark p-8 rounded-lg shadow-xl max-w-lg w-full m-auto"
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
    >
      <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-black/80 dark:text-white/80 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 rounded bg-white/10 dark:bg-black/20 border border-black/10 dark:border-white/10 text-black dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black/80 dark:text-white/80 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded bg-white/10 dark:bg-black/20 border border-black/10 dark:border-white/10 text-black dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-black/80 dark:text-white/80 mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full p-2 rounded bg-white/10 dark:bg-black/20 border border-black/10 dark:border-white/10 text-black dark:text-white"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onRequestClose}
            className="py-2 px-4 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-2 px-4 rounded bg-primary text-white font-bold disabled:bg-primary/50"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
      <GoogleReCaptcha onVerify={() => {}} />
    </Modal>
  );
};

export default ContactForm;
