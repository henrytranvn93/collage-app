import React from 'react'

type Props = {}

export default function RightPanel({}: Props) {
  return (
    <div className="right-panel canvas-container w-full h-full px-10">
        <canvas id="collage-canvas" className="border border-orange-400 bg-white rounded-lg w-full h-full"></canvas>
    </div>
  )
}