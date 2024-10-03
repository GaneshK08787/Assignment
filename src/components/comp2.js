import React from 'react';
import './comp2.css'; // Import the CSS file for styling

const Comp2 = () => {
  return (
    <div className="features-container">
      {/* Top section */}
      <div className="features-header">
        <h5>Features</h5>
        <h2>Analytics that feels like it’s from the future</h2>
        <p>
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Feature blocks */}
      <div className="features-grid">
        <FeatureItem 
          icon="📨" 
          title="Share team inboxes"
          description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop." 
        />
        <FeatureItem 
          icon="⚡"
          title="Deliver instant answers"
          description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        />
        <FeatureItem 
          icon="📊"
          title="Manage your team with reports"
          description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks."
        />
        <FeatureItem 
          icon="💬"
          title="Connect with customers"
          description="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
        />
        <FeatureItem 
          icon="🔗"
          title="Connect the tools you already use"
          description="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
        />
        <FeatureItem 
          icon="🤝"
          title="Our people make the difference"
          description="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
        />
      </div>
    </div>
  );
};

// Individual feature block
const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <span className="feature-icon">{icon}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Comp2;
