import React, { FC } from 'react'
import styled from 'styled-components'

type DotType = 'SUCCESS' | 'FAIL'

export default class Dot {
    private readonly rawCircle

    constructor(
        private _x: number,
        private _y: number,
        private _initialR: number,
        private _type?: DotType,
    ) {
        this.rawCircle = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'circle',
        )
    }

    getDOM(currentR: number = 50): SVGCircleElement {
        const relativeUnit = currentR / (this._initialR * 10)
        const xCoordinate = (this._x - 150) * relativeUnit + 150
        const yCoordinate = 150 - (150 - this._y) * relativeUnit
        const color = this._type === 'SUCCESS' ? 'green' : 'red'

        this.rawCircle.setAttributeNS(null, 'cx', xCoordinate.toString())
        this.rawCircle.setAttributeNS(null, 'cy', yCoordinate.toString())
        this.rawCircle.setAttributeNS(null, 'r', String((3 * currentR) / 50))
        this.rawCircle.setAttributeNS(
            null,
            'style',
            `fill: ${color}; stroke: ${color};`,
        )

        return this.rawCircle
    }

    getNormalizedX(currentR: number): number {
        return ((this._x - 150) * currentR) / (this._initialR * 20)
    }

    getNormalizedY(currentR: number): number {
        return ((150 - this._y) * currentR) / (this._initialR * 20)
    }

    set type(value: boolean) {
        this._type = value ? 'SUCCESS' : 'FAIL'
    }

    get x(): number {
        return this._x
    }

    get y(): number {
        return this._y
    }

    get initialR(): number {
        return this._initialR
    }
}
