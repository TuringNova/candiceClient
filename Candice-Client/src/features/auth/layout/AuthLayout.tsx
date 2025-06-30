import { Center, Image, Stack } from "@mantine/core";

import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <Center h={"100vh"} w={"100vw"}>
      <Stack>
        <Outlet />
      </Stack>
    </Center>
  );
};

export default AuthLayout;
