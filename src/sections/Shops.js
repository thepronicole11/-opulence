import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

import img1 from '../assets/Images/Op/photo-1578469488462-96f9af23e4b8.avif'
import img2 from '../assets/Images/Op/anastasia-anastasia-cTM8psdeOTQ-unsplash.jpg'
import img3 from '../assets/Images/Op/photo-1534447536372-79d8f8974c5c.avif'
import img4 from '../assets/Images/Op/photo-1600721391689-2564bb8055de.avif'
import img5 from '../assets/Images/Op/photo-1600721391776-b5cd0e0048f9.avif'
import img6 from '../assets/Images/Op/kateryna-hliznitsova-vbnxgxj6cJg-unsplash.jpg'
import img7 from '../assets/Images/Op/photo-1611652022419-a9419f74343d.avif'
import img8 from '../assets/Images/Op/photo-1615240516190-c7cc84fa9c56.avif'
import img9 from '../assets/Images/Op/tara-yates-ZL7JpQ3d1Yk-unsplash.jpg'
import img10 from '../assets/Images/Op/photo-1617038260897-41a1f14a8ca0.avif'
import { motion } from 'framer-motion'


const Section = styled.section`
min-height: 100vh;
height: auto:
width: 100vw;
margin: 0 auto;
overflow: hidden;

display: flex;
justify-content: flex-start;
align-items: flex-start;

position:relative;

`

const Title = styled.h1`
font-size: ${props => props.theme.fontBig};
font-family:  'Aboreto';
font-weight: 300;
text-shadow: 1px 1px 1px ${props => props.theme.body};
color: ${props => props.theme.text}; 
position: absolute;
top: 1rem; 
left: 5%;
z-index: 11;

`

const Left = styled.div`
width: 35%;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};

min-height: 100vh;
z-index: 5;

position: fixed;
left: 0;
display: flex;
justify-content: center;
align-items: center;

p{
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
}
`

const Right = styled.div`
position: absolute;
left: 35%;
padding-left: 30%;
min-height: 100vh;

background-color: ${props => props.theme.grey};
${'' /* width: 65%; */}
display: flex;
justify-content: flex-start;
align-items: center;

h1{
    width: 5rem;
    margin: 0 2rem;
}
`
const Item = styled(motion.div)`
width: 20rem;
margin-right: 6rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 100%;
    height: auto;
    cursor: pointer;
}
h1{
    display: incline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;

}
`

const Product = ({img, title = ''}) => {
    return(
    <Item
    initial={{ filter: 'grayscaler(100%)' }}
    whileInView={{ filter: 'grayscale(0%)' }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false, amount: 'all' }}
    >
        <img src={img} alt={title} />
        <h1>{title}</h1>
    </Item>
    )
}

export const Shops = () => {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null)
    const Horizontalref = useRef(null)

    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = Horizontalref.current;

        let pinWrapWidth = scrollingElement.offsetWidth;

        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger:{
                    trigger: element,
                    start:'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                    // markers: true,
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none,'
            })
            t1.to(scrollingElement, {
                scrollTrigger:{
                    trigger: scrollingElement,
                    start:'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    // pin: true,
                    // markers: true,
                },
                x: -pinWrapWidth,
                ease: 'none,'
            })
            ScrollTrigger.refresh();
        }, 1000);
    
      return () => {
        t1.kill();
        ScrollTrigger.kill();
        
      };
    }, [])

  return (
    <Section ref={ref} id='shop'>
        <Title data-scroll data-scroll-speed='-1'>
            Collection
        </Title>
        <Left>
        <p>
        The brand new collection is currently being developed in USA. 
        We create our products using best quality material, including the use of some of the pure gold and silver to make our products. 
        All products are made using the best materials, from the finest gold to the finest silver.
        <br/><br/>

        We have lots of different jewerly. 
        It is great for us to carry our new jewerly all around the country and look different.
        </p>
        </Left>
        <Right ref={Horizontalref}>
            <Product img={img1} title='test'/>
            <Product img={img2} title='test'/>
            <Product img={img3} title='test'/>
            <Product img={img4} title='test'/>
            <Product img={img5} title='test'/>
            <Product img={img6} title='test'/>
            <Product img={img7} title='test'/>
            <Product img={img8} title='test'/>
            <Product img={img9} title='test'/>
            <Product img={img10} title='test'/>
        </Right>
    </Section>
  )
}
