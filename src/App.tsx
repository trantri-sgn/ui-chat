import 'styles/index.scss';

import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routers';

const AppContainer = () => {
  return (
    <Suspense fallback={<div></div>}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

function App() {
  return (
    <div className="App">
      {/* <Avatar />
      <IconCAM />
      <IconCAll />
      <IconPEN />
      <IconMENU /> */}
      <AppContainer />
      {/* <Chat /> */}
    </div>
  );
}

export default App;
