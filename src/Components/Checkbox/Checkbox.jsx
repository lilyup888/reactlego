import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={(e) => setIsChecked(e.target.checked)} 
        />
        {isChecked ? "Cochée" : "Non cochée"}
      </label>
      <p>La case est {isChecked ? "cochée" : "non cochée"}.</p>
    </div>
  );
}

export default CheckboxExample;