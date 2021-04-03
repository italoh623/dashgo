import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Ítalo Henrique</Text>
        <Text color="gray.300" fontSize="small">
          italohenrique014@gmail.com
            </Text>
      </Box>

      <Avatar size="md" name="Ítalo Henrique" src="https://github.com/italoh623.png" />
    </Flex>
  );
}