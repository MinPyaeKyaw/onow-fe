import { Group, Table, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import useUserStore from "../../store/user";

export function HistoryListPage() {
  const { history } = useUserStore();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const rows = history.map((element) => (
    <Table.Tr key={element.id} h={60}>
      <Table.Td>{dayjs(element.date.toString()).format("YYYY-MM-DD")}</Table.Td>
      <Table.Td>
        <Text c="green">
          {element.income} {element.currency}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text c="red">
          {element.totalExpense} {element.currency}
        </Text>
      </Table.Td>

      <Table.Td>
        <Text c="red">
          {element.income - element.totalExpense} {element.currency}
        </Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Group p="sm" justify="space-between">
        <Title>History</Title>
      </Group>

      <Table>
        <Table.Thead>
          <Table.Tr h={60}>
            <Table.Th>Date</Table.Th>
            <Table.Th>Income</Table.Th>
            <Table.Th>Total Expense</Table.Th>
            <Table.Th>Difference</Table.Th>
          </Table.Tr>
        </Table.Thead>

        {history.length === 0 ? (
          <Table.Tbody>
            <Table.Td colSpan={4} h={100}>
              <Text ta="center">No Data</Text>
            </Table.Td>
          </Table.Tbody>
        ) : (
          <Table.Tbody>{rows}</Table.Tbody>
        )}
      </Table>
    </>
  );
}
