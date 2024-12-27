import React from 'react'
import { useGetState } from "../GlobalStateContext/useGetState"
import { Box, Flex, Stack } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebars from './Sidebars';
import { AUTHENTICATED_ROUTES } from '../constants/pageRoutes';
import Dashboard from '../pages/dashboard/Index';
import Invoice from '../pages/invoice/Invoice';
import Settings from '../pages/settings/Index';

const Authenticated = () => {
  const { setState = {}, state = {} } = useGetState();
  return (
    <Box>
    <BrowserRouter>
   <Flex
     flexDir={["column","column","column","row"]}
     bg={"#f6f6f6"}
     width="100%"
     flex={1}>
     <Sidebars />


     <Stack
       flex={1}
      //  h={["100%", "100%", "100%","100%"]}
       w={["100%", "100%", "100%","100%"]}
     >
       <Flex
         flexDir={"column"}
         mt="10px"
         p={["20px 10px", "20px"]}
         h={"100vh"}
         width="100%">
         <Routes>
         <Route
             path={AUTHENTICATED_ROUTES.dashboard}
             element={<Dashboard/>}
           />
           <Route
             path={AUTHENTICATED_ROUTES.invoice}
             element={<Invoice/>}
           />
           <Route
             path={AUTHENTICATED_ROUTES.settings}
             element={<Settings/>}
           />

          <Route path="/*" element={<Dashboard />} />

         </Routes>
       </Flex>
     </Stack>
   </Flex>
 </BrowserRouter>
 </Box>
  )
}

export default Authenticated