import { Flex, Box, Text, Image } from '@chakra-ui/react';
import url from '../assets/logo.svg';

export const CardHeader = ():JSX.Element => {
    return (
        <Flex w="480px" padding="1.8rem" bgColor="softRed" color="white" alignItems="center" justifyContent="space-between" borderRadius="10px">
            <Box>
                <Text as="p" fontSize="18px">My balance:</Text>
                <Text as="p" fontSize="24px" fontWeight="bold">$921.48</Text>
            </Box>
            <Image src={url} alt="This is the logo of the company dashboard founder" w="50px" />
        </Flex>
    )
}