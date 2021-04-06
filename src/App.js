import LandingPage from './pages/LandingPage';

export const API_KEY = process.env.REACT_APP_MAP_API_KEY;

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
