import {
  ActionIcon,
  Button,
  Group,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import dayjs from "dayjs";
import useUserStore from "../../store/user";
import { useDisclosure } from "@mantine/hooks";
import { AddModal } from "../../components/modals";
import { notifications } from "@mantine/notifications";
import { useMemo } from "react";

export function FinanceListPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const { list, income, removeList, addHistory, emptyList } = useUserStore();

  const totalExpense = useMemo(() => {
    return list.reduce((accumulator, currentObject) => {
      return +accumulator + +currentObject.amt;
    }, 0);
  }, [list]);

  const handleRemove = (element: ListType) => {
    removeList(element);
    notifications.show({
      color: "green",
      message: `Removed ${element.name}!`,
    });
  };

  const handleComplete = (data: { totalExpense: number }) => {
    addHistory({
      id: Math.random(),
      date: new Date(),
      totalExpense: data.totalExpense,
      income,
      currency: "MMK",
    });
    emptyList();
    notifications.show({
      color: "green",
      message: `Action Success!`,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const rows = list.map((element) => (
    <Table.Tr key={element.id} h={60}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>
        {element.amt} {element.currency}
      </Table.Td>
      <Table.Td>
        {dayjs(element.time.toString()).format("YYYY-MM-DD HH:mm:ss")}
      </Table.Td>
      <Table.Td>
        <Group justify="flex-end">
          <Tooltip label="remove" withArrow>
            <ActionIcon
              onClick={() => handleRemove(element)}
              variant="light"
              color="red"
            >
              <IconX style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <AddModal opened={opened} close={close} />

      <Group p="sm" justify="space-between">
        <Title>Your income - {income} MMK</Title>

        <Group>
          <Button onClick={open}>Add More</Button>
          <Button
            onClick={() =>
              handleComplete({
                totalExpense: 100,
              })
            }
          >
            Complete
          </Button>
        </Group>
      </Group>

      <Table>
        <Table.Thead>
          <Table.Tr h={60}>
            <Table.Th>Name</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Time</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>

        {list.length === 0 ? (
          <Table.Tbody>
            <Table.Td colSpan={4} h={100}>
              <Text ta="center">No Data</Text>
            </Table.Td>
          </Table.Tbody>
        ) : (
          <Table.Tbody>{rows}</Table.Tbody>
        )}

        <Table.Tfoot>
          <Table.Td h={60} colSpan={4}>
            <Group w="100%" justify="space-between">
              <Text fw="bold">Total Expenses</Text>
              <Text>{totalExpense} MMK</Text>
            </Group>
          </Table.Td>
        </Table.Tfoot>
      </Table>
    </>
  );
}
