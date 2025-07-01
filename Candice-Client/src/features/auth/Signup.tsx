import {
  Anchor,
  Button,
  Card,
  Divider,
  Group,
  Input,
  Stack,
  Text,
} from "@mantine/core";

const SignupPage = () => {
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
            fw={1000}
            variant="gradient"
            gradient={{ from: "#A955F5", to: "#EA489B", deg: 90 }}
          >
            MBMM Cafe
          </Text>

          <Text size="md" c={"#676870"}>
            Create an account to continue
          </Text>
        </Stack>

        <Group>
          <Stack gap={10}>
            <Text fz={"sm"} c={"#676870"}>
              First Name
            </Text>
            <Input placeholder="John"></Input>
          </Stack>
          <Stack gap={10}>
            <Text fz={"sm"} c={"#676870"}>
              Last Name
            </Text>
            <Input placeholder="Doe"></Input>
          </Stack>
        </Group>

        <Stack gap={10}>
          <Text fz={"sm"} c={"#676870"}>
            Email
          </Text>
          <Input placeholder="Enter Your Email" w={"400px"} h={"40px"}></Input>
        </Stack>
        <Stack gap={10}>
          <Text fz={"sm"} c={"#676870"}>
            Assigned Coach Email
          </Text>
          <Input
            placeholder="Assigned Coach Email"
            w={"400px"}
            h={"40px"}
          ></Input>
        </Stack>
        <Stack gap={10}>
          <Text fz={"sm"} c={"#676870"}>
            Passowrd
          </Text>
          <Input placeholder="Confirm Password" w={"400px"} h={"40px"}></Input>
        </Stack>
        <Stack gap={10}>
          <Text fz={"sm"} c={"#676870"}>
            Confirm Password
          </Text>
          <Input placeholder="Confirm Password" w={"400px"} h={"40px"}></Input>
        </Stack>

        <Button color="#D6B588" size="md">
          Sign Up
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

export default SignupPage;
