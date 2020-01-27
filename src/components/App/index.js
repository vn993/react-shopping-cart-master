import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
//import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
    <div style={{ backgroundColor: 'blue', height: 60 }}>
      <Filter showSlider={false} />
    </div>
    <main>
      <Filter showSlider={true} />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
