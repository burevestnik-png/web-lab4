import Dot from '../../pages/CalculationPage/components/graph/svgElements/Dot'

const isHit = (dot: Dot, r: number): boolean => {
    return isRectangle(dot, r) || isTriangle(dot, r) || isCircle(dot, r)
}

const isRectangle = (dot: Dot, r: number): boolean => {
    return (
        dot.getNormalizedX(r) >= 0 &&
        dot.getNormalizedX(r) <= r / 2 &&
        dot.getNormalizedY(r) >= 0 &&
        dot.getNormalizedY(r) <= r
    )
}

const isTriangle = (dot: Dot, r: number): boolean => {
    return (
        dot.getNormalizedX(r) >= 0 &&
        dot.getNormalizedX(r) <= r / 2 &&
        dot.getNormalizedY(r) >= 2 * dot.getNormalizedX(r) - r &&
        dot.getNormalizedY(r) <= 0
    )
}

const isCircle = (dot: Dot, r: number): boolean => {
    return (
        dot.getNormalizedX(r) <= 0 &&
        dot.getNormalizedY(r) >= 0 &&
        dot.getNormalizedX(r) * dot.getNormalizedX(r) +
            dot.getNormalizedY(r) * dot.getNormalizedY(r) <=
            (r * r) / 4
    )
}

export default isHit
