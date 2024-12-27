import { Box, Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { _COLORS } from "../constants/colors";
import { getPageTitle } from "../utils/GetPageTitle";
// import wave from "../assets/wave.png";
import TopRightHeader from "./TopRightHeader";
import { useNavigate } from "react-router-dom";

const CardHeader = ({ children, listType }) => {
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location, "sduh");
  const pathname = location.pathname;
  return (
    <Flex
      direction="column"
      justify="space-between"
      bg={_COLORS.brand}
      // bgImage={wave}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      borderRadius=".8rem"
      width="100%"
      height={["fit-content","fit-content","fit-content","15rem"]}
      padding={["0.5rem","0.5rem","0.5rem","1rem"]}
    >
      <Flex width="100%" justify={"space-between"} color={_COLORS.white}>
        <Box>
          <Text fontSize={"large"} pb="8px" color={_COLORS.lightBlue}>
            {listType}
          </Text>
          <Text fontSize={"larger"} color={_COLORS.white} fontWeight={500}>
            {getPageTitle(pathname)}
          </Text>
          {/* <Text
            fontWeight={"bold"}
            cursor={"pointer"}
            onClick={() => navigate(-1)}
          >
            {pathname === "/client-invoice-details" ? "Back" : ""}
          </Text> */}
        </Box>

        <TopRightHeader />
      </Flex>
      {children}
    </Flex>
  );
};

export default CardHeader;

CardHeader.propTypes = {
  children: PropTypes.element,
};
