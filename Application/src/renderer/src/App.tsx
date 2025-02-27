import { Outlet } from 'react-router';
import Titlebar from './components/titlebar';
import { Box } from '@chakra-ui/react';

function App(): JSX.Element {

  return (
    <>
      <Titlebar />
      <Box margin='0 3rem'>
        <Outlet />
      </Box>
    </>
  );
};

export default App;
