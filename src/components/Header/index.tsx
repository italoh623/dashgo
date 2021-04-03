import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Notificationnav } from './NotificationNac';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
interface HeaderProps {
} 

export function Header({  }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />
    
      <Flex
        align="center"
        ml="auto"
      >
        <Notificationnav />
        <Profile />
      </Flex>
    </Flex>
  )
}