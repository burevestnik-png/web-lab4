import React from 'react'
import { v4 as uuid } from 'uuid'

type DotType = 'SUCCESS' | 'FAIL'

export default class Dot {
    private readonly rawCircle
    private readonly _id: string

    constructor(
        private _x: number,
        private _y: number,
        private _initialR: number,
        private _type?: DotType,
        private _executionTime?: number,
    ) {
        this.rawCircle = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'circle',
        )
        this._id = uuid()
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

    getFormViewX(): number {
        return (this._x - 150) / (this._initialR * 4)
    }

    getFormViewY(): number {
        return (150 - this._y) / (this._initialR * 4)
    }

    set type(value: boolean) {
        this._type = value ? 'SUCCESS' : 'FAIL'
    }

    get type(): boolean {
        return this._type === 'SUCCESS'
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

    public get id(): string {
        return this._id
    }

    get executionTime(): number {
        return this._executionTime
    }

    set executionTime(value: number) {
        this._executionTime = value
    }
}
