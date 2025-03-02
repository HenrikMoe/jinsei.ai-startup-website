import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="center-div">
      <h1 className='aboutJinsei7'>Welcome to Jinsei.ai</h1>
      <div className='aboutJinsei'>
        <p>
          Jinsei.ai is at the forefront of AI-driven ERP solutions, offering a SaaS platform that brings together the power of Natural Language Processing (NLP) and TensorFlow for enterprise automation. Here's how we can transform your business processes:
        </p>
        <ul>
          <li><strong>Advanced NLP Integration:</strong> Use our platform to incorporate state-of-the-art NLP transformers into your workflow, understanding and processing text like never before.</li>
          <li><strong>Data Modeling with TensorFlow:</strong> Our service supports the deployment of TensorFlow models, allowing you to perform complex data analysis and predictions within the same ecosystem.</li>
          <li><strong>Modular Transformer Architecture:</strong> Experience unparalleled flexibility with our transformer modularity, enabling you to combine NLP insights with numerical data outputs in a single, cohesive file format. This integration is perfect for automating repetitive tasks where both linguistic interpretation and numerical computation are necessary.</li>
          <li><strong>Nix ERP Compatibility:</strong> Designed to integrate smoothly with Nix ERP systems, enhancing process efficiency and data accuracy.</li>
          <li><strong>Platform as a Service (PaaS):</strong> Our PaaS provides a complete environment for AI application development, hosting, and scaling, tailored to your enterprise needs.</li>
        </ul>
      </div>

      <div className='aboutJinsei'>
        <p>
          Explore our capabilities to the evolution of AI in business by checking out our <a href='https://github.com/HenrikMoe/Service-Infrastructure'>GitHub repository</a>.
        </p>
      </div>

      <div className='aboutJinsei'>
        <p>
          For inquiries or to discuss potential collaborations, contact us via email or connect with us on <a href='https://x.com/jinseicorp'>X</a>.
        </p>
      </div>

      <div className='aboutJinsei69'>
        <p>
          See how our platform works with practical examples by watching our interface demos on <a href='https://www.youtube.com/@Jinsei-AI'>YouTube</a>.
        </p>
      </div>

    </div>
  );
};

export default About;
