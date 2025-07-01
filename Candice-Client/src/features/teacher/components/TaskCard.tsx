import { Card, Group, Stack, Text } from "@mantine/core";
type CardColor = {
  bg: string;
};

const TaskCard = (props: CardColor) => {
  return (
    <Card
      bg={props.bg}
      style={{
        border: "0.5px solid #C5C5C5",
        borderRadius: "4px",
      }}
    >
      <Stack justify="space-between" h={"273.6px"}>
        <Stack m={"20px"} gap={"5px"}>
          <Text fz={"h3"} fw={"bold"}>
            Music Practice
          </Text>
          <Text c={"#252525"}>Learn new piece of rectical</Text>
        </Stack>
        <Group justify="space-between">
          <Text>Due: 6/ 18/2025</Text>
          <Text>25%</Text>
        </Group>
      </Stack>
    </Card>
  );
};
export default TaskCard;
