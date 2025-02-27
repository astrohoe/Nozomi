import { Box, Flex, List, Text } from '@chakra-ui/react';

export default function Favorites() {
    return (
        <Flex direction='column' justify='center' gap='1rem' maxWidth='60%'>
            <Box textTransform='uppercase'>
                <Text fontSize={26} fontFamily='HachiMaruPop' fontWeight={700}>
                    Meet the 2025 worldwide travel favorites
                </Text>
            </Box>
            <List.Root as='ol'>
                <Flex paddingLeft='1rem' justifyContent='space-between'>
                    <Box>
                        <List.Item>Galápagos Islands, Ecuador</List.Item>
                        <List.Item>New York City Museums</List.Item>
                        <List.Item>White Lotus Thailand</List.Item>
                        <List.Item>Greenland</List.Item>
                        <List.Item>Aix-en-Provence, France</List.Item>
                        <List.Item>Sun Valley, Idaho</List.Item>
                        <List.Item>Lumbini, Nepal</List.Item>
                        <List.Item>Sydney, Australia</List.Item>
                    </Box>
                    <Box>
                        <List.Item>Coimbra, Portugal</List.Item>
                        <List.Item>Hamburg, Germany</List.Item>
                        <List.Item>Nicaragua</List.Item>
                        <List.Item>Dolomite Mountains, Italy</List.Item>
                        <List.Item>Asheville, N.C.</List.Item>
                        <List.Item>Magdalena River, Colombia</List.Item>
                        <List.Item>Los Cabos, Mexico</List.Item>
                    </Box>
                </Flex>
            </List.Root>
        </Flex>
    );
};
