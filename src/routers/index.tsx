import Chat from 'pages/Chat';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import RouteEnum from './router.enum';

const routes = [
  {
    element: <Home />,
    path: RouteEnum.HOME,
  },
  {
    element: <Chat />,
    path: RouteEnum.CHAT,
  },
];

const Routers = () => {
  return (
    <Routes>
      {routes.map(({ path, element }, index) => {
        return <Route path={path} key={index} element={element}></Route>;
      })}
    </Routes>
  );
};

export default Routers;
