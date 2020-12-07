import Dot from '../../pages/CalculationPage/components/graph/svgElements/Dot'

const isHit = (dot: Dot, r: number): boolean => {
    return isRectangle(dot, r) || isTriangle(dot, r) || isCircle(dot, r)
}

const isRectangle = (dot: Dot, r: number): boolean => {
    return dot.x >= 0 && dot.x <= r / 2 && dot.y >= 0 && dot.y <= r
}

const isTriangle = (dot: Dot, r: number): boolean => {
    return dot.x >= 0 && dot.x <= r / 2 && dot.y >= 2 * dot.x - r && dot.y <= 0
}

const isCircle = (dot: Dot, r: number): boolean => {
    return (
        dot.x <= 0 && dot.y >= 0 && dot.x * dot.x + dot.y * dot.y <= (r * r) / 4
    )
}

export default isHit
