import {Box, Flex, Text} from 'native-base';
import React from 'react';

const AuthDivider = () => (
  <Flex direction="row" justify="space-between" my="8" alignItems="center">
    <Box w="41%" h="1px" bgColor="neutralLight.400" />
    <Text color="neutralGray.400" fontWeight="bold" size="md">
      OR
    </Text>
    <Box w="41%" h="1px" bgColor="neutralLight.400" />
  </Flex>
);

export default AuthDivider;
