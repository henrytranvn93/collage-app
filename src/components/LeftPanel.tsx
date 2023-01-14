import React, { useState } from 'react';
import UploadInput from './UploadInput';

type Props = {}

export default function LeftPanel({}: Props) {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileSelect = (files: FileList | null) => {
    setFiles(files);
  }

  return (
    <div className="left-panel px-5">
        <div className="text-center text-lg text-orange-500 font-sans">Gallery Images:</div>
        <UploadInput onChange={handleFileSelect} className="uploadInput"/>
        <div className="gallery grid grid-cols-2 gap-2">
        {
          files && Array.from(files).map((file, i) => (
            <img 
              key={i}
              className="w-32 h-32 object-cover rounded-md border-gray-500"
              src={URL.createObjectURL(file)}
              alt={file.name}
            />
          ))
        }
        </div>
    </div>
  )
}