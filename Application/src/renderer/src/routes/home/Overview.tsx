import { useEffect } from 'react';
import { Link } from 'react-router';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import ashley from '../../assets/ashley.jpg';

export default function Overview() {

    return (
        <Flex gap='1rem'>
            <Flex direction='column' justify='center' gap='1rem'>
                <Box textTransform='uppercase'>
                    <Text lineHeight={1}>Featured Nozomi</Text>
                    <Link to='/'>
                        <Text fontSize={26} fontFamily='HachiMaruPop' fontWeight={700}>
                            Ashley on the Map
                        </Text>
                    </Link>
                </Box>
                <Text>Come along on Ashley's adventure in Oceania.</Text>
            </Flex>
            <Link to='/'>
                <Image alt='ashley' src={ashley} height={280} width={480} marginLeft='auto' />
            </Link>
        </Flex>
    );
};
