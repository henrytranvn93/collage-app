import React from 'react'

type Props = {}

export default function LeftPanel({}: Props) {
  return (
    <div className="left-panel px-1">
        <div className="text-center text-lg text-orange-500 font-sans">Gallery Images:</div>
        <input type="file" multiple/>
    </div>
  )
}