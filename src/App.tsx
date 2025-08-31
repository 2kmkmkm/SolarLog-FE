import Button from "@components/common/Button";
import SmallButton from "@components/signup/SmallButton";

function App() {
  return (
    <>
      <SmallButton label={"중복\n확인"} />
      <SmallButton icon="bx:calendar" />
      <Button label="회원가입" />
      <Button label="회원가입" active={false} />
      <Button label="확인" modal={true} />
    </>
  );
}

export default App;
