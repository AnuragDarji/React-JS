import React from 'react'
import { useRecoilValue } from 'recoil'
import { characterCountSelector } from './atoms'

const CharacterCounter = () => {

    const characterCount = useRecoilValue(characterCountSelector);

  return (
    <div>
        <h2>Character Counter</h2>
        <p>Character Count: {characterCount}</p>
    </div>
  )
}

export default CharacterCounter