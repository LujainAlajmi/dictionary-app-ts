import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface wordResType {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

export interface Phonetic {
  audio: string;
  sourceUrl?: string;
  license?: License;
  text?: string;
}
const fetchWord = async (word: string) => {
  try {
    const { data } = await axios.get<wordResType[]>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export default function useSearchWord(word: string) {
  const { data, isLoading, error, refetch } = useQuery<wordResType[], Error>({
    queryKey: ["searchWord", word],
    queryFn: () => fetchWord(word),
  });

  return { data, isLoading, error, refetch };
}
