import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { LabelComponent } from "../label/LabelComponent";
import { Container } from "./styles";

export const Login = () => {
  const { login } = useActions();
  const { error } = useAppSelector((state) => state.user);
  const [userName, setUserName] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  return (
    <Container>
      <TextField
        id="outlined-error-helper-text"
        label="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        id="outlined-error-helper-text"
        label="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      {error && <LabelComponent labelColor={"Red"} children={error} />}
      <Button
        onClick={() =>
          login({ username: userName.trim(), password: pass.trim() })
        }
      >
        Login
      </Button>
    </Container>
  );
};
