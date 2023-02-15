import { Menu } from "@headlessui/react";
import { useState } from "react";
import { useFont } from "../context/font";
import classNames from "classnames";
export function DropDown() {
  const { name, font, setFont, setName } = useFont();

  const fontClasses = classNames(
    "flex flex-row items-center  space-x-5  text-lg  font-bold text-gray-900 dark:text-gray-100",
    {
      "font-sans": font === "font-sans",
      "font-serif": font === "font-serif",
      "font-mono": font === "font-mono",
    }
  );

  const fontOptions = [
    {
      name: "Sans Serif",
      value: "font-sans",
    },
    {
      name: "Serif",
      value: "font-serif",
    },
    {
      name: "Mono",
      value: "font-mono",
    },
  ];
  return (
    <Menu as="div">
      <Menu.Button className={fontClasses}>
        {name}
        <div className="px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
          >
            <path
              fill="none"
              stroke="#A445ED"
              stroke-width="1.5"
              d="m1 1 6 6 6-6"
            />
          </svg>
        </div>
      </Menu.Button>

      <Menu.Items className=" absolute z-40 w-40 rounded-2xl bg-white shadow-xl dark:bg-[#1F1F1F]  dark:shadow-[#A445ED] ">
        {fontOptions.map((option) => (
          <Menu.Item key={option.value}>
            {({ active }) => (
              <button
                className={classNames(
                  `block px-4 py-2 text-lg font-bold text-gray-700 ${option.value} hover:text-[#A445ED] dark:text-gray-100`
                )}
                onClick={() => {
                  setName(option.name);
                  setFont(option.value);
                }}
              >
                {option.name}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
