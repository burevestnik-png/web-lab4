import styled from 'styled-components'

const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`

const OverlayLeft = styled(OverlayPanel)`
    transform: translateX(-20%);
`

const OverlayRight = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
`

export { OverlayLeft, OverlayRight }
