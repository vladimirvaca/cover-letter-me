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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setError('reCAPTCHA is not ready. Please try again.');
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
        setError(null);
        onRequestClose();
      } else {
        // Handle different error types
        if (response.status === 403) {
          setError('Spam detection triggered. Please try again in a moment.');
          console.error('403 Error:', data.error);
        } else if (response.status === 400) {
          setError('Please fill in all fields correctly.');
          console.error('400 Error:', data.error);
        } else {
          setError(data.error || 'An error occurred. Please try again.');
          console.error('Error:', data.error);
        }
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Me"
      className="bg-background-light dark:bg-background-dark p-8 rounded-lg shadow-xl max-w-lg w-full m-auto"
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
    >
      <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Ready when you are.</h2>
      <p className="text-sm text-black/60 dark:text-white/60 mb-4">
        Please double-check your email to ensure a reply.
      </p>
      {error && (
        <div className="mb-4 p-3 rounded bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 text-sm">
          {error}
        </div>
      )}
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
