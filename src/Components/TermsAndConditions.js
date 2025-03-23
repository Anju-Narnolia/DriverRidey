import React from "react";
import { Link } from "react-router-dom";

function TermsAndConditions(){
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-5xl font-bold mb-4">Terms and Conditions</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to DriverRidey! These Terms and Conditions govern your use of
          our website and services. By accessing or using our platform, you
          agree to comply with these terms.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">2. User Eligibility</h2>
        <p>
          You must be at least 18 years old to use our services. By using our
          platform, you confirm that you meet this requirement.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">3. Account Registration</h2>
        <ul className="list-disc ml-6">
          <li>
            You must provide accurate and up-to-date information during
            registration.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </li>
          <li>
            We reserve the right to suspend or terminate your account if
            fraudulent activity is detected.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">4. Use of Services</h2>
        <ul className="list-disc ml-6">
          <li>Our platform connects vehicle owners with drivers.</li>
          <li>
            Users must adhere to all applicable laws and regulations while using
            our services.
          </li>
          <li>
            Misuse of the platform may result in suspension or legal action.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">5. Payments and Refunds</h2>
        <p>
          Payment terms will be clearly outlined before booking a service.
          Refunds, if applicable, will be processed according to our refund
          policy.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">6. Privacy Policy</h2>
        <p>
          Your use of our services is also governed by our Privacy Policy, which
          outlines how we collect, use, and protect your data.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
        <p>
          We are not responsible for any damages or losses arising from the use
          of our services, except as required by law.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">8. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time.
          Continued use of our services after changes are made constitutes
          acceptance of the revised terms.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">9. Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at{" "}
          <strong>
            <Link to="mailto:driverrideyofficial@gmail.com">
              driverrideyofficial@gmail.com.
            </Link>
          </strong>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
