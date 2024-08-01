import React, { useState } from 'react';


// Define arrays of dummy values
const dummyValues = [
  'File URI:', 'https://jinsei.ai/asdfjjfdbsbajs', 'call at:',
  '00:00 monthly', 'formats:', 'json,  xlsx', 'IAM:', 'Smith-John-CPA-PEVP-Deloitte', 'inspect transformer', 'inspect produced packages'

  
];

const RandomGrid = () => {
    const rows = 8;
    const columns = 2;
    const totalCells = rows * columns;
  
    // Create a state to manage grid items
    const [gridItems, setGridItems] = useState(generateGridItems());
  
    function generateGridItems() {
      // Extend dummyValues to match the required number of cells
      return [...dummyValues.slice(0, totalCells)];
    }
  
    // Handle change in input field
    const handleChange = (index, event) => {
      const newValue = event.target.value;
      setGridItems(prevItems =>
        prevItems.map((item, i) => (i === index ? newValue : item))
      );
    };
  
    return (
      <div>
        <h3>Output Config</h3>
        <div style={styles.gridContainer}>
          {gridItems.map((value, index) => (
            <div key={index} style={styles.gridItem}>
              <input
                type="text"
                value={value}
                onChange={(event) => handleChange(index, event)}
                style={styles.input}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const styles = {
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(8, auto)',
      gap: '10px',
      padding: '10px',
    },
    gridItem: {
      border: '1px solid #ccc',
      padding: '10px',
      textAlign: 'center',
      overflow: 'hidden',
    },
    input: {
      width: '100%',
      border: 'none',
      padding: '5px',
      boxSizing: 'border-box',
    },
  };
  
  export default RandomGrid;
  