import 'styles/index.scss';

import React from 'react';

import Avatar from 'components/Avatar';
import { IconCAll, IconCAM, IconMENU, IconPEN } from 'components/Icon';
import Chat from 'pages/Chat';

function App() {
  return (
    <div className="App">
      {/* <Avatar />
      <IconCAM />
      <IconCAll />
      <IconPEN />
      <IconMENU /> */}
      <Chat />
    </div>
  );
}

export default App;
