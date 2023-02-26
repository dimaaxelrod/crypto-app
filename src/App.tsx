import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { Container } from "./styles";

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
