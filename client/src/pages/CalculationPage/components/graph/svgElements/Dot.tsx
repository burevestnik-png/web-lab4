import React, { FC } from 'react'
import styled from 'styled-components'

type DotType = 'SUCCESS' | 'FAIL'

export default class Dot {
    private readonly rawCircle

    constructor(
        private type: DotType,
        private x: number,
        private y: number,
        private radius: number = 3,
    ) {
        this.rawCircle = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'circle',
        )
    }

    getDOM(): SVGCircleElement {
        this.rawCircle.setAttributeNS(null, 'cx', this.x.toString())
        this.rawCircle.setAttributeNS(null, 'cy', this.y.toString())
        this.rawCircle.setAttributeNS(null, 'r', this.radius.toString())
        this.rawCircle.setAttributeNS(
            null,
            'style',
            'fill: black; stroke: black;',
        )

        return this.rawCircle
    }
}
