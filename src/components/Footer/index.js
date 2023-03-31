import GithubWhite from '../../assets/images/icons/github-white.svg'
import LinkedinWhite from '../../assets/images/icons/linkedin-white.svg'
import TwitterWhite from '../../assets/images/icons/twitter-white.svg'
import LogoWhite from '../../assets/images/logo-white.svg'

const Footer = () => {
    return (<>
        {/* removed fixed */}
        <div className="bottom-0 flex flex-row justify-around w-full 
                    items-center bg-grey-blue text-white-grey h-[80px]
                    font-ps text-psS
                    ">
            <div className="flex flex-row items-center">
                <div className='mx-4 w-[61px] h-[32px]'>
                    <img src={LogoWhite}/>
                </div>
                <div className='mx-4'>
                    HOME
                </div>
                <div className='mx-4'>
                    PORTFOLIO
                </div>
                <div className='mx-4'>
                    CONTACT ME
                </div>
            </div>
            <div className="flex flex-row">
                <div>  
                    <img src={GithubWhite} className="h-[24px] w-[24px] mx-2"/>
                </div>
                <div>
                    <img src={LinkedinWhite} className="h-[24px] w-[24px] mx-2"/>
                </div>
                <div>
                    <img src={TwitterWhite} className="h-[24px] w-[24px] mx-2"/>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;