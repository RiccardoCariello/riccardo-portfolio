
import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>My Landing Page</h1>
      <div className="user-info">
        <h2>User Information</h2>
        <p><strong>Nickname:</strong> [Your Nickname]</p>
        <p><strong>Email:</strong> [Your Email]</p>
        <p><strong>Country:</strong> [Your Country]</p>
      </div>
      <div className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="icons">
          {/* Add your tech stack icons here */}
          <span>Icon 1</span>
          <span>Icon 2</span>
          <span>Icon 3</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
