import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AuthBackgroundContainer } from "../../appcomponents/AuthBackgroundContainer";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { _COLORS } from "../../constants/colors";
import { InputGroup } from "../../components/ui/input-group";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = async () => {
    setLoading(true);
    const payload = { ...formValues };
    await loginUser(payload, setLoading);
  };
  return (
    <AuthBackgroundContainer>
      <Flex
        fontFamily={["Poppins"]}
        color={_COLORS.text}
        flexDir={"column"}
        alignSelf="stretch"
        px={["20px", "30px", "30px", "40px", "150px"]}
        gap="40px"
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
            LOG IN
          </Text>
        </Flex>

        <Flex flexDir={"column"} fontSize=".86em" gap="10px">
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
        <Flex flexDir={"column"} fontSize=".86em" gap="10px">
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

        <Flex flexDir={"column"} gap="6px">
          <Button
            bg={_COLORS.brand}
            py="25px"
            color="#fff"
            _hover={{ background: `${_COLORS.brand}50` }}
            fontWeight="bold"
            onClick={handleLogin}
            // isLoading={loading}
          >
            Login
          </Button>
          <Flex
            justify={"space-between"}
            fontFamily={"Poppins"}
            fontWeight={700}
          >
            <Text fontSize=".86em">
              Don&apos;t have an account?{" "}
              <Link to="/register" style={{ color: `${_COLORS.brand}` }}>
                Sign Up
              </Link>
            </Text>

            <Text alignSelf={"flex-end"} fontSize=".86em">
              <Link to="/reset-password">Forgot Password?</Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </AuthBackgroundContainer>
  );
};

export default Login;
