import React, { useRef, useEffect } from 'react';

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;

        const handleDrop = (e: React.DragEvent<HTMLCanvasElement>) => {
            e.preventDefault();
            console.log(e.dataTransfer);
            const files = e.dataTransfer.files;
            const file = files[0];
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const img = new Image();
                img.src = reader.result as string;
                img.addEventListener("load", () => {
                    const ctx = canvas.getContext("2d");
                    if (!ctx) return;
                    ctx.drawImage(img, 0, 0);
                });
            });
            console.log(files);
            if (file){
                reader.readAsDataURL(file);
            }
          
        };

        canvas.addEventListener("dragover", e => e.preventDefault());
        canvas.addEventListener("drop", e => handleDrop(e as any));

        return () => {
            canvas.removeEventListener("dragover", e => e.preventDefault());
            canvas.removeEventListener("drop", e => handleDrop(e as any));
        };
    }, [canvasRef]);

    return (
        <canvas
            ref={canvasRef}
            id="collage-canvas"
            className="border border-orange-400 bg-white rounded-lg w-full h-full"
        ></canvas>
    );
};

export default Canvas;