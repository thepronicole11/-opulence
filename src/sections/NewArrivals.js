import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

import img1 from '../assets/Images/NewArrivals/carmen-alarcon-xUDN8tHnUeg-unsplash.jpg'
import img2 from '../assets/Images/NewArrivals/daihana-monares-oWFPDjxuyUM-unsplash.jpg'
import img3 from '../assets/Images/NewArrivals/julia-cheperis-GFI1sRmDaCs-unsplash.jpg'
import img4 from '../assets/Images/NewArrivals/khaled-ghareeb-OI1MEinU9sQ-unsplash.jpg'
import img5 from '../assets/Images/NewArrivals/luisana-galicia-lR2a23wy3PA-unsplash.jpg'
import img6 from '../assets/Images/NewArrivals/nataliya-melnychuk-uLNTM-FiiTc-unsplash.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

position: relative;
`

const Overlay = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 30vw;
height: 84vh;

box-shadow: 0 0 0 4vw ${props => props.theme.text};
border: 3px solid ${props => props.theme.body}; 
z-index: 11;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family:  'Aboreto';
font-weight: 300;
text-shadow: 1px 1px 1px ${props => props.theme.text};
color: ${props => props.theme.body}; 
position: absolute;
top: 1rem; 
left: 5%;
z-index: 11;

`
const Text = styled.div`
width: 20%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: absolute;
padding: 5rem;
top: 0;
right: 0;
z-index: 11;
`

const Container = styled.div`
position: absolute;
top: 12%;
left: 50%;
transform: translate(-50%, 0);
width: 25vw;
height: auto;
${'' /* padding: 5rem; */}

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Item = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem 0;

img{
    width: 100%;
    height: auto;
    z-index: 5;
    margin: 2rem;
}
`

const Product = ({img, title = ''}) => {
    return(
    <Item
    >
        <img src={img} alt={title} />
        <h2>{title}</h2>
    </Item>
    )
}

export const NewArrivals = () => {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null)
    const ScrollingRef = useRef(null)
    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = ScrollingRef.current;

        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger:{
                    trigger: element,
                    start:'top top',
                    end: 'bottom+=100% top-=100%',
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                    // markers: true,
                },
                ease: 'none,'
            })
            t1.fromTo(scrollingElement,
                {
                y:'0',
                }, {
                    y: '-100%',
                scrollTrigger:{
                    trigger: scrollingElement,
                    start:'top top',
                    end: 'bottom top',
                    scroller: '.App',
                    scrub: true,
                    // markers: true,
                },
            })
            ScrollTrigger.refresh();
        }, 1000);
    
      return () => {
        t1.kill();
        ScrollTrigger.kill();
      };
    }, [])

  return (
    <Section ref={ref} id='new-arrival'>
    <Overlay/>
        <Title 
        data-scroll 
        data-scroll-speed='-2'
        data-scroll-direction='horizontal'
        >
            New Arrivals
        </Title>
        <Container ref={ScrollingRef} >
            <Product img={img1} title='Product Name'/>
            <Product img={img2} title='Product Name'/>
            <Product img={img3} title='Product Name'/>
            <Product img={img4} title='Product Name'/>
            <Product img={img5} title='Product Name'/>
            <Product img={img6} title='Product Name'/>
        </Container>
        <Text 
        data-scroll 
        data-scroll-speed='-4'
        >
            <p>
            There is new arrivals available. 
            These elegant jewelry is a great way to add to your soft girl. 
            It offers a variety of simple yet luxury styles to fit your taste.
            <br/><br/>
            Give it a try and experience a new look.
            </p>
        </Text>
    </Section>
  )
}
