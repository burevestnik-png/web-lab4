import React, { FC } from 'react'
import Serif from './Serif'
import Skeleton from './Skeleton'

type GraphViewProps = {
    readonly x: number
    readonly y: number
    readonly r: number
}

const GraphView: FC<GraphViewProps> = ({ r = 50, x, y }) => {
    const axisSerifs = []

    for (let i = 1; i < 15; i++) {
        if (150 - r * i <= 0) break
        axisSerifs.push(<Serif type="AxisX" x={150 + i * r} />)
        axisSerifs.push(<Serif type="AxisX" x={150 - i * r} />)
        axisSerifs.push(<Serif type="AxisY" y={150 + i * r} />)
        axisSerifs.push(<Serif type="AxisY" y={150 - i * r} />)
    }

    return (
        <svg
            height="300"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
            id="svg"
            style={{ userSelect: 'none' }}>
            <Skeleton />
            {axisSerifs}

            <text fill="black" x="190" y="140" fontSize="1rem" string={'sdsd'}>
                R/2
            </text>
            <text fill="black" x="245" y="140">
                R
            </text>

            <text fill="black" x="40" y="140">
                -R
            </text>
            <text fill="black" x="90" y="140">
                -R/2
            </text>

            <text fill="black" x="160" y="105">
                R/2
            </text>
            <text fill="black" x="160" y="55">
                R
            </text>

            <text fill="black" x="160" y="205">
                -R/2
            </text>
            <text fill="black" x="160" y="255">
                -R
            </text>

            <text fill="black" x="160" y="10">
                Y
            </text>
            <text fill="black" x="290" y="140">
                X
            </text>

            <polygon
                id="triangle"
                fill="blue"
                fillOpacity="0.3"
                points="200,150 150,150 150,250"
                stroke="blue"
            />

            <polygon
                id="rectangle"
                fill="yellow"
                fillOpacity="0.3"
                points="150,150 200,150 200,50 150,50"
                stroke="yellow"
            />

            <path
                id="circle"
                d="M 100 150 A 50 50, 270, 0, 1, 150 100 L 150 150 Z"
                fill="green"
                fillOpacity="0.3"
                stroke="green"
            />
        </svg>
    )
}

export default GraphView
