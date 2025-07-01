import {
  Card,
  CloseIcon,
  Input,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Group,
} from "@mantine/core";

const AllClients = () => {
  return (
    <Stack>
      <SimpleGrid cols={3}>
        <Card
          style={{
            border: "1px solid #C5C5C5",
          }}
        >
          <Text fz={"h1"} fw={"bold"}>
            4
          </Text>
          <Text c={"#676870"}>Total Clients</Text>
        </Card>
        <Card
          style={{
            border: "1px solid #C5C5C5",
          }}
        >
          <Text fz={"h1"} fw={"bold"}>
            80%
          </Text>
          <Text c={"#676870"}>Goal Average</Text>
        </Card>
        <Card
          style={{
            border: "1px solid #C5C5C5",
          }}
        >
          <Text fz={"h1"} fw={"bold"}>
            40
          </Text>
          <Text c={"#676870"}>Tasks Completed</Text>
        </Card>
      </SimpleGrid>
      <Input
        color="#C5C5C5"
        w={500}
        placeholder="Search Clients"
        leftSection={<CloseIcon />}
      ></Input>
      <SimpleGrid cols={1}>
        <Card
          style={{
            border: "1px solid #C5C5C5",
          }}
        >
          <Stack>
            <Group gap={30} justify="space-between">
              <Group c={"gray"}>
                <Image alt="image" w="fit-content"></Image>
                <Stack gap={0} m={0}>
                  <Text>alice.johnson@gmail.com</Text>
                  <Text>Grade 10</Text>
                </Stack>
              </Group>
              <Group c={"gray"}>
                <Text>Tasks</Text>
                <Text>Average</Text>
                <Text>Last Active</Text>
              </Group>
            </Group>
            <Stack gap={5}>
              <Group justify="space-between">
                <Text>Progress</Text>
                <Text>80%</Text>
              </Group>

              <Progress value={50} color="#A955F5"></Progress>
            </Stack>
          </Stack>
        </Card>
        <Card
          style={{
            border: "1px solid #C5C5C5",
          }}
        >
          <Stack>
            <Group gap={30} justify="space-between">
              <Group c={"gray"}>
                <Image alt="image" w="fit-content"></Image>
                <Stack gap={0} m={0}>
                  <Text>alice.johnson@gmail.com</Text>
                  <Text>Grade 10</Text>
                </Stack>
              </Group>
              <Group c={"gray"}>
                <Text>Tasks</Text>
                <Text>Average</Text>
                <Text>Last Active</Text>
              </Group>
            </Group>
            <Stack gap={5}>
              <Group justify="space-between">
                <Text>Progress</Text>
                <Text>80%</Text>
              </Group>

              <Progress value={50} color="#A955F5"></Progress>
            </Stack>
          </Stack>
        </Card>
        <Card
          style={{
            border: "1px solid #C5C5C5",
          }}
        >
          <Stack>
            <Group gap={30} justify="space-between">
              <Group c={"gray"}>
                <Image alt="image" w="fit-content"></Image>
                <Stack gap={0} m={0}>
                  <Text>alice.johnson@gmail.com</Text>
                  <Text>Grade 10</Text>
                </Stack>
              </Group>
              <Group c={"gray"}>
                <Text>Tasks</Text>
                <Text>Average</Text>
                <Text>Last Active</Text>
              </Group>
            </Group>
            <Stack gap={5}>
              <Group justify="space-between">
                <Text>Progress</Text>
                <Text>80%</Text>
              </Group>

              <Progress value={50} color="#A955F5"></Progress>
            </Stack>
          </Stack>
        </Card>
      </SimpleGrid>
    </Stack>
  );
};
export default AllClients;
