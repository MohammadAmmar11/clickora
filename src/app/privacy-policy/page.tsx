import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        At <strong>[Clickora]</strong>, we are committed to protecting
        your privacy. This Privacy Policy outlines the types of information we
        collect, how it is used, and how we safeguard it.
      </p>

      {/* Section 1: Information We Collect */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1. Information We Collect
      </h2>
      <p className="text-gray-700 mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Personal identification information (name, email address, phone number, etc.)</li>
        <li>Technical information (IP address, browser type, etc.)</li>
        <li>Other information relevant to customer surveys and offers</li>
      </ul>

      {/* Section 2: How We Use Information */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        2. How We Use Information
      </h2>
      <p className="text-gray-700 mb-6">
        The information we collect is used in the following ways:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>To personalize your experience and respond to your individual needs</li>
        <li>To improve our website based on feedback and analytics</li>
        <li>To process transactions and deliver requested services</li>
        <li>To send periodic promotional emails, if you have opted in</li>
      </ul>

      {/* Section 3: Information Protection */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        3. How We Protect Your Information
      </h2>
      <p className="text-gray-700 mb-6">
        We use a variety of security measures to ensure the safety of your personal information. These measures include encryption, firewalls, and regular monitoring of our systems to prevent unauthorized access.
      </p>

      {/* Section 4: Cookie Usage */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4. Use of Cookies
      </h2>
      <p className="text-gray-700 mb-6">
        Our website uses cookies to enhance your browsing experience. Cookies help us remember your preferences and track how you interact with our website. You can opt out of cookies by adjusting your browser settings.
      </p>

      {/* Section 5: Sharing Your Information */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        5. Sharing Your Information
      </h2>
      <p className="text-gray-700 mb-6">
        We do not sell, trade, or otherwise transfer your personal information to outside parties unless it is necessary for providing our services or as required by law.
      </p>

      {/* Section 6: Your Consent */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        6. Your Consent
      </h2>
      <p className="text-gray-700 mb-6">
        By using our site, you consent to our privacy policy. We may update this policy from time to time, and any changes will be posted on this page.
      </p>

      {/* Section 7: Contacting Us */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        7. Contact Us
      </h2>
      <p className="text-gray-700">
        If you have any questions regarding this privacy policy, you can contact us at:
      </p>
      <p className="text-gray-700 mb-6">
        Email: <a href="mailto:support@clickora.com" className="text-blue-600 underline">support@clickora.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
