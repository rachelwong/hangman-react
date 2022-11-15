import React from 'react'
import styles from './Keyboard.module.css';

type KeyboardProps = {
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void
}
const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) => {
  const KEYS = "abcdefghijklmnopqrstuvwxyz".split("")

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem' }}>
      {KEYS.map((key) => {
        return (<button onClick={ () => addGuessedLetter(key)} className={ `${styles.btn}`} key={key}>{ key }</button>)
      })}
    </div>
  )
}

export default Keyboard