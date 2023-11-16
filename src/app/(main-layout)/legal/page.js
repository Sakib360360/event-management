import React from "react";
import LegalDetails from "./LegalDetails";

const LegalPage = () => {
  return (
    <div className="m-8 p-8">
      {/* <LegalDetails legalItems={legalItems}></LegalDetails> */}
    </div>
  );
};

export default LegalPage;

const legalItems = [
  {
    id:"1",
    title: "Terms of Use",
    ref:'terms-of-use',
    content: (
      <div>
        <h1 className="text-center text-3xl font-bold py-10">Terms of Use</h1>
        <div className="px-10 text-justify">
          <p>
            <strong>1. Acceptance of Terms</strong>
          </p>
          <p>
            By accessing and using this website, you agree to comply with and be
            bound by these terms and conditions. If you do not agree to these
            terms, please do not use this website.
          </p>

          <p>
            <strong>2. Privacy Policy</strong>
          </p>
          <p>
            Your use of this website is also governed by our Privacy Policy.
            Please review our Privacy Policy to understand how we collect, use,
            and protect your personal information.
          </p>

          <p>
            <strong>3. Intellectual Property</strong>
          </p>
          <p>
            The content on this website, including text, graphics, logos, and
            images, is protected by copyright and other intellectual property
            laws. You may not reproduce, distribute, or display any part of this
            website without our prior written consent.
          </p>

          <p>
            <strong>4. User Conduct</strong>
          </p>
          <p>
            When using this website, you agree not to engage in any unlawful or
            prohibited activities, including but not limited to: distributing
            viruses, spamming, or attempting to interfere with the site's
            security.
          </p>

          <p>
            <strong>5. Links to Other Websites</strong>
          </p>
          <p>
            This website may contain links to third-party websites. These links
            are provided for your convenience. We do not endorse or control the
            content or practices of any third-party websites and are not
            responsible for their content or privacy policies.
          </p>

          <p>
            <strong>6. Limitation of Liability</strong>
          </p>
          <p>
            We make no warranties or representations about the accuracy or
            completeness of the content on this website. We shall not be liable
            for any direct, indirect, special, or consequential damages
            resulting from your use of this website or the information provided
            herein.
          </p>

          <p>
            <strong>7. Changes to Terms</strong>
          </p>
          <p>
            We reserve the right to modify these terms at any time. Please
            review these terms periodically to stay informed of any changes.
            Your continued use of this website after changes are posted
            constitutes your acceptance of the modified terms.
          </p>

          <p>
            <strong>8. Contact Information</strong>
          </p>
          <p>
            If you have any questions or concerns about these terms, please
            contact us at contact@example.com.
          </p>
        </div>
      </div>
    ),
  },
  {
    id:"2",
    title: "Privacy Policy",
    ref:'privacy-policy',
    content: (
      <div>
        <h1 className="text-center text-3xl font-bold py-10">Privacy Policy</h1>
        <div className="px-10 text-justify">
          <p>
            <strong>1. Information We Collect</strong>
          </p>
          <p>
            We may collect personal information, such as your name, email
            address, phone number, and event details, to provide our services.
          </p>

          <p>
            <strong>2. How We Use Your Information</strong>
          </p>
          <p>
            We use your information to plan and coordinate events, communicate
            with you, and improve our services.
          </p>

          <p>
            <strong>3. Sharing Your Information</strong>
          </p>
          <p>
            We may share your information with vendors and service providers to
            fulfill our services, but we do not sell your information to third
            parties.
          </p>

          <p>
            <strong>4. Security</strong>
          </p>
          <p>
            We take reasonable measures to protect your information, but no
            method of transmission over the internet or electronic storage is
            100% secure.
          </p>

          <p>
            <strong>5. Your Choices</strong>
          </p>
          <p>
            You can access, correct, or delete your personal information.
            Contact us if you have questions or concerns about your information.
          </p>

          <p>
            <strong>6. Changes to this Privacy Policy</strong>
          </p>
          <p>
            We may update our privacy policy to reflect changes in our
            practices. Check this page for updates.
          </p>

          <p>
            <strong>7. Contact Us</strong>
          </p>
          <p>
            If you have any questions about our privacy policy, please contact
            us at privacy@example.com.
          </p>
        </div>
      </div>
    ),
  },
  {
    id:"3",
    title: "Cookie Policy",
    ref:'cookie-policy',
    content: (
      <div>
        <h1 className="text-center text-3xl font-bold py-10">Cookie Policy</h1>
        <div className="px-10 text-justify">
          <p>
            <strong>1. Introduction</strong>
          </p>
          <p>
            This Cookie Policy explains how our website uses cookies and similar
            tracking technologies to improve your browsing experience.
          </p>

          <p>
            <strong>2. What Are Cookies?</strong>
          </p>
          <p>
            Cookies are small text files placed on your device to collect
            standard internet log information and visitor behavior information.
            They help us analyze website traffic and improve your experience.
          </p>

          <p>
            <strong>3. Types of Cookies</strong>
          </p>
          <p>We use the following types of cookies:</p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the
              website to function properly.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> These help us analyze website
              traffic and improve our services.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> These track your online
              activity to provide you with personalized advertising.
            </li>
          </ul>

          <p>
            <strong>4. How to Manage Cookies</strong>
          </p>
          <p>
            You can control and manage cookies through your browser settings.
            You can also opt-out of specific types of cookies through our cookie
            consent banner.
          </p>

          <p>
            <strong>5. Third-Party Cookies</strong>
          </p>
          <p>
            We may use third-party services (e.g., Google Analytics) that may
            set their cookies. We have no control over these cookies, so please
            review the privacy and cookie policies of these third parties.
          </p>

          <p>
            <strong>6. Changes to this Cookie Policy</strong>
          </p>
          <p>
            We may update our Cookie Policy to reflect changes in our practices.
            Check this page for updates.
          </p>

          <p>
            <strong>7. Contact Us</strong>
          </p>
          <p>
            If you have any questions about our Cookie Policy, please contact us
            at cookies@example.com.
          </p>
        </div>
      </div>
    ),
  },
];
