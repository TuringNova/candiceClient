import { Card, Stack, Text } from "@mantine/core";

const LoginPage = () => {
  return (
    <Card
      style={{
        border: "1px solid",
      }}
    >
      <Stack>
        <Stack>
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "#A955F5", to: "#EA489B", deg: 90 }}
          >
            Gradient Text
          </Text>
          <Stack mt={"30px"}>
            <Text size="xl" fz={"h1"} fw={"bold"}>
              Welcome Back
            </Text>
            <Text size="lg" c={"#676870"} fz={"h1"}>
              Sign in to your account to continue
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default LoginPage;
