import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';

const Header = () => {

    const elements = useRef([])
    const location = useLocation()
    const [ activeElement, setActiveElement ] = useState('')

    useEffect(()=> {

        const currentLocation = location.pathname

        if(activeElement){
            activeElement.style.color = '#33323D'
        }

        if(currentLocation === '/'){
            setActiveElement(elements.current[0])
            elements.current[0].style.color = '#5FB4A2'
        } else if(currentLocation === '/portfolio'){
            setActiveElement(elements.current[1])
            elements.current[1].style.color = '#5FB4A2'
        } else if(currentLocation === '/contact-me'){
            setActiveElement(elements.current[2])
            elements.current[2].style.color = '#5FB4A2'
        }

    }, [activeElement])

    return (<>
        <div className='flex justify-between'>
            <div>
                <h1>
                    <img src={Logo} className="w-[61px] h-[32px]"/>
                </h1>
            </div>
            <div className='text-dark-blue font-ps text-psS flex items-center'>
                <div ref={(el)=> {
                        elements.current.push(el)
                    }} className='mx-[9px] active:text-cyan cursor-pointer'> 
                    HOME
                </div>
                <div ref={(el)=> {
                        elements.current.push(el)
                    }}  className='mx-[9px] active:text-cyan cursor-pointer'>
                    CONTACT ME
                </div>
                <div ref={(el)=> {
                        elements.current.push(el)
                    }} className='mx-[9px] active:text-cyan cursor-pointer'>
                    PORTFOLIO
                </div>
            </div>
        </div>
    </>)
}

export default Header;
