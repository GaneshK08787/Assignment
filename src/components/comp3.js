import React from 'react';
import './comp3.css';
import img1 from './figmacomp1_img.png'

const Comp3 = () => {
  return (
    <div className="comp3-container">
      {/* Header section */}
      <header className="comp3-header">
        <div className="comp3-logo">Fill × Hug</div>
        <h1>Cutting-edge features for advanced analytics</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert, engage, 
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </header>

      {/* Main feature image */}
      <div className="comp3-main-image">
        <img src={img1} alt="Analytics platform" />
      </div>

      {/* Features section */}
      <div className="comp3-features-grid">
        <FeatureItem 
          icon="📨" 
          title="Share team inboxes"
          description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          linkText="Learn more"
        />
        <FeatureItem 
          icon="⚡" 
          title="Deliver instant answers"
          description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          linkText="Learn more"
        />
        <FeatureItem 
          icon="📊" 
          title="Manage your team with reports"
          description="Measure what matters with our easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks."
          linkText="Learn more"
        />
      </div>

      {/* FAQ Section */}
      <div className="comp3-faq">
        <h2>Frequently asked questions</h2>
        <p>Everything you need to know about the product and billing.</p>
        <FAQItem question="Is there a free trial available?" answer="Yes, we offer a free trial for 30 days..." />
        <FAQItem question="Can I change my plan later?" answer="Yes, you can upgrade or downgrade..." />
        <FAQItem question="What is your cancellation policy?" answer="You can cancel your plan anytime..." />
        <FAQItem question="Can other info be added to an invoice?" answer="Yes, you can add details like..." />
        <FAQItem question="How does billing work?" answer="We bill you on a monthly basis..." />
        <FAQItem question="How do I change my account email?" answer="You can update your account settings..." />
      </div>

      {/* Support Section */}
      <div className="comp3-support">
        <h3>Still have questions?</h3>
        <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <img src="path/to/support-team-image.jpg" alt="Support team" />
      </div>
    </div>
  );
};

// Feature item component
const FeatureItem = ({ icon, title, description, linkText }) => (
  <div className="feature-item">
    <span className="feature-icon">{icon}</span>
    <h4>{title}</h4>
    <p>{description}</p>
    <a href="#">{linkText}</a>
  </div>
);

// FAQ item component
const FAQItem = ({ question, answer }) => (
  <div className="faq-item">
    <h4>{question}</h4>
    <p>{answer}</p>
  </div>
);

export default Comp3;
