import { Counter } from "./client";
import fs from "fs/promises";

// This should be in a separate file, but we "made a mistake"
export const SomeCommonHelper = () => (
  <div>I Use This In Another Place Too</div>
);

// `fs/promises` is treeshaken if we don't use it
const doSomeAsyncWork = async () => {
  const pkgInfo = await fs.readFile("package.json", "utf-8");
  return pkgInfo;
};

// A "proper server component"
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
