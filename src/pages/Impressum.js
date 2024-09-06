import React from 'react';
import '../styles/Impressum.css';

const Impressum = () => {
  return (
    <div className="impressum-container">
      <h1>Impressum</h1>
      
      <h2>Company Information</h2>
      <p>
        <strong>Company Name:</strong> ArtGallery GmbH<br />
        <strong>Address:</strong> Art Street 123, 10115 Berlin, Germany<br />
        <strong>Phone:</strong> +49 30 123456789<br />
        <strong>Email:</strong> contact@artgallery.com<br />
      </p>

      <h2>Managing Directors</h2>
      <p>
        <strong>Director 1:</strong> Jane Doe<br />
        <strong>Director 2:</strong> John Smith<br />
      </p>

      <h2>Commercial Register</h2>
      <p>
        <strong>Register Court:</strong> Local Court of Berlin (Charlottenburg)<br />
        <strong>Registration Number:</strong> HRB 123456 B<br />
      </p>

      <h2>VAT ID</h2>
      <p>
        <strong>VAT Identification Number:</strong> DE123456789
      </p>

      <h2>Disclaimer</h2>
      <p>
        The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
      </p>

      <h2>Liability for Links</h2>
      <p>
        Our site may contain links to external websites over which we have no control. Therefore, we cannot accept any responsibility for their content. The respective provider or operator of the linked websites is always responsible for the content of the linked pages.
      </p>

      <h2>Copyright</h2>
      <p>
        The content and works on these pages created by the site operator are subject to German copyright law. The reproduction, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Impressum, please <a href="/contact">contact us</a>.
      </p>
    </div>
  );
};

export default Impressum;
