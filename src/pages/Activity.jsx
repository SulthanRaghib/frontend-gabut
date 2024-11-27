import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CardActivity from "../components/CardActivity";

const Activity = () => {
  return (
    <Flex
      height="100vh"
      direction={{ base: "column", md: "row" }}
      width="100vw"
    >
      {/* Sidebar */}
      <Box bg="#5156be" width="200px" p={5} textAlign="center">
        <Flex direction="column" gap="4" alignItems="flex-start">
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
          <Link to="/tambah-data" style={{ color: "white" }}>
            Tambah Data
          </Link>
          <Link to="/activity" style={{ color: "white" }}>
            Activity
          </Link>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex flex="1" direction="column">
        {/* Title */}
        <Box bg="#6266c4" height="auto" p={4} textAlign="center">
          <Flex direction="row" gap="4">
            <Text color="white">Data Activity</Text>
          </Flex>
        </Box>

        {/* Info */}
        <Box bg="#f0f0f0" height="auto" p={4} textAlign="center">
          <Flex direction="row" gap="6" alignItems="center">
            <Text>Today</Text>
          </Flex>
        </Box>

        <Box flex="1" bg="white" p={4} textAlign="center" height="50%">
          <CardActivity title="Activity 1" />
          <CardActivity title="Activity 2" />
          <CardActivity title="Activity 3" />
          <CardActivity title="Activity 4" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Activity;
