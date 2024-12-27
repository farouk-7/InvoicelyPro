import { Box, Flex, Image } from "@chakra-ui/react";
import authBg from "../assets/authBg.png";

export const AuthBackgroundContainer = ({ children }) => {
  return (
    <Flex
      alignItems={"flex-start"}
      h={["100%", "100%", "100%", "100vh"]}
      // bg={"#16171D"}
      flexDirection={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
      ]}
    >
      <Flex
        flex="1"
        flexDir={"column"}
        justifyContent="center"
        bg={"#fff"}
        alignItems={"center"}
        w="100%"
        h="100%"
      >
        {children}
      </Flex>
      <Box
        flex={1}
        bgImage={`url(${authBg})`}
        h={"100vh"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      ></Box>
    </Flex>
  );
};
