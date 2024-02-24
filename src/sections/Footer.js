import React from 'react'
import styled from 'styled-components'

import Logo from '../assets/Svgs/star_white_48dp.svg'
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';


const Section = styled.section`
min-height: 40vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;


  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 5vw;
    height: auto;
};
h3{
    font-size: ${props => props.theme.fontlg};
    ${'' /* font-family: ''; */}
};
`;

const FooterComponent = styled(motion.div)`
width: 80vw;

ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
};

li{
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
};
`
const Bottom = styled.div`
padding : 0.5rem 0;
margin: 04 rem;
font-size: ${props => props.theme.fontlg};
display: flex;
justify-content: space-between;
align-items: center;
a{
    text-decoration: underline;

}
`

export const Footer = () => {

    const {scroll} = useLocomotiveScroll();
    const handleScroll = ( id ) => {
        let elem = document.querySelector(id);
        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: ' 2000',
                ease: [0.25, 0.0, 0.35, 1.0]
            }
            )
    }
  return (
    <Section>
        <LogoContainer 
                data-scroll
                data-scroll-speed='3'>
            <img 
                src={ Logo } 
                alt='Authentic Studio'
            />
            <h3> 
            Authentic Studio
            </h3>
        </LogoContainer>
        <FooterComponent
        initial={{ y: '-200px' }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ 
            duration: 1.5
        }}
        >
            <ul>
                <li onClick={()=> handleScroll('#home')}>Home</li>
                <li onClick={()=> handleScroll('.about')}>About</li>
                <li onClick={()=> handleScroll('#shop')}>Shops</li>
                <li onClick={()=> handleScroll('#new-arrival')}>New Arrivals</li>
                <li>
                    <a href='https://www.pinterest.com/thepronicole/' target="_blank"  rel='noreferrer'>Pintrest</a>
                </li>
            </ul>
            <Bottom>
                <span>&copy; { new Date().getFullYear() }All Rights Reserved</span>
                <span> 
                Made With &hearts; by &nbsp;
                <a href='https://www.youtube.com/codebucks' target="_blank"  rel='noreferrer'>CodeBucks</a>
                </span>
            </Bottom>
        </FooterComponent>
    </Section>
  )
}
