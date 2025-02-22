import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const walkingRight = keyframes`
    0% { transform: translateY(0) translateX(0px)  rotate(0); }
    50% { transform: translateY(-2px) translateX(6px) rotate(-4deg); }
    100% { transform: translateY(0) translateX(0px)  rotate(0); }
`;

const walkingLeft = keyframes`
    0% { transform: translateY(0) translateX(0px) rotate(0); }
    50% { transform: translateY(2px) translateX(-6px) rotate(4deg); }
    100% { transform: translateY(0) translateX(0px) rotate(0); }
`;

const walkingLeftFront = keyframes`
    0% { transform: translateY(0) translateX(0px)  rotate(0); }
    50% { transform: translateY(-3px) translateX(3px) rotate(-30deg); }
    100% { transform: translateY(0) translateX(0px)  rotate(0); }
`;

const walkingRightFront = keyframes`
    0% { transform: translateY(0) translateX(0px) rotate(0); }
    50% { transform: translateY(3px) translateX(-3px) rotate(30deg); }
    100% { transform: translateY(0) translateX(0px) rotate(0); }
`;

const HorseHead = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      w="100vw"
      bgColor="gray.100"
    >
      <Box position="relative">
        {/* head */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(68.8% 36%, 71.3% 47.3%, 69.9% 51.8%, 67.5% 51.5%, 67.1% 48.5%, 62.8% 41.5%, 62.1% 36.3%, 64.8% 24.3%, 68.3% 28%)"
        />
        {/* ears */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(69% 22.3%, 68.5% 26.8%, 69% 32%, 66.5% 27.5%, 65.3% 30%, 63.9% 28.3%, 64.2% 26%, 66.7% 21.5%, 66.9% 24.5%)"
        />
        {/* neck */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(49% 27.5%, 52.8% 40.8%, 52.3% 50.5%, 60.9% 38.3%, 62.2% 38.8%, 63.9% 28.3%, 65.1% 23.5%, 62.1% 22.8%, 56.4% 24.3%)"
        />
        {/* torso */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(49% 27.5%, 52.8% 40.8%, 52.6% 55.3%, 48.8% 60.8%, 35.1% 60.3%, 19.4% 34.5%, 27% 24.5%, 40.5% 29%, 45.2% 25%)"
        />
        {/* back right haunch */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(19.2% 35.3%, 25.5% 25.3%, 29.6% 25.5%, 32.3% 32.8%, 28.2% 49%, 25.6% 57.8%, 21.6% 72.3%, 18.7% 70.3%, 21% 57.5%)"
          animation={`${walkingRight} 5s infinite`}
        />
        {/* back left haunch */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(28.1% 46.5%, 33% 56.8%, 29.7% 71%, 25.7% 70.3%, 28.2% 58.3%, 24.9% 51%)"
          animation={`${walkingLeft} 5s infinite`}
        />
        {/* front right haunch */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(40.3% 47.8%, 48.9% 43.5%, 49.7% 73.5%, 50.1% 77.8%, 47.7% 77.3%, 44.8% 61%)"
          animation={`${walkingRightFront} 5s infinite`}
        />
        {/* front left haunch */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(44.1% 60.8%, 48.9% 43.5%, 52.1% 53.8%, 46.7% 68.5%, 44.4% 77%, 42.9% 74%)"
          animation={`${walkingLeftFront} 5s infinite`}
        />
        {/* back right lower leg*/}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(19.4% 69.3%, 22.6% 68.8%, 21.7% 87.5%, 24.9% 95.5%, 22.1% 95.5%, 19.6% 88.5%)"
          animation={`${walkingRight} 5s infinite`}
        />
        {/* back left lower leg*/}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(29.8% 69.8%, 26% 68.5%, 30.3% 85.8%, 30.6% 90.5%, 33.6% 94.5%, 32.4% 83.3%)"
          animation={`${walkingLeft} 5s infinite`}
        />
        {/* front right lower leg*/}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(49.9% 75.3%, 47.5% 75.5%, 48.8% 89.5%, 51% 94%, 54.7% 93.8%, 51.3% 88.5%)"
          animation={`${walkingRightFront} 5s infinite`}
        />
        {/* front left lower leg*/}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(45.7% 72.8%, 43.3% 72.3%, 38.3% 85%, 36.5% 91%, 39.7% 95.3%, 39.9% 87.5%)"
          animation={`${walkingLeftFront} 5s infinite`}
        />
        {/* tail */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(20.8% 55.8%, 19% 42.3%, 19.5% 32.3%, 17.7% 42.5%, 17% 71.3%, 19% 84.8%)"
        />
        {/* rear haunch gap */}
        <Box
          position="absolute"
          bgColor="blue"
          w="100px"
          h="50px"
          clipPath="polygon(19.2% 35.3%, 25.5% 25.3%, 29.6% 25.5%, 32.3% 32.8%, 28.2% 49%, 26.1% 55.3%, 23.3% 55%, 20.7% 52.8%, 18.1% 45.8%)"
        />
      </Box>
    </Box>
  );
};

export default HorseHead;
