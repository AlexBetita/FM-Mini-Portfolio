import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';

const Header = () => {

    const navigate = useNavigate()

    const elements = useRef([])
    const location = useLocation()
    const [ activeElement, setActiveElement ] = useState('')

    const handleNavigate = (e) => {
        if(activeElement){
            activeElement.style.color = '#33323D'
        }
        if(e === 'home') {
            setActiveElement(elements.current[0])
            navigate('/')
        } else if (e === 'contact'){
            setActiveElement(elements.current[1])
            navigate('/contact-me')
        } else if (e === 'portfolio'){
            setActiveElement(elements.current[2])
            navigate('/portfolio')
        }
    }

    useEffect(()=> {

        const currentLocation = location.pathname

        if(!activeElement){
            setActiveElement(elements.current[0])
        }

        if(currentLocation === '/'){
            elements.current[0].style.color = '#5FB4A2'
        } else if(currentLocation === '/portfolio'){
            elements.current[2].style.color = '#5FB4A2'
        } else if(currentLocation === '/contact-me'){ 
            elements.current[1].style.color = '#5FB4A2'
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
                    }} className='mx-[9px] active:text-cyan cursor-pointer' onClick={e=> handleNavigate('home')}> 
                    HOME
                </div>
                <div ref={(el)=> {
                        elements.current.push(el)
                    }}  className='mx-[9px] active:text-cyan cursor-pointer' onClick={e=> handleNavigate('contact')}>
                    CONTACT ME
                </div>
                <div ref={(el)=> {
                        elements.current.push(el)
                    }} className='mx-[9px] active:text-cyan cursor-pointer' onClick={e=> handleNavigate('portfolio')}>
                    PORTFOLIO
                </div>
            </div>
        </div>
    </>)
}

export default Header;
