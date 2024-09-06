import React from 'react';
import '../styles/Cookies.css';

const Cookies = () => {
  return (
    <div className="cookies-container">
      <h1>Cookies Policy</h1>
      <p>We use cookies to enhance your browsing experience and to analyze our traffic. By using our site, you consent to our cookies policy.</p>

      <h2>What Are Cookies?</h2>
      <p>Cookies are small text files that are placed on your device by websites that you visit. They are widely used to make websites work more efficiently and to provide information to the owners of the site.</p>

      <h2>How We Use Cookies</h2>
      <p>We use cookies to remember your preferences, to provide personalized content, and to analyze our traffic. Cookies help us understand how visitors interact with our site, allowing us to improve our website and services.</p>

      <h2>Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
        <li><strong>Performance Cookies:</strong> These cookies collect information about how visitors use a website, such as which pages are most visited, and if they get error messages. These cookies help improve the performance of the site.</li>
        <li><strong>Functional Cookies:</strong> These cookies allow the website to remember choices you make and provide enhanced, more personal features.</li>
        <li><strong>Targeting Cookies:</strong> These cookies are used to deliver ads more relevant to you and your interests.</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>You can manage your cookie preferences in your browser settings. Most browsers allow you to refuse cookies or to remove existing cookies. However, please note that disabling cookies might affect your experience on our site.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our cookies policy, please <a href="/contact">contact us</a>.</p>
    </div>
  );
};

export default Cookies;
