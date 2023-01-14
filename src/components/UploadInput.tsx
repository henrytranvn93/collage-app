import React, { useState } from 'react';

interface UploadInputProps {
  onChange: (files: FileList | null) => void;
  className?: string;
  style?: React.CSSProperties;
}

const UploadInput: React.FC<UploadInputProps> = ({ onChange, className, style }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    onChange(e.dataTransfer.files);
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files);
  }

  return (
    <div
      className={`relative w-full h-40 my-5 px-10 text-center text-gray-500 rounded-lg border-2 border-dashed border-orange-500 ${isDragOver ? 'bg-orange-200' : 'bg-white'} ${className}`}
      style={style}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
        <p>Choose images or drag them here</p>
      </div>
      <input
        className="absolute inset-0 w-full h-full opacity-0"
        type="file"
        multiple
        onChange={handleFileSelect}
        accept="image/*"
      />
    </div>
  );
}

export default UploadInput;
