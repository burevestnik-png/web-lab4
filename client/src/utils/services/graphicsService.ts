import React, { MutableRefObject } from 'react'

export const getClickPoint = (
    event: React.MouseEvent<SVGSVGElement>,
    svg: MutableRefObject<SVGSVGElement>,
): DOMPoint => {
    const domPoint = svg.current.createSVGPoint()
    domPoint.x = event.clientX
    domPoint.y = event.clientY

    return domPoint.matrixTransform(svg.current.getScreenCTM().inverse())
}
