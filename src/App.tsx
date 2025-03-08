import Router from "./app/routes/router";
import { Wrapper } from "./shared/utils/utils";
import { Header } from "./widgets/Header";

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
