import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const runningAnimation = keyframes`
  0% {
    transform: translateX(0) rotate(0);
  }
  50% {
    transform: translateX(-50px) rotate(10deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
`;

const RunningHorse = () => {
  return (
    <Box position="relative" width="200px" height="100px">
      {/* Body */}
      <Box
        position="absolute"
        bottom="20px"
        left="20px"
        width="100px"
        height="40px"
        bg="brown"
        borderRadius="12px"
      />

      {/* Head */}
      <Box
        position="absolute"
        top="0"
        left="80px"
        width="40px"
        height="30px"
        bg="brown"
        borderRadius="50%"
      />

      {/* Legs */}
      <Box
        position="absolute"
        bottom="0"
        left="20px"
        width="8px"
        height="20px"
        bg="brown"
        borderRadius="5px"
        animation={`${runningAnimation} 0.6s infinite ease-in-out`}
      />
      <Box
        position="absolute"
        bottom="0"
        left="40px"
        width="8px"
        height="20px"
        bg="brown"
        borderRadius="5px"
        sx={{
          animation: `${runningAnimation} 0.6s infinite ease-in-out`,
          animationDelay: '-0.3s',
        }}
      />
      <Box
        position="absolute"
        bottom="0"
        left="60px"
        width="8px"
        height="20px"
        bg="brown"
        borderRadius="5px"
        animation={`${runningAnimation} 0.6s infinite ease-in-out`}
      />
      <Box
        position="absolute"
        bottom="0"
        left="80px"
        width="8px"
        height="20px"
        bg="brown"
        borderRadius="5px"
        sx={{
          animation: `${runningAnimation} 0.6s infinite ease-in-out`,
          animationDelay: '-0.3s',
        }}
      />

      {/* Tail */}
      <Box
        position="absolute"
        bottom="10px"
        left="0"
        width="20px"
        height="10px"
        bg="black"
        borderRadius="5px"
        transform="rotate(30deg)"
      />

      {/* Main body animation */}
      <Box
        position="absolute"
        bottom="20px"
        left="0"
        width="100px"
        height="40px"
        bg="brown"
        borderRadius="12px"
        animation={`${runningAnimation} 1s infinite ease-in-out`}
      />
    </Box>
  );
};

export default RunningHorse;
