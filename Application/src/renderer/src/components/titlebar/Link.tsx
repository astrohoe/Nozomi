import { NavLink } from 'react-router';
import { Box, Text } from '@chakra-ui/react';
import Border from './Border';
      
export default function LinkWrapper({ path, title } : { path : string, title : string }) {
    const style = {
        display: 'flex',
        padding: '16px 1rem',
        cursor: 'pointer',
        fontSize: 14,
    };
    return (
        <NavLink to={path} style={style}>
            {({ isActive }) => (
                <Box position='relative'>
                    <Text textTransform='uppercase' fontWeight={isActive ? 800 : 400}>{ title }</Text>
                    { isActive && <Border />}
                </Box>
            )}
        </NavLink>
    );
};
