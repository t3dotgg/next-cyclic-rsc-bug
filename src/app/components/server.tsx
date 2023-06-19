import { Counter } from "./client";

export const SomeCommonHelper = () => (
  <div>I Use This In Another Place Too</div>
);

const doSomeAsyncWork = async () => {
  return "content";
};

export const SomeServerComponent = async () => {
  const content = await doSomeAsyncWork();
  return (
    <div>
      <SomeCommonHelper />
      {content}
      <Counter />
    </div>
  );
};
