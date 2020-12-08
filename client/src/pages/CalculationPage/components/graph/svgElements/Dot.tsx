import isHit from '@utils/services/ValidationService'
import React from 'react'
import { v4 as uuid } from 'uuid'

const RELATIVE_UNIT = 20

export default class Dot {
    private readonly rawCircle
    private readonly _id: string

    constructor(
        private _x: number,
        private _y: number,
        private _initialR: number,
        private _isHit?: boolean,
        private _executionTime?: number,
    ) {
        this.rawCircle = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'circle',
        )
        this._id = uuid()
    }

    static fromSvg(
        xPx: number,
        yPx: number,
        initialR: number,
        isHit?: boolean,
        executionTime?: number,
    ): Dot {
        return new Dot(
            (xPx - 150) / RELATIVE_UNIT,
            (150 - yPx) / RELATIVE_UNIT,
            initialR,
            isHit,
            executionTime,
        )
    }

    static fromApi(response: DotRawResponse): Dot {
        return new Dot(
            response.x,
            response.y,
            response.r,
            response.hit,
            response.executionTime,
        )
    }

    getDOM(currentRPx: number = 50): SVGCircleElement {
        const xCoordinate = 150 + this.x * RELATIVE_UNIT
        const yCoordinate = 150 - this.y * RELATIVE_UNIT

        this.isHit = isHit(this, currentRPx / 10)
        const color = this.isHit ? 'green' : 'red'

        this.rawCircle.setAttributeNS(null, 'cx', xCoordinate.toString())
        this.rawCircle.setAttributeNS(null, 'cy', yCoordinate.toString())
        this.rawCircle.setAttributeNS(null, 'r', String(3))
        this.rawCircle.setAttributeNS(
            null,
            'style',
            `fill: ${color}; stroke: ${color};`,
        )

        return this.rawCircle
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

    get isHit(): boolean {
        return this._isHit
    }

    get executionTime(): number {
        return this._executionTime
    }

    set isHit(value: boolean) {
        this._isHit = value
    }

    set executionTime(value: number) {
        this._executionTime = value
    }
}
