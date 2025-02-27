import { Link } from 'react-router';
import { Box, Card, Image } from '@chakra-ui/react';

export default function NozomiCard({ data }) {
    const imageUrl : string = import.meta.env.VITE_APIURL + 'public/' + data.id + '/' + data.image;

    return (
        <Link to={'/' + data.id}>
            <Box>
                <Card.Root flexDirection='row' overflow='hidden' maxW='xl'>
                    <Image src={imageUrl} alt={data.image} objectFit='cover' maxW='200px' opacity={0.7} />
                    <Card.Body gap='2'>
                        <Card.Title>
                            { data.title }
                        </Card.Title>
                        <Card.Description>
                            { data.author }
                        </Card.Description>
                        <Card.Description>
                            { data.date }
                        </Card.Description>
                    </Card.Body>
                </Card.Root>
            </Box>
        </Link>
    );
};
