import { Box, Button, Center, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import useUserStore from "../../store/user";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

export function IncomeCreatePage() {
  const navigate = useNavigate();
  const { setIncome, income } = useUserStore();

  const form = useForm({
    initialValues: {
      amt: income,
    },
  });

  const onSubmit = (val: Record<string, unknown>) => {
    setIncome(val.amt as number);
    notifications.show({
      color: "green",
      message: "Successfully created!",
    });
    navigate("/");
  };

  return (
    <Center w="100%" h="100vh">
      <Box
        w={{
          xs: "90%",
          sm: "80%",
          md: "60%",
          lg: "50%",
        }}
      >
        <form onSubmit={form.onSubmit(onSubmit)}>
          <Stack gap="sm">
            <Title>Create Income Amount</Title>

            <TextInput
              withAsterisk
              label="Amount"
              placeholder="1000 MMK"
              type="number"
              key={form.key("amt")}
              {...form.getInputProps("amt")}
            />

            <Button type="submit" fullWidth>
              Create
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
}
