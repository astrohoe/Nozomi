import { Link } from 'react-router';
import { Flex, Image, Text } from '@chakra-ui/react';
import disneyland from '../../assets/disneyland.png';
import safari from '../../assets/safari.jpg';
import santorini from '../../assets/santorini.jpg';
import yellowstone from '../../assets/yellowstone.jpg';

export default function Carousel() {

    const styledImage = {
        width: 220,
        height: 120,
        objectFit: 'cover',
        maxWidth: 'unset',
        borderWidth: 1,
        borderColor: '#FFFFFF22',
        borderStyle: 'solid',
        opacity: 0.7,
    };

    return (
        <Flex position='fixed' gap='0.5rem' bottom='3rem' width='calc(100% - 6rem)' overflowX='scroll' scrollbarWidth='none'>
            <Flex className='item' direction='column'>
                <Link to='/'>
                    <Image src={santorini} {...styledImage} />
                </Link>
                <Text>Air of Santorini</Text>
            </Flex>
            <Flex className='item' direction='column'>
                <Link to='/'>
                    <Image src={disneyland} {...styledImage} />
                </Link>
                <Text>Our last trip to Disneyland</Text>
            </Flex>
            <Flex className='item' direction='column'>
                <Link to='/'>
                    <Image src={yellowstone} {...styledImage} />
                </Link>
                <Text>Night wonders of Yellowstone</Text>
            </Flex>
            <Flex className='item' direction='column'>
                <Link to='/'>
                    <Image src={safari} {...styledImage} />
                </Link>
                <Text>Wilderness of Safari</Text>
            </Flex>
        </Flex>
    );
};
