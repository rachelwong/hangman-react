import React from 'react'
import styles from './Keyboard.module.css';

const Keyboard = () => {
  const KEYS = "abcdefghijklmnopqrstuvwxyz".split("")

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem' }}>
      {KEYS.map((key) => {
        return (<button className={ `${styles.btn}`} key={key}>{ key }</button>)
      })}
    </div>
  )
}

export default Keyboard