import { useEffect, useState } from "react";

export default function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.substring(0, text.length + 1));

          if (text === current) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setText(current.substring(0, text.length - 1));

          if (text === "") {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 30 : 70
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}