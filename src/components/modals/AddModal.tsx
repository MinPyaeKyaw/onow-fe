import { Button, Modal, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import useUserStore from "../../store/user";
import { notifications } from "@mantine/notifications";

interface Props {
  opened: boolean;
  close: () => void;
}

export function AddModal({ opened, close }: Props) {
  const { addList } = useUserStore();

  const form = useForm({
    initialValues: {
      id: Math.random(),
      name: "",
      amt: 0,
      time: new Date(),
      currency: "MMK",
    },
  });

  const onSubmit = (val: Record<string, unknown>) => {
    addList(val as ListType);
    close();
    notifications.show({
      color: "green",
      message: `Successfully added!`,
    });
  };

  return (
    <Modal opened={opened} onClose={close} title="Add your expenses" centered>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="sm">
          <TextInput
            withAsterisk
            label="Name"
            placeholder="Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />

          <TextInput
            withAsterisk
            label="Amount"
            placeholder="1000 MMK"
            type="number"
            key={form.key("amt")}
            {...form.getInputProps("amt")}
          />

          <Button type="submit" fullWidth>
            Add
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}
