import { Button, RoundedButton } from "./components/Buttons";
import { Header, HeaderWrapper } from "./components/Header";
import { Wrapper } from "./utils/utils";

function App() {
  return (
    <>
      <Header>
        <Wrapper>
          <HeaderWrapper>
            <div>
              <h3>Wlakomori</h3>
            </div>
            <div>
              <h3>Wlakomori</h3>
            </div>
          </HeaderWrapper>
        </Wrapper>
      </Header>
      <Button size="small">Hello World</Button>
      <Button size="medium">Medium World</Button>
      <Button size="large">Large World</Button>
      <RoundedButton />
    </>
  );
}

export default App;
