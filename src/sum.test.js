import { useState } from "react";

function saveUserInput(userInput, saveFunction) {
  saveFunction(userInput);
}

function Component(onSubmit) {
  const [userInput, setUserInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={submit}>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
    </form>
  );
}

test("saveUserInput should call with userInput", () => {
  // jest mock function
  const saveFunction = jest.fn();
  saveUserInput("hello", saveFunction);
  expect(saveFunction).toHaveBeenCalledWith("hello");
});
