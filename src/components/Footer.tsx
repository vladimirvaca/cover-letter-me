import React, { useState, useEffect, lazy, Suspense } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { SOCIAL_MEDIA } from '../constants/Constants.ts';

// Split ContactForm into its own chunk – only fetched when the modal is opened
const ContactForm = lazy(() => import('./ContactForm.tsx'));

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  // reCAPTCHA provider (and its SDK script) mounts only after the first click
  const [reCaptchaReady, setReCaptchaReady] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const recaptchaSiteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY as string | undefined;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 8000);
  };

  const handleOpenModal = () => {
    // Trigger reCAPTCHA provider mount on first interaction
    setReCaptchaReady(true);
    setIsModalOpen(true);
  };

  const contactForm = hasMounted && reCaptchaReady && (
    <Suspense fallback={null}>
      {recaptchaSiteKey ? (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
          <ContactForm
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            onSuccess={handleSuccess}
          />
        </GoogleReCaptchaProvider>
      ) : (
        <ContactForm
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSuccess={handleSuccess}
        />
      )}
    </Suspense>
  );

  return (
    <>
      <footer className="w-full flex justify-center py-20 px-4 md:px-10 border-t border-black/5 dark:border-white/5 mt-auto bg-background-light dark:bg-background-dark">
        <div className="layout-content-container flex flex-col max-w-240 flex-1 items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-6">
            Let's build something <span className="text-primary">amazing</span>.
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-xl mb-10 text-lg">
            Open for new opportunities. Whether you have a question or just want to say hi, I'll
            respond to your message as soon as possible!
          </p>
          <button
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:-translate-y-1 shadow-xl shadow-primary/25"
            onClick={handleOpenModal}
          >
            <span className="material-symbols-outlined">mail</span>
            Say Hello
          </button>
          {successMessage && (
            <p className="mt-8 text-center text-lg text-green-500">
              Thank you for reaching out! I've received your message and will get back to you soon.
              <br />
              Check your spam, just in case!
            </p>
          )}
          <div className="flex gap-8 mt-12">
            {SOCIAL_MEDIA.map((social) => (
              <a
                key={social.name}
                className="text-black/40 dark:text-white/40 hover:text-primary transition-colors"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.name}</span>
                <img
                  src={social.icon}
                  alt=""
                  className="h-8 w-8 dark:invert"
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
          </div>
          <div className="mt-12 text-black/40 dark:text-white/40 text-sm">
            © {new Date().getFullYear()} - Vladimir Vaca - Full Stack Engineer.
          </div>
        </div>
      </footer>
      {contactForm}
    </>
  );
};

export default Footer;
