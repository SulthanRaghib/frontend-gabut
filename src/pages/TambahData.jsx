import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CardActivity from "../components/CardActivity";

const TambahData = () => {
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
            <Text color="white">Inputan Activity Name</Text>
          </Flex>
        </Box>

        {/* Info */}
        <Box bg="#f0f0f0" height="auto" p={4} textAlign="center">
          <Flex direction="row" gap="6">
            <Text>
              silahkan masukan hostnamenya pindahin di Bawah masukan activity
            </Text>
          </Flex>
        </Box>

        {/* INPUT FORM */}
        <Flex height="auto" p={4} textAlign="center" direction="column" gap="4">
          <Input placeholder="Input Activity Name" />
        </Flex>

        <Box bg="#f0f0f0" height="auto" p={4} textAlign="center">
          <Flex direction="row" gap="6">
            <Text>silahkan masukan komentar</Text>
          </Flex>
        </Box>

        {/* INPUT FORM */}
        <Flex height="auto" p={4} textAlign="center" direction="column" gap="4">
          <Input placeholder="Input Komentar" height={"100px"} />
          <Button size="sm" bg={"#5156be"} color={"white"}>
            Submit
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TambahData;
