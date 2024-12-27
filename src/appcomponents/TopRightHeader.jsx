import {
  Box,
  Flex,
  Text,
  Heading,
  IconButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { clearLocalStorage, getLocalStorageItem } from "../utils/localStorage";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { APP_CONSTANTS } from "../constants/app";
// import axiosInstance from "../service/api";
// import { AUTH_ROUTES } from "../service/api";
// import { errorNotifier } from "./notifier";
import { useGetState } from "../GlobalStateContext/useGetState";
import { Avatar } from "../components/ui/avatar";

const TopRightHeader = ({ searchable }) => {
  const { state } = useGetState();
  const user = getLocalStorageItem(APP_CONSTANTS.user);
  console.log(user, "user");

  return (
    <Flex alignItems="center" gap="20px">
      <MenuRoot>
        <MenuTrigger>
          {/* <Button> */}
            <Avatar
            size="lg"
            name={"Micheal John"}
            src={state?.image || "https://bit.ly/broken-link"}
            // bg="teal.500"
            // color="white"
          />
          {/* </Button> */}
        </MenuTrigger>
        <MenuContent>
          <MenuItem>
            <Flex alignItems="center" gap="10px">
              <Avatar
                name="Dan Abramov"
                src={state?.image || "https://bit.ly/broken-link"}
                // shape="circle"
                size="lg"
              />

              <Box color={"white"}>
                <Heading size="sm" >Hi, {state?.fullName}</Heading>
                <Text fontSize="xs" >{state?.email}</Text>
              </Box>
            </Flex>
          </MenuItem>
          <MenuItem
             cursor={"pointer"}
            color="white"
            onClick={() => {
              clearLocalStorage();
              window.location.reload();
            }}
          >
            Logout
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </Flex>
  );
};

export default TopRightHeader;
