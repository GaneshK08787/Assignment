import React from 'react';
import './comp4.css';

const Comp4 = () => {
  return (
    <div className="comp4-container">
      {/* Blog section */}
      <section className="comp4-blog">
        <div className="blog-header">
          <h2>Our blog</h2>
          <h3>Lastest blog posts</h3>
          <p>Tools and strategies modern teams need to help their companies grow.</p>
          <button className="view-posts-btn">View all posts</button>
        </div>
        <div className="blog-posts">
          <BlogPost 
            image="path/to/image1.jpg" 
            title="UX review presentations" 
            category="Design" 
            author="Olivia Rhye" 
            date="20 Jan 2024" 
          />
          <BlogPost 
            image="path/to/image2.jpg" 
            title="Migrating to Linear 101" 
            category="Product" 
            author="Phoenix Baker" 
            date="19 Jan 2024" 
          />
          <BlogPost 
            image="path/to/image3.jpg" 
            title="Building your API stack" 
            category="Software Engineering" 
            author="Lana Steiner" 
            date="18 Jan 2024" 
          />
        </div>
      </section>

      {/* Call-to-action section */}
      <section className="comp4-cta">
        <h2>Start your free trial</h2>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <div className="cta-buttons">
          <button className="learn-more-btn">Learn more</button>
          <button className="get-started-btn">Get started</button>
        </div>
      </section>

      {/* Footer section */}
      <footer className="comp4-footer">
        <div className="footer-columns">
          <FooterColumn
            title="Product"
            links={['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']}
          />
          <FooterColumn
            title="Company"
            links={['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact']}
          />
          <FooterColumn
            title="Resources"
            links={['Blog', 'Newsletter', 'Events', 'Help center', 'Tutorials', 'Support']}
          />
          <FooterColumn
            title="Use cases"
            links={['Startups', 'Enterprise', 'Government', 'SaaS center', 'Marketplaces', 'Ecommerce']}
          />
          <FooterColumn
            title="Social"
            links={['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'Dribble']}
          />
          <FooterColumn
            title="Legal"
            links={['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact']}
          />
        </div>
        <div className="footer-bottom">
          <p>&copy; 2077 Untitled UI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Blog post component
const BlogPost = ({ image, title, category, author, date }) => (
  <div className="blog-post">
    <img src={image} alt={title} />
    <div className="blog-post-info">
      <span>{category}</span>
      <h4>{title}</h4>
      <p>{author} <span>{date}</span></p>
    </div>
  </div>
);

// Footer column component
const FooterColumn = ({ title, links }) => (
  <div className="footer-column">
    <h4>{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index}><a href="#">{link}</a></li>
      ))}
    </ul>
  </div>
);

export default Comp4;
