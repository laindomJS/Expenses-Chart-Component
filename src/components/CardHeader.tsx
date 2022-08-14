import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import url from '../assets/logo.svg';

export const CardHeader = ():JSX.Element => {
    return (
        <Flex as={motion.article} w={ {base:"370px", lg:"480px"} } padding="1.4rem" bgColor="softRed" color="white" alignItems="center" justifyContent="space-between" borderRadius="10px" initial={ {opacity:0, scale:0.2} } whileInView={ {opacity:1, scale:1} } transition=".2s linear" viewport={ {once: true} }>
            <Box>
                <Text as="p" fontSize="18px">My balance:</Text>
                <Text as="p" fontSize="24px" fontWeight="bold">$921.48</Text>
            </Box>
            <Image src={url} alt="This is the logo of the company dashboard founder" w="50px" />
        </Flex>
    )
}