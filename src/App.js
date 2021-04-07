import LandingPage from './pages/LandingPage';
import { BreakpointProvider } from 'react-socks';

export const API_KEY = process.env.REACT_APP_MAP_API_KEY;

function App() {
  return (
    <BreakpointProvider>
      <LandingPage />
    </BreakpointProvider>
  );
}

export default App;
