import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import Navbar from 'modules/Navbar/Navbar';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
};
