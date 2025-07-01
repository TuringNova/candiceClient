import { Button, Group, SimpleGrid, Stack } from "@mantine/core";
import { useState } from "react";
import TaskCard from "../components/TaskCard";

const AllTasks = () => {
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
            color={view === "grid" ? "#D6B588" : "gray"}
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
            color={view === "calendar" ? "#D6B588" : "gray"}
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
          Create New Task
        </Button>
      </Group>
      <SimpleGrid
        cols={5}
        spacing={0}
        style={{
          gap: 0,
        }}
      >
        <TaskCard bg={"#C5C5C5"} />
        <TaskCard bg={"#D6B588"} />
        <TaskCard bg={"#A955F5"} />
        <TaskCard bg={"#C5C5C5"} />
        <TaskCard bg={"#D6B588"} />
        <TaskCard bg={"#A955F5"} />
        <TaskCard bg={"#C5C5C5"} />
        <TaskCard bg={"#D6B588"} />
        <TaskCard bg={"#A955F5"} />
        <TaskCard bg={"#C5C5C5"} />
        <TaskCard bg={"#D6B588"} />
        <TaskCard bg={"#A955F5"} />
        <TaskCard bg={"#C5C5C5"} />
        <TaskCard bg={"#D6B588"} />
        <TaskCard bg={"#A955F5"} />
      </SimpleGrid>
    </Stack>
  );
};
export default AllTasks;
