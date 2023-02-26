import { Button } from "@mui/material";
import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Container } from "./styles";

export const Header = () => {
  const { authorized } = useAppSelector((state) => state.user);
  const { logout } = useActions();
  return (
    <Container>
      {authorized && (
        <Button onClick={() => logout()} variant="contained" color="error">
          Logout
        </Button>
      )}
    </Container>
  );
};
