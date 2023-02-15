import Header from "./components/Header";

import { FontContext } from "./context/font";
import { useState } from "react";

import Input from "./components/Input";

import Display from "./components/Display";
import useSearchWord, { wordResType } from "./hooks/SearchWord";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const { data, isLoading, error, refetch } = useSearchWord(searchWord);
  const [font, setFont] = useState("font-serif");
  const [name, setName] = useState("Serif");
  return (
    <FontContext.Provider
      value={{
        name,
        font,
        setFont,
        setName,
      }}
    >
      <div className="min-h-screen w-screen bg-white dark:bg-[#050505]">
        <div className="container mx-auto grid grid-cols-1 grid-rows-1 place-content-center gap-8 p-5  md:grid-cols-12 ">
          <div className="space-y-10 md:col-span-6 md:col-start-4 ">
            <Header />
            <Input refetch={refetch} setSearchWord={setSearchWord} />
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <div className="flex flex-col items-center justify-center ">
                <h1 className=" font-bold dark:text-white">
                  No Definitions Found
                </h1>
                <p className="text-[#757575]">
                  Sorry pal, we couldn't find definitions for the word you were
                  looking for. You can try the search again at later time or
                  head to the web instead.
                </p>
              </div>
            ) : (
              data?.map((word: wordResType, index: number) => (
                <Display data={word} />
              ))
            )}
          </div>
        </div>
      </div>
    </FontContext.Provider>
  );
}

export default App;
