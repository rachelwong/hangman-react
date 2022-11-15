import React from 'react'
type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string
}
const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
  // const word = 'test'
  // const guessedLetters = ["t", "e", "g"]
  return (
    <div style={{ display: 'flex', gap: '.25em', fontSize: '6rem', textTransform: 'uppercase', fontWeight: "bold", fontFamily: "arial" }}>
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={ index }>
          <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}>{letter}</span></span>
      )) }
    </div>
  )
}

export default HangmanWord