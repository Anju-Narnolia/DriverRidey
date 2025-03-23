import React from "react";

function PrivacyPolicy(){
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>At DriverRidey, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li>Personal Information: Name, email, phone number, and payment details.</li>
          <li>Usage Data: Information about how you interact with our platform.</li>
          <li>Cookies: Data collected to improve user experience and website functionality.</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>To provide and improve our services.</li>
          <li>To process transactions securely.</li>
          <li>To communicate important updates and promotional offers.</li>
          <li>To ensure platform security and prevent fraud.</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">4. Data Sharing and Security</h2>
        <p>We do not sell or share your personal information with third parties except when required by law or to provide essential services (such as payment processing).</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">5. Your Rights</h2>
        <ul className="list-disc ml-6">
          <li>You can request access, modification, or deletion of your personal data.</li>
          <li>You can opt out of marketing communications at any time.</li>
          <li>You can disable cookies through your browser settings.</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify users of any significant changes.</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at [your email/contact details].</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
