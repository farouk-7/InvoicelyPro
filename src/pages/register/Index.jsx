import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AuthBackgroundContainer } from "../../appcomponents/AuthBackgroundContainer";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { _COLORS } from "../../constants/colors";
import { InputGroup } from "../../components/ui/input-group";
import { signUp } from "./service/signUp";

const Register = () => {
  const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [show1, setShow1] = useState(false);
    const handleClick1 = () => setShow1(!show1);



    const [formValues, setFormValues] = useState({
      full_name:"",
      email: "",
      password: "",
      company_name:"",
      logo:null
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({ ...prev, [name]: value }));
    };
    // const handleRegister = async () => {
    //   setLoading(true);
    //   const payload = { ...formValues };
    //   await signUp(payload, setLoading);
    // };


    const handleRegister= async (e) => {
      e.preventDefault();
  
      const url = 'https://6a34-197-210-29-56.ngrok-free.app/api/users/signup/';
  
      // const data = {
      //   full_name: 'Bolu James',
      //   email: 'Bolu123@gmail.com',
      //   password: 'password123',
      //   company_name: 'Games James',
      //   logo: null
      // };
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        });
  
        if (response.ok) {
          const jsonResponse = await response.json();
          console.log('Signup successful', jsonResponse);
        } else {
          console.error('Signup failed', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };





  return (
    <AuthBackgroundContainer>
      <Flex
        fontFamily={["Poppins"]}
        color={_COLORS.text}
        flexDir={"column"}
        alignSelf="stretch"
        px={["20px", "30px", "30px", "40px", "150px"]}
        gap="10px"
      >
        <Flex flexDir={"column"} mb="20px" lineHeight={"20px"} fontFamily={"Ponnala"}>
          <Text fontWeight="700" fontSize="2.0em" color={_COLORS.text}>
            ERCASPAY
          </Text>
          <Text fontWeight="400" fontSize="1.2em" color={_COLORS.text} pl="50px">
            CUSTOM INVOICE
          </Text>
        </Flex>

        <Flex flexDir={"column"}>
          <Text fontWeight="700" fontSize="2.2em" color={_COLORS.text}>
            SIGN UP
          </Text>
        </Flex>

        <Flex flexDir={"column"} fontSize=".86em" gap="10px" mt="20px" mb="15px">
          <Text color={_COLORS.text} fontFamily={"Poppins"} fontWeight={700}>
            {" "}
            Enter Your FullName{" "}
          </Text>
          <Input
            border={"1px solid #FF5F15"}
            name="full_name"
            type="text"
            color={_COLORS?.black}
            value={formValues?.full_name}
            fontFamily={"Poppins"}
            fontWeight={700}
            onChange={handleChange}
          />
        </Flex>
        <Flex flexDir={"column"} fontSize=".86em" gap="10px" mb="15px">
          <Text color={_COLORS.text} fontFamily={"Poppins"} fontWeight={700}>
            {" "}
            Enter Your Email{" "}
          </Text>
          <Input
            border={"1px solid #FF5F15"}
            name="email"
            type="email"
            color={_COLORS?.black}
            value={formValues?.email}
            fontFamily={"Poppins"}
            fontWeight={700}
            onChange={handleChange}
          />
        </Flex>
        
        <Flex flexDir={"column"} fontSize=".86em" gap="10px" mb="15px">
          <Text color={_COLORS.text} fontFamily={"Poppins"} fontWeight={700}>
            {" "}
            Enter Your Password
          </Text>
          <InputGroup
            endElement={
              <Button bg={"none"} size={"40px"} onClick={handleClick}>
                {show ? (
                  <IoIosEyeOff color={_COLORS?.black} />
                ) : (
                  <IoIosEye color={_COLORS?.black} />
                )}
              </Button>
            }
          >
            <Input
              border={"1px solid #FF5F15"}
              name="password"
              type={show ? "text" : "password"}
              value={formValues?.password}
              fontFamily={"Poppins"}
              fontWeight={700}
              color={_COLORS?.black}
              onChange={handleChange}
            />
          </InputGroup>
        </Flex>
        {/* <Flex flexDir={"column"} fontSize=".86em" gap="10px" mb="15px">
          <Text color={_COLORS.text} fontFamily={"Poppins"} fontWeight={700}>
            {" "}
            Confirm Your Password
          </Text>
          <InputGroup
            endElement={
              <Button bg={"none"} size={"40px"} onClick={handleClick1}>
                {show1 ? (
                  <IoIosEyeOff color={_COLORS?.black} />
                ) : (
                  <IoIosEye color={_COLORS?.black} />
                )}
              </Button>
            }
          >
            <Input
              border={"1px solid #FF5F15"}
              name="confirmPassword"
              type={show1? "text" : "password"}
              value={formValues?.confirmPassword}
              fontFamily={"Poppins"}
              fontWeight={700}
              color={_COLORS?.black}
              onChange={handleChange}
            />
          </InputGroup>
        </Flex> */}
         <Flex flexDir={"column"} fontSize=".86em" gap="10px" mt="20px" mb="15px">
          <Text color={_COLORS.text} fontFamily={"Poppins"} fontWeight={700}>
            {" "}
            Enter Your Company Name{" "}
          </Text>
          <Input
            border={"1px solid #FF5F15"}
            name="company_name"
            type="text"
            color={_COLORS?.black}
            value={formValues?.company_name}
            fontFamily={"Poppins"}
            fontWeight={700}
            onChange={handleChange}
          />
        </Flex>



        <Flex flexDir={"column"} gap="6px" my="20px">
          <Button
            bg={_COLORS.brand}
            py="25px"
            color="#fff"
            _hover={{ background: `${_COLORS.brand}50` }}
            fontWeight="bold"
            onClick={handleRegister}
            isLoading={loading}
          >
            Sign Up
          </Button>
          <Flex
            justify={"space-between"}
            fontFamily={"Poppins"}
            fontWeight={700}
          >
            <Text fontSize=".86em">
              Already have an account?{" "}
              <Link to="/" style={{ color: `${_COLORS.brand}` }}>
                Log In
              </Link>
            </Text>

            
          </Flex>
        </Flex>
      </Flex>
    </AuthBackgroundContainer>
  )
}

export default Register