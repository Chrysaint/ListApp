import Router from "./app/routes/router";
import { Wrapper } from "./shared/ui/Wrapper";
import { Header } from "./widgets/header";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Router />
      </Wrapper>
    </>
  );
}

export default App;
