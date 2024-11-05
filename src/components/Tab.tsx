import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import Icon from "./Icon";

export default function MyTab({ text, src }: { text: string; src: string }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={`border px-3 flex justify-center items-center mx-1 gap-1 rounded py-1 outline-none text-ada-purple ${clsx(
            selected &&
              "bg-ada-purple !text-[#fff] border transition-all duration-500"
          )}`}
        >
          <Icon height={20} src={src} width={20} />
          {text}
        </button>
      )}
    </Tab>
  );
}
