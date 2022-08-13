import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export const Card = ():JSX.Element => {
    return (
        <Box as="article" w="440px" padding="2rem" bgColor="white" color="darkBrown" borderRadius="10px">
            <Heading as="h1" fontSize="26px">Spending - Last 7 days</Heading>
        </Box>
    )
}