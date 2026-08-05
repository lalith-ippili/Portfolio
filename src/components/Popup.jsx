import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaCheck,
  FaExclamationTriangle,
  FaTimes,
} from 'react-icons/fa';

import '../styles/Popup.scss';

const SUCCESS_AUTO_CLOSE_TIME = 4500;

const Popup = ({ message, type = 'success', onClose }) => {
  const isSuccess = type === 'success';

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    let autoCloseTimer;

    if (isSuccess) {
      autoCloseTimer = window.setTimeout(() => {
        onClose();
      }, SUCCESS_AUTO_CLOSE_TIME);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      if (autoCloseTimer) {
        window.clearTimeout(autoCloseTimer);
      }
    };
  }, [isSuccess, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className="popup-overlay"
      onMouseDown={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className={`popup-card ${
          isSuccess ? 'popup-card--success' : 'popup-card--error'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        aria-describedby="popup-message"
        initial={{
          opacity: 0,
          scale: 0.88,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
          y: 20,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Decorative glow */}
        <span className="popup-card__glow" aria-hidden="true" />

        {/* Close button */}
        <motion.button
          type="button"
          className="popup-card__close"
          onClick={onClose}
          aria-label="Close notification"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <FaTimes />
        </motion.button>

        {/* Status icon */}
        <div className="popup-card__icon-area">
          <span className="popup-card__icon-ring" aria-hidden="true" />

          <motion.div
            className="popup-card__icon"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.12,
              type: 'spring',
              stiffness: 230,
              damping: 16,
            }}
          >
            {isSuccess ? <FaCheck /> : <FaExclamationTriangle />}
          </motion.div>
        </div>

        {/* Content */}
        <div className="popup-card__content">
          <span className="popup-card__eyebrow">
            {isSuccess ? 'Thank you' : 'Something went wrong'}
          </span>

          <h2 id="popup-title">
            {isSuccess
              ? 'Message sent successfully!'
              : 'Message could not be sent'}
          </h2>

          <p id="popup-message">{message}</p>
        </div>

        {/* Action */}
        <motion.button
          type="button"
          className="popup-card__action"
          onClick={onClose}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSuccess ? 'Continue' : 'Close'}
        </motion.button>

        {isSuccess && (
          <motion.span
            className="popup-card__progress"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{
              duration: SUCCESS_AUTO_CLOSE_TIME / 1000,
              ease: 'linear',
            }}
            aria-hidden="true"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Popup;