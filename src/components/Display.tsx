import React, { useState, useEffect } from "react";
import { useFont } from "../context/font";
import classNames from "classnames";
import PlayButton from "./PlayButton";
import {
  Meaning,
  Phonetic,
  wordResType,
  Definition,
} from "../hooks/SearchWord";

export default function Display({ data }: { data: wordResType }) {
  const { font } = useFont();
  const [audio, setAudio] = useState("");

  const headingClasses = classNames(
    "text-6xl font-bold dark:text-white capitalize ",
    font === "font-serif" && "font-serif",
    font === "font-sans" && "font-sans",
    font === "font-mono" && "font-mono"
  );

  const nounClasses = classNames(
    "text-2xl font-bold  dark:text-white",
    font === "font-serif" && "font-sans",
    font === "font-sans" && "font-sans italic",
    font === "font-mono" && "font-mono"
  );

  const meaningClasses = classNames(
    "text-xl text-[#757575]",
    font === "font-serif" && "font-serif",
    font === "font-sans" && "font-sans",
    font === "font-mono" && "font-mono"
  );

  const definitionsClasses = classNames(
    "text-[#2D2D2D] marker:text-[#A445ED] dark:text-white",
    font === "font-serif" && "font-serif",
    font === "font-sans" && "font-sans",
    font === "font-mono" && "font-mono"
  );

  const synonymsClasses = classNames(
    " space-x-2 text-xl text-[#757575]",
    font === "font-serif" && "font-serif",
    font === "font-sans" && "font-sans",
    font === "font-mono" && "font-mono"
  );

  const exampleClasses = classNames(
    "text-[#757575]",
    font === "font-serif" && "font-serif",
    font === "font-sans" && "font-sans",
    font === "font-mono" && "font-mono"
  );

  const urlClasses = classNames(
    "text-[#2d2d2d] dark:text-white",
    font === "font-serif" && "font-serif",
    font === "font-sans" && "font-sans",
    font === "font-mono" && "font-mono"
  );
  useEffect(() => {
    if (data) {
      data?.phonetics.map((phonetic: Phonetic) => {
        if (phonetic.audio !== "") setAudio(phonetic.audio);
      });
    }
  }, [data]);

  return (
    <div className="space-y-5">
      <div className="flex flex-row items-center justify-between">
        <div className="space-y-5">
          <h1 className={headingClasses}>{data?.word}</h1>
          <p className=" font-sans text-2xl  text-[#A445ED] ">
            {data?.phonetic}
          </p>
        </div>
        <PlayButton audio={audio} />
      </div>

      {data?.meanings.map((meaning: Meaning, index: number) => (
        <div key={index} className="space-y-3">
          <div className=" grid grid-cols-5 grid-rows-1 items-center justify-items-stretch">
            <p className={nounClasses}>{meaning.partOfSpeech}</p>

            <hr className="col-span-4 col-start-2 border-[#e9e9e9] dark:border-[#3A3A3A]" />
          </div>

          <div>
            <h4 className={meaningClasses}>Meaning</h4>
            <ul className="list-inside list-disc p-4 ">
              {meaning.definitions.map(
                (definition: Definition, index: number) => (
                  <>
                    <li className={definitionsClasses}>
                      {definition.definition}
                    </li>
                    {definition.example && (
                      <span className={exampleClasses}>
                        "{definition.example}"
                      </span>
                    )}
                  </>
                )
              )}
            </ul>
          </div>
          {meaning.synonyms.length !== 0 && (
            <div className=" space-x-2 ">
              <h4 className={synonymsClasses}>
                Synonyms{" "}
                {meaning.synonyms.map((synonym: string, index: number) => (
                  <span className="break-all font-bold text-[#A445ED]">
                    {synonym}
                  </span>
                ))}
              </h4>
            </div>
          )}
        </div>
      ))}
      <hr className="border-[#e9e9e9] dark:border-[#3A3A3A]" />
      <div className=" inline-flex items-center space-x-5">
        <h1 className={exampleClasses}>Source</h1>
        <span className={urlClasses}>{data?.sourceUrls[0]}</span>
        <a href={data?.sourceUrls[0]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              fill="none"
              stroke="#838383"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
