import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
min-height: 100vh;
width: 80vw;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

postion: relative;
`

const Container = styled.div`
min-height: 100vh;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

const BannerComponent = styled.h1`
font-size:${props => props.theme.fontxxxl};
font-family: 'Aboreto';
color: ${props => props.theme.text};
white-space: nowrap;
${'' /* text-transform: uppercase; */}
${'' /* line-height: 3; */}

span{
    display: block;
    background-color: ${props => props.theme.body};
    padding: 1rem 2rem;
    ${'' /* width: 20rem; */}
}
`

export const Banner = () => {
  return (
    <Section>
        <Container id='up'>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal'
                data-scroll-speed='8'
                data-scroll-target='#up'
                >Undisputed origin</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal'
                data-scroll-speed='0'
                data-scroll-target='#up'
                >~Au·then·tic~</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal'
                data-scroll-speed='-4'
                data-scroll-target='#up'
                >Genuine</span>
            </BannerComponent>
        </Container>
    </Section>
  )
}
