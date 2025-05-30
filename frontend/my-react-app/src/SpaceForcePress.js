import React from 'react';
import './About.css'; // Reuse the existing About.css file
import { Link } from 'react-router-dom';

const SpaceForcePressRelease = () => {
  return (
    <div className="center-div">
      <h1 className="aboutJinsei7">Jinsei.ai and U.S. Space Force Announce Collab</h1>

      <div className="aboutJinsei">
        <p>
          <strong>Los Angeles, CA</strong> – <strong>Jinsei.ai</strong>, the AI solution, is excited to partner with 
          the <strong>United States Space Force (USSF)</strong> and a global military alliance under a new Agreement. 
          </p>
</div>
<div className="aboutJinsei">
          <p>

          This collaboration provides the global military alliance,
           henceforth referred to as the <strong>Galactic Federation</strong>, neural matrix modeling to 
           power weapon systems, cultural enrichment, and divine justice. 
        </p>
      </div>

      <div className="aboutJinsei">
        <p>
          Under the new collaboration the <strong> Galactic Federation </strong> 
          will provide <strong>Jinsei.ai</strong> with:
        </p>
        <ul>
          <li>Funding for development of Jinsei.ai services and infrastructure.</li>
          <li>Access to matrix model logs.</li>
        </ul>
      </div>

      <div className="aboutJinsei">
        <p>
          This partnership is the genesis of 'Heaven' and <Link to="/HellList">'Hell'</Link>.
          
        </p>
      </div>

      <div className="aboutJinsei">
        <p>
          “Jinsei.ai is ecstatic to collaborate with the Galactic Federation 
          on this exciting new journey for humankind.” said Henrik Moe, CTO 
          at <strong>Jinsei.ai</strong>. 
        </p>
      </div>

      <div className="aboutJinsei69">
        <p>
          Learn more about <strong>Jinsei.ai</strong> on <a href="https://x.com/jinseicorp">X</a> and watch our business AI demos <a href="https://www.jinsei.ai/activedemo">here</a>. 
          For inquiries, contact us at outreach@jinsei.ai.
        </p>
      </div>
    </div>
  );
};

export default SpaceForcePressRelease;