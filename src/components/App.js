import React from 'react';
import { useEffect, useState } from 'react';
import { generateProductGraph } from '../libs/genProductGraph';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const getRawSvg = async () => {
      const rawSVG = await generateProductGraph();

      console.log('CHECK ', rawSVG);
    };

    getRawSvg();
  }, []);
  return (
    <div className="full-screen">
      <div>
        <h1>React Page!!! </h1>
        <br />
        <a
          className="button-line"
          href="https://github.com/deityhub"
          target="_blank"
        >
          Know more now
        </a>
      </div>
    </div>
  );
};

export default App;
