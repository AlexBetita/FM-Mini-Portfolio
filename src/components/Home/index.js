import { useNavigate, useLocation } from 'react-router-dom'

import HomeHero from '../../assets/images/homepage/desktop/image-homepage-hero.jpg'
import HomeProfile from '../../assets/images/homepage/desktop/image-homepage-profile.jpg'

const Home = ({setCurrentLocation}) => {

    const navigate = useNavigate();
    const location = useLocation();

    console.log(setCurrentLocation)
    
    const handleNavigate = () => {
        console.log('hello')
        setCurrentLocation(location.pathname)
        navigate('/portfolio')
    }

    return (
        <>
            <div className='flex flex-col justify-center w-full'>
                <div className='relative'>
                    <img src={HomeHero} className='object-contain w-full'/>

                    <div className='font-fn font-bold text-ibm absolute'>
                        Hey, I’m Alex Spencer and I love building beautiful websites
                        <div className='absolute text-white-grey bg-dark-blue'>
                            ABOUT ME
                        </div>
                    </div>
                </div>

                <div className='flex justify-evenly'>
                    <img src={HomeProfile} className='mr-[52.5px]'/>

                    <div className='ml-[52.5px] border-y-2 border-light-grey flex flex-col justify-evenly'>
                        <div className='text-ibM font-fn font-bold'>
                            About Me
                        </div>
                        <div className='text-psS font-ps'>
                                I’m a junior front-end developer looking for a new role in an exciting company. 
                            I focus on writing accessible HTML, using modern CSS practices and writing clean 
                            JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
                            whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
                            and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
                            I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
                            you to check out my work.
                        </div>
                        <div className='border-2 border-dark-blue w-[202px] flex items-center justify-center
                            cursor-pointer
                            '
                            onClick={handleNavigate}
                        >
                            GO TO PORTFOLIO
                        </div>
                    </div>
                </div>

                <div>
                    <div>

                    </div>

                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;