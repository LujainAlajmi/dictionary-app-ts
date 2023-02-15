import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import classNames from "classnames";

export default function ThemeSwitch() {
  const [enabled, setEnabled] = useState(false);

  const switchClasses = classNames(
    "relative inline-flex h-5 w-10 items-center rounded-full",
    {
      "bg-[#A445ED]": enabled,
      "bg-[#979797]": !enabled,
    }
  );

  const roundClasses = classNames(
    "inline-block h-[14px] w-[14px] transform rounded-full bg-white transition",
    {
      "translate-x-[22px]": enabled,
      "translate-x-1": !enabled,
    }
  );

  const moonClasses = classNames({
    "#A445ED": enabled,
    "#838383": !enabled,
  });

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <div className="flex flex-row items-center space-x-5">
      <Switch checked={enabled} onChange={setEnabled} className={switchClasses}>
        <span className="sr-only">Enable notifications</span>
        <span className={roundClasses} />
      </Switch>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke={moonClasses}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
}
