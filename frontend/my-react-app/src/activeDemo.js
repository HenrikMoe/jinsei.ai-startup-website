import React, { useState, useEffect } from 'react';
import control from './noun-control-panel-7093048.png'
import Config from './config.png'
import Transformer from './noun-transformer-5878572.png'
import ERP from './noun-enterprise-7090016.png'
// Sample Demo Data
import { Link } from 'react-router-dom';


import HlsPlayer from 'react-hls-player';

const demoData = [
   {
    id: "demo1",
    title: "Jinsei Dashboard",
    image: control,
    description: "Discover the power of managing your digital ecosystem with the Jinsei Dashboard.",
    steps: [
      {
        id: 'Dashboard Overview',
        title: 'Navigate the Jinsei Dashboard',
        description: "Explore the Platform as a Service (PaaS) environment where you can manage hosted services, Jinsei's data transformers, and audit data outputs seamlessly.",
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/47af1211-38a1-4758-a9a2-020840928d9e/playlist.m3u8"
      },
      {
        id: 'View Transformers',
        title: 'Explore Transformers',
        description: 'Dive into both private and public Large Language Models (LLMs). Analyze model architectures, examine training data, and test or integrate new models into your workflow.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/3e042af0-7349-4f68-8f88-6c249024c52a/playlist.m3u8"
      },
      {
        id: 'File Format Flexibility',
        title: 'Universal Format Support',
        description: "Leverage Jinsei's capability to automate data augmentation across any file type, ensuring your data transformation is as versatile as your needs.",
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/2962d14f-e016-46fa-b26e-c51ce8c2fb27/playlist.m3u8"
      },
    ]
  },
 {
    id: "demo2",
    image: Transformer,
    title: "Creating Transformers",
    description: "Embark on the journey of building your own data transformers with Jinsei.",
    steps: [
      {
        id: 'Create a Transformer',
        title: 'Initiate Transformer Creation',
        description: 'Access the Transformers API to start defining your custom data categorization.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/d355d215-a96a-48b6-8bcc-9c81d0ab3458/playlist.m3u8"
      },
      {
        id: 'Add Training Data',
        title: 'Train with Data',
        description: 'Upload existing data augmentation files or create detailed transformer silos for complex data handling sequences.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/65b3052f-8a28-424c-8bd6-1373e9ab5693/playlist.m3u8"
      },
      {
        id: 'Select LLM',
        title: 'Customize Your LLM',
        description: 'Choose from a library of LLMs, fine-tune them for your specific tasks, and run tests using NLP and TensorFlow for optimal performance.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/389e5d7d-f7bf-47af-a72a-f5d926d13445/playlist.m3u8"
      },
      {
        id: 'Share Model',
        title: 'Distribute Your Model',
        description: 'Decide to keep your model in-house or share it through the Jinsei API for broader utilization.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/9e7945aa-32b6-4f92-b33f-80ca787db02b/playlist.m3u8"
      },
      {
        id: 'Add to Dashboard',
        title: 'Integrate with Jinsei Dashboard',
        description: 'Deploy your newly created transformer model into a service for real-time operations.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/41d53115-738e-4ef3-93a0-d224de0ca256/playlist.m3u8"
      }
    ]
  },
   {
    id: "demo3",
    title: "Launching a Transformer",
    image: Config,
    description: "Set your transformers into motion with Jinsei's streamlined deployment process.",
    steps: [
      {
        id: 'Create a Service',
        title: 'Establish Service Environment',
        description: 'Build a dedicated service to host your transformer, customizing the environment to meet your specific needs.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/c5467b40-3563-4d1c-b6d7-80241e64b1e4/playlist.m3u8"
      },
      {
        id: 'Add Transformer',
        title: 'Associate Transformer with Service',
        description: 'Integrate your transformer into the service, ensuring all components are aligned for optimal performance.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/2b131d53-8548-460f-8b72-d357e5bcde18/playlist.m3u8"
      },
      {
        id: 'Configure Inputs',
        title: 'Define Data Inputs',
        description: 'Specify the data inputs for your transformer, including easy setup of on-premise data directory runners.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/f463d8ea-4973-483f-a288-f3b6ddd68a85/playlist.m3u8"
      },
      {
        id: 'Install Runner',
        title: 'Setup File Runner',
        description: 'Install and authorize file runners to handle data inputs from your local directories efficiently.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/fedcffcc-60af-4b49-9ca1-85f4c0aeb84e/playlist.m3u8"
      },
      {
        id: 'View Runners',
        title: 'Manage Runners',
        description: "Adjust and monitor your on-premise file runners to ensure they're performing as expected.",
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/041a5ef7-a9ea-43e8-b8c9-af7f0205a0f6/playlist.m3u8"
      },
      {
        id: 'Set Outputs',
        title: 'Configure Transformer Outputs',
        description: 'Define how your transformer outputs data, similar to setting inputs, for seamless data flow.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/3a9eb518-912a-44b5-abbe-ea6222ba52dc/playlist.m3u8"
      },
      {
        id: 'Output Runners',
        title: 'Deploy Output Runners',
        description: 'Install output runners to manage and distribute the processed data within your enterprise systems.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/35fbdaff-9d66-4629-83a0-ee0690ba5205/playlist.m3u8"
      },
      {
        id: 'Manual Process',
        title: 'Manual Process Initiation',
        description: 'Test your setup by manually initiating a process with a file drop into the transformer’s input path.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/f1fd1391-3ebd-409e-82f8-052dfd76bd5a/playlist.m3u8"
      },
      {
        id: 'View Outputs',
        title: 'Check Processed Data',
        description: 'Review the results of your transformer in the designated output directory to ensure accuracy and efficiency.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/5e2b5935-452c-4d83-a430-4a481e18da29/playlist.m3u8"
      },
    ]
  },
  {
    id: "demo4",
    image: ERP,
    title: "Multi-Transformer Automation",
    description: "Orchestrate complex data transformation workflows with Jinsei's modular transformer setup.",
    steps: [
      {
        id: 'Second Transformer',
        title: 'Integrate Another Transformer',
        description: 'Expand your service by adding another transformer to handle subsequent data processing steps.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/e02c27bc-c994-40d7-83f2-0654bf6a3ca2/playlist.m3u8"
      },
      {
        id: 'Configure Transformers',
        title: 'Chain Transformers',
        description: 'Link transformers in sequence where the output of one becomes the input for another, creating a data transformation pipeline.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/6bd87e59-fe10-49ef-b847-17e914a9a1b1/playlist.m3u8"
      },
      {
        id: 'Multiple Transformers',
        title: 'Scale with Multiple Transformers',
        description: 'Jinsei supports scalability at multiple levels: fine-tuning within each transformer and orchestrating multiple transformers for enterprise-scale processes.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/904af0a3-9e52-4ab4-ad41-4fe4a98214be/playlist.m3u8"
      },
      {
        id: 'Run Service',
        title: 'Automate Workflow',
        description: 'Execute your multi-transformer service, set execution frequencies, and explore hosting options to optimize performance.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/96d7f89d-6783-4828-9554-77daf156758a/playlist.m3u8"
      }
    ]
  }
];

// Parent Component
const ParentComponent = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [demoSelected, setDemoSelected] = useState(false); // State for demo selection
const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
const styles2 = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    width: isMobile ? '83%' : '100%',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
  },
 
  button: {
    backgroundColor: '#ff5722', // Warm color
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: isMobile ? '25px' : '35px', // Conditionally adjust font size
    padding: '10px 20px',
    boxShadow: '20px 2px 10px rgba(0, 0, 0, 0.9)',

    margin: '25px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
  },}
  const handleDemoSelect = (demo) => {
    setSelectedDemo(demo);
    setDemoSelected(true); // Set demoSelected to true when a demo is selected
  };

  const handleBackToSelection = () => {
    setSelectedDemo(null);
    setDemoSelected(false); // Set demoSelected to false to show demo selection
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles2.container}>
      {!demoSelected ? (
        <DemoSelection onDemoSelect={handleDemoSelect} />
      ) : (
        <DemoPlayer demo={selectedDemo} onBack={handleBackToSelection} />
      )}
    </div>
  );
};

// Demo Selection Component
const DemoSelection = ({ onDemoSelect }) => {
  return (
    <div style={styles.demoSelection}>
   <div>
<h2>Select an active demo.</h2>
   </div>
   <div>
   <h3>For more information, check out <Link to="/about">the About page</Link>.</h3>
   </div>
   {demoData.map((demo) => (
        <button
          key={demo.id}
          onClick={() => onDemoSelect(demo)}
          style={styles.button}
        >
          <img src={demo.image} alt={`${demo.title} icon`} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          {demo.title}
        </button>
      ))}
    </div>
  );
};

// Demo Player Component
const DemoPlayer = ({ demo, onBack }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleNextStep = () => {
    if (currentStepIndex < demo.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const currentStep = demo.steps[currentStepIndex];

  return (
    <div style={styles.demoPlayer}>
      <button onClick={onBack} 
              style={isMobile ? styles.mobileScrollButton : styles.scrollButton2}
> &#8592; {/* Left Arrow */}</button> {/* Back Button */}
<h3 style={isMobile ? styles.titlepartmob : styles.titlepart}>{currentStep.id}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HlsPlayer
            src={currentStep.videoUrl}
            autoPlay={isMobile ? false : true}
            controls={true}
            width={isMobile ? "300px" : "600px"}
            height={isMobile ? "200px" : "300px"}
            style={styles.video}
          />
        <h2 style={styles.videoTitle}>{currentStep.title}</h2>
        <p style={styles.description}>{currentStep.description}</p>

        <div style={styles.scrollContainer}>
          <ScrollButtons 
            currentStepIndex={currentStepIndex} 
            totalSteps={demo.steps.length} 
            onNext={handleNextStep} 
            onPrevious={handlePreviousStep} 
          />
        </div>
        
        <ProgressBar 
          currentStepIndex={currentStepIndex} 
          totalSteps={demo.steps.length} 
        />
      </div>
    </div>
  );
};

// Scroll Buttons Component
const ScrollButtons = ({ currentStepIndex, totalSteps, onNext, onPrevious }) => {
  return (
    <div style={styles.scrollContainer}>
      <button 
        onClick={onPrevious} 
        disabled={currentStepIndex === 0} 
        style={styles.scrollButton}
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button 
        onClick={onNext} 
        disabled={currentStepIndex === totalSteps - 1} 
        style={styles.scrollButton}
      >
        &#8594; {/* Right Arrow */}
      </button>
    </div>
  );
};


// Progress Bar Component
const ProgressBar = ({ currentStepIndex, totalSteps }) => {
  return (
    <div style={styles.progressBarContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div 
          key={index} 
          style={{
            ...styles.progressBubble, 
            backgroundColor: currentStepIndex === index ? '#333' : '#ccc'
          }}
        />
      ))}
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
  },
  demoSelection: {
    display: 'flex',
    marginTop: '50px',

    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
mobileScrollButton: {
  backgroundColor: 'rgb(143, 107, 107)',
  color: '#fff',
  border: 'none',
  fontSize: '24px',
  padding: '1px 5px 5px 5px',
  boxShadow: `
      10px 20px 15px rgba(0, 0, 0, 0.25),  
      15px 10px 10px rgba(0, 0, 0, 0.15)
    `,
  width: '80px',  // Adjust width for mobile
  marginLeft: '20px',  // Auto margin for centering
  marginBottom: '10px',
  borderRadius: '4px',
  marginTop: '160px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
},
  button: {
    backgroundColor: '#F8FAFC', // Warm color
    color: 'rgb(33, 31, 31)',
    border: 'none',
    borderRadius: '4px',
    fontSize:  '25px', // Conditionally adjust font size
    padding: '10px 20px',
    boxShadow: `
      10px 20px 15px rgba(148, 148, 148, 1),  
      15px 10px 10px rgba(148, 148, 148, 1)
    `,
    margin: '25px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  buttonHover: {
    backgroundColor: '#e64a19', // Darker on hover
    transform: 'scale(1.05)',
  },
  titlepart: {

    marginTop: '0px',
    marginBottom: '40px',
    textAlign: 'center', marginRight: '00px'
  },
   titlepartmob: {
  },
  demoPlayer: {
    textAlign: 'center',
    flex: '1',
    display: 'flex',
    marginTop: '-150px',
    padding: '0px',

    flexDirection: 'column',
    justifyContent: 'center',
  },
  videoTitle: {
    color: '#333',
  },
  description: {
    color: '#666',
    marginBottom: '10px',
    width: '90%'
  },
  video: {
    borderRadius: '8px',
    padding: '0px 0px 0px 0px',
    boxShadow: `
    10px 20px 15px rgba(0, 0, 0, 0.25),  
    15px 10px 10px rgba(0, 0, 0, 0.15)
  `,    marginBottom: '20px',
  },
  scrollContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
   
  },
  scrollButton: {
    backgroundColor: '#408ddb',
    color: '#fff',
    border: 'none',
    fontSize: '25px',
  
    marginLeft: '5px',
    borderRadius: '4px',
    padding: '5px 10px 10px 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  scrollButton2: {
    backgroundColor: 'rgb(143, 107, 107)',
    color: '#fff',
    marginTop: '200px',
    boxShadow: `
    10px 20px 15px rgba(0, 0, 0, 0.25),  
    15px 10px 10px rgba(0, 0, 0, 0.15)
  `,
    border: 'none',
    fontSize: '24px',
    padding: '1px 5px 5px 5px',
    width: '100px',
    marginLeft: '205px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  progressBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
  },
  progressBubble: {
    width: '20px',
    boxShadow: `
    10px 20px 15px rgba(0, 0, 0, 0.25),  
    15px 10px 10px rgba(0, 0, 0, 0.15)
  `,
    height: '10px',
    borderRadius: '15px',
    margin: '0 5px',
    transition: 'background-color 0.3s',
  },
};

// Responsive Styling

export default ParentComponent;
