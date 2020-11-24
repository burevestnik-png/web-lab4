import React from 'react'
import Skeleton from './Skeleton'

const Graph = () => {
    return (
        <>
            <svg
                height="300"
                width="300"
                xmlns="http://www.w3.org/2000/svg"
                id="svg"
                className="no-select">
                <Skeleton />
                <line stroke="black" x1="200" x2="200" y1="155" y2="145" />
                <line stroke="black" x1="250" x2="250" y1="155" y2="145" />

                <line stroke="black" x1="50" x2="50" y1="155" y2="145" />
                <line stroke="black" x1="100" x2="100" y1="155" y2="145" />

                <line stroke="black" x1="145" x2="155" y1="100" y2="100" />
                <line stroke="black" x1="145" x2="155" y1="50" y2="50" />

                <line stroke="black" x1="145" x2="155" y1="200" y2="200" />
                <line stroke="black" x1="145" x2="155" y1="250" y2="250" />

                <text fill="black" x="195" y="140">
                    R/2
                </text>
                <text fill="black" x="248" y="140">
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
        </>
    )
}

export default Graph
