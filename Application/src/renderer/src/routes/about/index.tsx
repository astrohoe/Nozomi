import { Flex, Heading, Text } from '@chakra-ui/react';

export default function About() {
    return (
        <Flex direction='column' gap='1rem'>
            <Heading size='4xl'>About</Heading>
            <Text>
                Nozomi (のぞみ, "Wish" or "Hope"), 
                your ultimate destination for capturing and cherishing your travel experiences! 
                Our platform is designed for wanderers, adventurers, and dreamers who believe that every journey tells a story worth sharing. 
                Whether you're exploring bustling cities, serene landscapes, or hidden gems off the beaten path, 
                we provide a space for you to document your travels in a meaningful way.
            </Text>
            <Text>
                We understand that travel is more than just visiting new places; 
                it's about the memories we create, the people we meet, and the experiences that shape us. 
                Our mission is to empower travelers to preserve their unique stories and reflect on their adventures, 
                allowing them to relive those moments long after the journey has ended. 
                We believe that every diary entry is a piece of art, a snapshot of a moment in time, 
                and a testament to the beauty of exploration.
            </Text>
        </Flex>
    );
};
