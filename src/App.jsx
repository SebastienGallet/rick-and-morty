import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import HomePage from './pages';
import UnlockSlider from './components/UnlockSlider';

function App() {
  const [unlocked, setUnlocked] = useState(false);
  
  const props = useSpring({
    opacity: unlocked ? 1 : 0,
    transform: unlocked ? 'translateY(0)' : 'translateY(-100%)',
    config: { tension: 280, friction: 60 },
  });

  const handleUnlock = () => {
    setUnlocked(true);
  };

  return (
    <>
      {unlocked ? (
        <animated.div style={props}>
          <HomePage />
        </animated.div>
      ) : (
        <UnlockSlider onUnlock={handleUnlock} />
      )}
    </>
  );
}

export default App;