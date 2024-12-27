import React from "react";
import CardHeader from "../../appcomponents/CardHeader";
import { Box, Flex } from "@chakra-ui/react";
import DashboardCard from "./components/DashboardCard";

const Dashboard = () => {
  return (
    <Box>
      <CardHeader>
        <Flex alignItems={"center"} gap={"20px"}>

          <Box flex={1}><DashboardCard heading={"Total Invoice"} value={"10"} /></Box>
          <Box flex={1}><DashboardCard heading={"Total User"} value={"20"} /></Box>
          <Box flex={1}><DashboardCard heading={"Total Invoice Sent"} value={"7"} /></Box>
          <Box flex={1}><DashboardCard heading={"Total Revenue"} value={"50000"} /></Box>
        </Flex>
      </CardHeader>
    </Box>
  );
};

export default Dashboard;
