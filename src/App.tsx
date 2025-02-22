import { Box } from '@chakra-ui/react';
import RunningHorse from './components/animations/Horse';
import HorseHead from './components/animations/HorseHead';

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <HorseHead />
    </Box>
  );
}

export default App;
