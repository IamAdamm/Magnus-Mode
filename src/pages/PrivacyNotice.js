import React from 'react';
import '../styles/Privacy Notice.css';

const PrivacyNotice = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Notice</h1>
      <p>Your privacy is important to us. This privacy notice explains what personal data we collect and how we use it.</p>

      <h2>Information We Collect</h2>
      <p>We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us. The types of information we may collect include your name, email address, and payment details.</p>

      <h2>How We Use Your Information</h2>
      <p>We use your information to process transactions, communicate with you, and improve our services. We may also use your information for marketing purposes, but you can opt-out at any time.</p>

      <h2>Sharing Your Information</h2>
      <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.</p>

      <h2>Your Rights</h2>
      <p>You have the right to access, update, or delete your personal information. You can also object to the processing of your data or request that we restrict its use.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this privacy notice, please <a href="/contact">contact us</a>.</p>
    </div>
  );
};

export default PrivacyNotice;
