import {
  AppShell,
  Avatar,
  Burger,
  Group,
  Input,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";

function TeacherLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h={60} justify="space-between" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text
            ml="md"
            fw={"bold"}
            fz={"h3"}
            variant="gradient"
            gradient={{ from: "#A955F5", to: "#EA489B", deg: 90 }}
          >
            Teacher Portal
          </Text>
          <Input placeholder="Search Tasks" w={"501px"}></Input>
          <Group>
            <Avatar src="avatar.png" alt="it's me" />
            <Stack gap={0}>
              <Text fw={"bold"}>John Doe</Text>
              <small
                style={{
                  color: "gray",
                }}
              >
                john@gmail.com
              </small>
            </Stack>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default TeacherLayout;
