import { JSX } from 'react';
import { Avatar, Flex, Image} from '@chakra-ui/react';
import LinkWrapper from './Link';
import nozomiLogo from '../../assets/Nozomi.png';
import { NavLink } from 'react-router';

export default function Titlebar() : JSX.Element {
    const avatarRing = {
        outlineWidth: '2px',
        outlineColor: '#F2DFAA',
        outlineOffset: '2px',
        outlineStyle: 'solid',
    };

    return (
        <Flex padding='0 3rem' marginBottom='1.5rem' borderBottom='1px solid rgba(82, 82, 82, 0.5)'>
            <Flex gap='2rem'>
                <Image src={nozomiLogo} alt='nozomi' width={100} height='auto' objectFit='contain' />
                <LinkWrapper path='/' title='Home' />
                <LinkWrapper path='/explore' title='Explore' />
                <LinkWrapper path='/create' title='Create' />
                <LinkWrapper path='/about' title='About' />
            </Flex>
            <Flex marginLeft='auto' align='center'>
                <NavLink to='/my'>
                    {({ isActive }) => (
                        <Avatar.Root
                            variant='outline'
                            _hover={{ bg: '#ffffff11'}}
                            cursor='pointer'
                            css={isActive && avatarRing}
                        >
                            <Avatar.Fallback name='Martin Pospisil' />
                        </Avatar.Root>
                    )}
                </NavLink>
            </Flex>
        </Flex>
    );
};
