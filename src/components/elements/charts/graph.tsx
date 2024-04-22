import React, {useEffect, useRef} from 'react';
import {Application, Assets, Sprite, Graphics} from 'pixi.js';
import {generateNodes} from "../../../utils/generateNodes";

const PixiGraph = () => {

    const pixiRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log(generatePixiGraph().then((_app) => {

            // Then adding the application's canvas to the DOM body.
            if (pixiRef?.current) {
                console.log(pixiRef?.current)
                pixiRef.current.appendChild(_app.canvas)
            }
            // document.body.appendChild(app.canvas);
            console.log(_app)
        }))
    }, [])

    function generate() {
        const nodes = generateNodes(500000, 1000000, 100000, 100000);
        // nodesRef.current = nodes;
        // renderGraph(nodes);
    }

    const generatePixiGraph = async () => {
        // Create a PixiJS application.
        const app = new Application();

        // Initialize the application.
        await app.init({background: '#1099bb', resizeTo: window});
        // const graphics = new Graphics();

        let graphics = new Graphics()
            .circle(10,10,10)
            .fill(0xff0000);

        app.stage.addChild(graphics);


        // const texture = await Assets.load('https://pixijs.com/assets/bunny.png');
        // const bunny = new Sprite(texture);
        // app.stage.addChild(bunny);
        // bunny.anchor.set(0.5)
        // bunny.x = app.screen.width / 2
        // bunny.y = app.screen.height / 2
        // app.ticker.add((time) => {
        //     bunny.rotation += 0.1 * time.deltaTime;
        // });
        return app
    }
    return (
        <div ref={pixiRef}>

        </div>
    );
};

export default PixiGraph;
