import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const DashboardCard = ({heading, value}) => {
  return (
    <Box bg="#fff" borderRadius={"20px"} p={"20px"}>
      <Text fontSize={"25px"} fontWeight={600} pb={"10px"}>{heading}</Text>
      <Text fontSize={"20px"} fontWeight={500}>{value}</Text>
    </Box>
  )
}

export default DashboardCard