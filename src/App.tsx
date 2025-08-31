import Button from "@components/common/Button";
function App() {
  return (
    <>
      <Button label="회원가입" />
      <Button active={false} label="회원가입" />
    </>
  );
}

export default App;
