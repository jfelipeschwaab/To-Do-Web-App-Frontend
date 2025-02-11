"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];  // Agora aceita um array de frases
  delay: number;    // Tempo entre cada caractere
  pauseBetweenTexts?: number; // Tempo entre frases (opcional)
}

export default function Typewriter({ texts, delay, pauseBetweenTexts = 1000 }: TypewriterProps) {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (currentIndex < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + texts[textIndex][currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        // Quando a frase terminar, adicionamos ao array de frases exibidas e começamos a próxima
        const pauseTimeout = setTimeout(() => {
          setDisplayedTexts((prev) => [...prev, currentText]); // Mantém as frases anteriores
          setCurrentText("");  // Reseta a frase atual
          setCurrentIndex(0);
          setTextIndex((prevTextIndex) => prevTextIndex + 1);
        }, pauseBetweenTexts);

        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [currentIndex, textIndex, delay, texts, pauseBetweenTexts, currentText]);

  return (
    <div className="flex flex-col">
      {displayedTexts.map((text, index) => (
        <p key={index} className="text-2xl text-[#E1E7EF] font-serif font-extralight">
          {text}
        </p>
      ))}
      {textIndex < texts.length && (
        <p className="text-2xl text-[#E1E7EF] font-serif font-extralight">
          {currentText}
          <span className="cursor">|</span>
        </p>
      )}
    </div>
  );
}
