import React from 'react'
import Canvas from './Canvas'

type Props = {}

export default function RightPanel({}: Props) {
  return (
    <div className="right-panel canvas-container w-full h-full px-5">
      <Canvas/>
    </div>
  )
}