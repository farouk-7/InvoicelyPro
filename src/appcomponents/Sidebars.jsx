import {
  Box,
  Circle,
  // Divider,
  Flex,
  Image,
  Stack,
  Text,
  IconButton,
  useDisclosure,
  Button,
  Separator,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";

import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineSetting } from "react-icons/ai";
import { useContext, useState } from "react";
import { GlobalStateContext } from "../GlobalStateContext/GlobalState";
import { _COLORS } from "../constants/colors";

// import loogo from "../assets/loogo.png";
import { AUTHENTICATED_ROUTES } from "../constants/pageRoutes";
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { LiaUsersSolid } from "react-icons/lia";

import { IoMdMenu } from "react-icons/io";

function Sidebars() {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeSubPage, setActiveSubPage] = useState(null);
  const [workingEvent, setWorkingEvent] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [ mobile ] = useMediaQuery('(max-width: 991px)', {
    ssr: true,
    fallback: [false], // return false on the server, and re-evaluate on the client side
  });
  const { state, setState } = useContext(GlobalStateContext);
  const { isOpen, onOpen, onClose } = useDisclosure();


  
  // const bg = useColorModeValue("white", "gray.800");
  // const color = useColorModeValue("gray.800", "white");

  return (
    <Box h="auto" position={"relative"} flex={0.2}>
      {mobile ? (
        <>
          <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement={"start"}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              <Button  size="sm">
              {<IoMdMenu color="black"/>}
              </Button>
            </DrawerTrigger>
            <DrawerContent bg={"white"} color={"gray.800"}>
              <DrawerHeader>
              <Image
                maxW="150px"
                h={"40px"}
                // src={loogo}
                alt="logo"
                alignSelf={"center"}
              />
              </DrawerHeader>
              <DrawerBody>
              <Flex flexDir={"column"} w="100%">
                  <Flex flexDir={"column"} gap="10px" mt="0.5rem">
                    {NAVS.map(({ to, title, icon: Icon }, idx) => (
                      <Flex key={idx}>
                        <NavLink
                    key={idx}
                    style={({ isActive }) => {
                      {
                        isActive && setActivePage(title);
                      }
                      return isActive
                        ? {
                            color: "white",
                            background: _COLORS.brand,
                            padding: "10px",
                            width: "100%",
                            fontSize: ".8em",
                            borderRadius: "8px",
                            boxShadow: "rgb(0 0 0 / 30%) 1px 1px 3px",
                          }
                        : {
                            color: "#2D3748",
                            width: "100%",
                            fontSize: ".8em",
                            padding: "10px",
                          };
                    }}
                    to={to}
                    onClick={() => setActiveSubPage(null)}
                  >
                    <Flex
                      gap="5px"
                      alignItems={"center"}
                      fontWeight="600"
                      onClick={() => setActiveSubPage(null)}
                    >
                      <Circle
                        borderRadius={"8px"}
                        className="qw"
                        padding=".2rem"
                        bg={"#fff"}
                      >
                        <Icon
                          className="as"
                          fontSize={"1rem"}
                          color={"#7B5DD6"}
                        />
                      </Circle>
                      <Text fontWeight={700} fontSize={".8em"}>
                        {title}
                      </Text>
                      
                    </Flex>
                  </NavLink>
                      </Flex>
                    ))}
                  </Flex>
                
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerRoot>
        </>
      ) : 
      (
        <Flex
          p="2%"
          flexDir={"column"}
          position={"fixed"}
          left="0"
          w="16%"
          h="100vh"
          zIndex={"999"}
         
          bg={"white"}
          // color={color}
          color={"gray.800"}
          // {...(state?.toggle ? { display: "none" } : {})}
        >
          <Flex flexDir={"column"} w="100%">
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Image
                // w="40px"
                maxW="150px"
                h={"50px"}
                // src={loogo}
                alt="logo"
                
                alignSelf={"center"}
              />
            
            </Flex>
            <Separator size={"sm"}/>
            <Flex flex=".9" flexDir={"column"} gap="10px" mt="1rem">
              {NAVS.map(({ to, title, icon: Icon }, idx) => (
                <Flex key={idx}>
                  <NavLink
                    key={idx}
                    style={({ isActive }) => {
                      {
                        isActive && setActivePage(title);
                      }
                      return isActive
                        ? {
                            color: "white",
                            background: _COLORS.brand,
                            padding: "10px",
                            width: "100%",
                            fontSize: ".8em",
                            borderRadius: "8px",
                            boxShadow: "rgb(0 0 0 / 30%) 1px 1px 3px",
                          }
                        : {
                            color: "#2D3748",
                            width: "100%",
                            fontSize: ".8em",
                            padding: "10px",
                          };
                    }}
                    to={to}
                    onClick={() => setActiveSubPage(null)}
                  >
                    <Flex
                      gap="5px"
                      alignItems={"center"}
                      fontWeight="600"
                      onClick={() => setActiveSubPage(null)}
                    >
                      <Circle
                        borderRadius={"8px"}
                        className="qw"
                        padding=".2rem"
                        bg={"#fff"}
                      >
                        <Icon
                          className="as"
                          fontSize={"1rem"}
                          color={_COLORS.brand}
                        />
                      </Circle>
                      <Text fontWeight={700} fontSize={".8em"}>
                        {title}
                      </Text>
                    </Flex>
                  </NavLink>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}

export default Sidebars;

const NAVS = [
  {
    title: "Dashboard",
    to: AUTHENTICATED_ROUTES.dashboard,
    icon: FaTachometerAlt,
  },
  {
    title: "Invoice",
    to: AUTHENTICATED_ROUTES.invoice,
    icon: LiaUsersSolid,
  },
  {
    title: "Settings",
    to: AUTHENTICATED_ROUTES.settings,
    icon: LiaUsersSolid,
  },
 
];
