import React from 'react'
type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string,
  reveal?: boolean,
}
const HangmanWord = ({ reveal = false, guessedLetters, wordToGuess }: HangmanWordProps) => {

  return (
    <div style={{ display: 'flex', gap: '.25em', fontSize: '6rem', textTransform: 'uppercase', fontWeight: "bold", fontFamily: "arial" }}>
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={ index }>
          <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", color: !guessedLetters.includes(letter) && reveal ? "red": "black"}}>{letter}</span></span>
      )) }
    </div>
  )
}

export default HangmanWord