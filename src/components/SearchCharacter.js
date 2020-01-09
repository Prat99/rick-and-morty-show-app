import React, { useState, useEffect } from 'react';

export default function SearchCharacter() {
  const [typedCharacter, setTypedCharacter] = useState();

  useEffect(() => {
    console.log('typed character value', typedCharacter);
  });

  return (
    <div className="row">
      <div className="col-md-12 col-lg-12 col-sm-12 col-12">
        <div>
          <input
            type="text"
            placeholder="type here"
            onChange={e => setTypedCharacter(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
