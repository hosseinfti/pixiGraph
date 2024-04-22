import { useRef, useState } from "react";
import { TNode } from "../types/node.type";
import { generateNodes } from "../utils/generateNodes";
import { renderGraphHelper } from "../utils/renderGraph";
import {useMouseDrag} from "../hooks/useMouseDrag";
import {useCanvas} from "../hooks/useCanvas";
import Actions from "./Actions";

const Canvas = () => {
    const { canvasRef } = useCanvas();
    const [zoom, setZoom] = useState<number>(1);

    const {
        handleMouseDown,
        handleMouseUp,
        handleMouseMove,
        translateX,
        translateY,
    } = useMouseDrag({ renderGraphOnMouseMove });
    const nodesRef = useRef<TNode[]>([]);

    function generate() {
        const nodes = generateNodes(500000, 1000000, 100000, 100000);
        nodesRef.current = nodes;
        renderGraph(nodes);
    }

    function zoomIn() {
        setZoom(Number((zoom + 0.1).toFixed(2)));
        renderGraph(nodesRef.current);
    }

    function zoomOut() {
        if (zoom > 1) {
            setZoom(Number((zoom - 0.1).toFixed(2)));
            renderGraph(nodesRef.current);
        }
    }

    function renderGraph(nodes: TNode[]) {
        renderGraphHelper({ nodes, translateX, translateY, zoom, canvasRef });
    }

    function renderGraphOnMouseMove() {
        renderGraph(nodesRef.current);
    }

    return (
        <div
            className="wrapper"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <canvas height={600} width={600} ref={canvasRef}></canvas>
            <Actions
                generate={generate}
                zoom={zoom}
                zoomIn={zoomIn}
                zoomOut={zoomOut}
            />
        </div>
    );
};

export default Canvas;