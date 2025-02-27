import { Box } from '@chakra-ui/react';

export default function Border() {
    return (
        <Box
            position='absolute'
            width='100%'
            height={0}
            top={38}
            right={0}
            borderBottom='2px solid'
            borderImageSlice={1}
            borderImageSource='linear-gradient(90deg, #f2dfaa00, #f2dfaaff 50%, #f2dfaa00)'
            boxShadow='0 0px 20px 4px #fff6b5'
            borderRadius='50%'
        ></Box>
    );
};
