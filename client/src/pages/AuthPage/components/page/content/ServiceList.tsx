import styled from 'styled-components'

const ServiceList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
`

export const ServiceItem = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 4rem;
        color: #e9eaed;
        font-weight: lighter;
        margin: 0;
    }

    h3 {
        font-size: 1.5rem;
        margin: 0.4rem 0;
    }

    p {
        font-size: 1.2rem;
    }
`

export default ServiceList
