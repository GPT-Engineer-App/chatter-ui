import { Box, Container, Flex, IconButton, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUserAlt, FaEllipsisH, FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh">
        {/* Sidebar */}
        <Flex flexDirection="column" p={5} w="250px" borderRight="1px" borderColor="gray.200">
          <IconButton icon={<FaTwitter />} fontSize="2xl" variant="ghost" aria-label="Twitter Icon" />
          <VStack align="stretch" spacing={4}>
            <IconButton icon={<FaHome />} aria-label="Home" variant="ghost">
              Home
            </IconButton>
            <IconButton icon={<FaHashtag />} aria-label="Explore" variant="ghost">
              Explore
            </IconButton>
            <IconButton icon={<FaBell />} aria-label="Notifications" variant="ghost">
              Notifications
            </IconButton>
            <IconButton icon={<FaEnvelope />} aria-label="Messages" variant="ghost">
              Messages
            </IconButton>
            <IconButton icon={<FaBookmark />} aria-label="Bookmarks" variant="ghost">
              Bookmarks
            </IconButton>
            <IconButton icon={<FaListAlt />} aria-label="Lists" variant="ghost">
              Lists
            </IconButton>
            <IconButton icon={<FaUserAlt />} aria-label="Profile" variant="ghost">
              Profile
            </IconButton>
            <IconButton icon={<FaEllipsisH />} aria-label="More" variant="ghost">
              More
            </IconButton>
          </VStack>
          <IconButton icon={<FaFeatherAlt />} aria-label="Tweet" size="lg" colorScheme="twitter" mt={4}>
            Tweet
          </IconButton>
        </Flex>

        {/* Feed */}
        <Flex flexDirection="column" flex={1} borderRight="1px" borderColor="gray.200">
          <Box p={4} borderBottom="1px" borderColor="gray.200">
            <Text fontSize="xl" fontWeight="bold">
              Home
            </Text>
          </Box>
          <Stack spacing={3} p={4}>
            {/* Placeholder for tweets */}
            <Text>No tweets yet!</Text>
          </Stack>
        </Flex>

        {/* Trends and suggestions */}
        <Flex flexDirection="column" p={5} w="300px">
          <Text fontSize="lg" fontWeight="bold">
            Search Twitter
          </Text>
          <Input placeholder="Search Twitter" mt={2} />
          {/* Placeholder for trends */}
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="bold">
              Trends for you
            </Text>
            {/* Placeholder trends */}
            <Text mt={2}>No trends available</Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
