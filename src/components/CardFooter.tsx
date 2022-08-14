import { Flex, Box, Text, Heading } from '@chakra-ui/react';

export const CardFooter = ():JSX.Element => {
    return (
        <Flex w="100%" padding=".2rem" alignItems="center" justifyContent="space-between">
            <Box>
                <Text fontSize="16px" color="mediumBrown">Total this month:</Text>
                <Heading as="h3">$478.33</Heading>
            </Box>
            <Box>
                <Heading as="h3" fontSize="18px" textAlign="right">+2.4%</Heading>
                <Text fontSize="16px" color="mediumBrown">from last month</Text>
            </Box>
    </Flex>
    )
}