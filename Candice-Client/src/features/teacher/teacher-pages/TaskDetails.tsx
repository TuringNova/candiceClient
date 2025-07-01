import {
  Button,
  Group,
  Progress,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import TaskCard from "../components/TaskCard";
import { useState } from "react";

const TaskDetails = () => {
  const [view, setView] = useState<"grid" | "calendar">("grid");
  return (
    <Stack>
      <Group justify="end">
        <Button.Group
          style={{
            border: "1px solid #C5C5C5",
            borderRadius: "4px",
          }}
        >
          <Button
            m={"3px"}
            style={{
              border: "none",
            }}
            onClick={() => setView("grid")}
            color={view === "grid" ? "#594FC1" : "gray"}
            variant={view === "grid" ? "filled" : "default"}
          >
            Grid
          </Button>
          <Button
            m={"3px"}
            style={{
              border: "none",
            }}
            onClick={() => setView("calendar")}
            color={view === "calendar" ? "#594FC1" : "gray"}
            variant={view === "calendar" ? "filled" : "default"}
          >
            Calendar
          </Button>
        </Button.Group>
        <Button
          color={"#D6B588"}
          h={"43"}
          style={{
            border: "1px solid #C5C5C5",
            borderRadius: "4px",
          }}
        >
          Add SubTask
        </Button>
      </Group>
      <Stack gap={2} mr={10} ml={10}>
        <Group justify="space-between">
          <Text>Complete algebra Problem 1-20</Text>
          <Text>Due: 7/15/2025</Text>
        </Group>
        <Stack gap={0}>
          <Progress value={80} color={"#A955F5"}></Progress>
          <Group justify="end">
            <Text>80% complete</Text>
          </Group>
        </Stack>
      </Stack>
      <SimpleGrid
        cols={5}
        spacing={0}
        style={{
          gap: 0,
        }}
      >
        <TaskCard bg={"#C5C5C5"} />
        <TaskCard bg={"red"} />
        <TaskCard bg={"green"} />
      </SimpleGrid>
    </Stack>
  );
};

export default TaskDetails;
