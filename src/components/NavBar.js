import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const NavContainer = styled(motion.div)`
width: 100vw;
z-index: 6;
position: absolute;
top: ${props => props.click ? '0':`-${props.theme.navHeight}`};

display: flex;
justify-content: center;
align-items: center;

transition: all 0.3s ease;

`

const MenuItems = styled(motion.ul)`
position: relative;
height: ${props => props.theme.navHeight};
backgorund: ${props => props.theme.body};
color: ${props => props.theme.text};
display: flex;
justify-content: space-around;
align-items: center;
list-style: none;

width: 100%;
padding: 0 10rem;
`



const MenuBttn = styled.li`
background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
list-style: style none;
color: ${props => props.theme.body};
width: 15rem;
height: 2.5rem;

clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);

display: flex;
justify-content: center;
align-items: center;

font-size: ${props => props.theme.fontmd};
font-weight: 900;
text-transform: uppercase;

cursor: pointer;
`
const MenuItem = styled(motion.li)`
text-transform: uppercase;
color: ${props => props.theme.text};
cursor: pointer;
`

export const NavBar = () => {
    const [click, setclick] = useState(false)

    const {scroll} = useLocomotiveScroll();
    const handleScroll = ( id ) => {
        let elem = document.querySelector(id);
        setclick(!click);
        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: ' 2000',
                ease: [0.25, 0.0, 0.35, 1.0]
            }
            )
    }

  return (
    <NavContainer click={click}
        initial={{
            y: '-100%'
        }}
        animate={{
            y: 0
        }}
        transition={{
            duration: 2, delay: 5
        }}
    >
        <MenuItems
        drag='y'
        dragConstraints={{
            top: 0,
            bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
        >
            <MenuBttn onClick={()=>setclick(!click)}>Menu</MenuBttn>
            <MenuItem
            onClick={() => handleScroll('#home')}
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale:0.9, Y:0}}
            >
            Home
            </MenuItem>
            <MenuItem
            onClick={() => handleScroll('.about')}
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale:0.9, Y:0}}
            >
            About
            </MenuItem>
            <MenuItem
            onClick={() => handleScroll('#shop')}
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale:0.9, Y:0}}
            >
            Shop
            </MenuItem>
            <MenuItem
            onClick={() => handleScroll('#new-arrival')}
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale:0.9, Y:0}}
            >
            New Arrivals
            </MenuItem>
        </MenuItems>
    </NavContainer>
  )
}
