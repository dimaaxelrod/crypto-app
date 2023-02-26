import { useState } from "react";
import { Container } from "./styles";
import CoinsGrid from "../coinsGrid/CoinsGrid";
import { Button, ButtonGroup } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useActions } from "../../hooks/actions";
export const Dashboard = () => {
  const [selectedRowsToAdd, setSelectedRowsToAdd] = useState<string[]>([]);
  const [selectedRowsToDelete, setSelectedRowsToDelete] = useState<string[]>(
    []
  );
  const { coins } = useAppSelector((state) => state.user);
  const { addUserCoins, removeUserCoins } = useActions();

  return (
    <Container>
      <CoinsGrid isUserCoins={false} setSelectedRows={setSelectedRowsToAdd} />
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        <Button
          onClick={() => addUserCoins(selectedRowsToAdd)}
          variant="contained"
          color="success"
        >
          Add
        </Button>
        <Button
          onClick={() => removeUserCoins(selectedRowsToDelete)}
          variant="outlined"
          color="error"
        >
          Remove
        </Button>
      </ButtonGroup>
      <CoinsGrid
        isUserCoins={true}
        userCoins={coins}
        setSelectedRows={setSelectedRowsToDelete}
      />
    </Container>
  );
};
