import React, { FC, MutableRefObject } from 'react'
import Skeleton from './Skeleton'
import Circle from './svgElements/Circle'
import Dot from './svgElements/Dot'
import Rectangle from './svgElements/Rectangle'
import Serif from './svgElements/Serif'
import SerifText, { SerifTextType } from './svgElements/SerifText'
import Triangle from './svgElements/Triangle'

type GraphViewProps = {
    readonly r: number
    readonly dots: Dot[]
    readonly onSvgClick: (
        event: React.MouseEvent<SVGSVGElement>,
        svg: MutableRefObject<SVGSVGElement>,
    ) => void
    readonly svgRef: MutableRefObject<SVGSVGElement>
}

const GraphView: FC<GraphViewProps> = ({
    r = 50,
    onSvgClick = () => {},
    dots,
    svgRef,
}) => {
    const axisSerifs = []
    const axisSerifTexts = []

    for (let i = 1; i < 15; i++) {
        if (150 - Math.abs(r * i) <= 0) break
        axisSerifs.push(<Serif type="AxisX" x={150 + i * r} key={i} />)
        axisSerifs.push(<Serif type="AxisX" x={150 - i * r} key={i + 100} />)
        axisSerifs.push(<Serif type="AxisY" y={150 + i * r} key={i + 200} />)
        axisSerifs.push(<Serif type="AxisY" y={150 - i * r} key={i + 300} />)
    }

    for (let i = 1; i < 5; i++) {
        if (150 - r * i <= 0 || (r <= 20 && r >= -20)) break

        const commonProps = {
            fontSize: r > 0 ? 1 + (r / 10 - 5) * 0.1 : 1 - (r / 10 + 5) * 0.1,
            type: (i % 2 == 1 ? 'FLOAT' : 'INT') as SerifTextType,
            value:
                i % 2 == 1
                    ? `${i == 1 ? '' : i}R/2`
                    : `${i == 2 ? '' : i - 2}R`,
        }

        axisSerifTexts.push(
            <SerifText
                axisType={'AxisX'}
                x={150 + i * r}
                {...commonProps}
                key={i + 300}
            />,
            <SerifText
                axisType={'AxisX'}
                x={150 - i * r}
                negativePrefix
                {...commonProps}
                key={i + 400}
            />,
            <SerifText
                axisType={'AxisY'}
                y={150 - i * r}
                {...commonProps}
                key={i + 500}
            />,
            <SerifText
                axisType={'AxisY'}
                y={150 + i * r}
                negativePrefix
                {...commonProps}
                key={i + 600}
            />,
        )
    }

    dots.forEach((value) => svgRef.current?.appendChild(value.getDOM(r)))

    return (
        <svg
            height="300"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
            id="svg"
            style={{ userSelect: 'none' }}
            ref={svgRef}
            onClick={(e) => onSvgClick(e, svgRef)}>
            <Skeleton inverse={r < 0} />
            {axisSerifs}
            {axisSerifTexts}

            {r < 0 ? (
                <>
                    <SerifText type={'CUSTOM'} value={'Y'} x={160} y={295} />
                    <SerifText type={'CUSTOM'} value={'X'} x={5} y={140} />
                </>
            ) : (
                <>
                    <SerifText type={'CUSTOM'} value={'Y'} x={160} y={15} />
                    <SerifText type={'CUSTOM'} value={'X'} x={290} y={140} />
                </>
            )}

            <Triangle r={r} />
            <Rectangle r={r} />
            <Circle r={r} />
        </svg>
    )
}

export default GraphView
