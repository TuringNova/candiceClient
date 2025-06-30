import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Divider,
  Group,
  Input,
  Stack,
  Text,
} from "@mantine/core";

const LoginPage = () => {
  return (
    <Card
      style={{
        border: "1px solid #C5C5C5",
      }}
    >
      <Stack m={24}>
        <Stack justify="center" display={"flex"} align="center">
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "#A955F5", to: "#EA489B", deg: 90 }}
          >
            MBMM Cafe
          </Text>
        </Stack>
        <Stack mt={"30px"} justify="cemter " align="center" gap={1} mb={"8px"}>
          <Text size="xl" fz={"h1"} fw={"bold"}>
            Welcome Back
          </Text>
          <Text size="md" c={"#676870"}>
            Sign in to your account to continue
          </Text>
        </Stack>

        <Stack gap={10}>
          <Text fz={"sm"} c={"#676870"}>
            Email
          </Text>
          <Input placeholder="Emter Your Email" w={"400px"} h={"40px"}></Input>
        </Stack>
        <Stack gap={10}>
          <Text fz={"sm"} c={"#676870"}>
            Password
          </Text>
          <Input
            placeholder="Enter Your Password"
            w={"400px"}
            h={"40px"}
          ></Input>
        </Stack>
        <Group justify="space-between">
          <Checkbox label="Remember me" c={"gray"}></Checkbox>
          <Anchor c={"#D6B588"}>Forgot Password?</Anchor>
        </Group>
        <Button color="#D6B588" size="md">
          Sign In
        </Button>
        <Divider my="md" />
        <Button color="#D6B588" variant="default" c={"gray"} size="md">
          Or Continue with Google
        </Button>
        <Group justify="center">
          <Text>
            Don't have an account?
            <Anchor c="#D6B588"> Create Account</Anchor>
          </Text>
        </Group>
      </Stack>
    </Card>
  );
};

export default LoginPage;
