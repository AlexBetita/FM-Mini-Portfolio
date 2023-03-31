import Logo from '../../assets/images/logo.svg';


const Header = () => {
    return (<>
        <div className='flex justify-between'>
            <div>
                <img src={Logo} className="w-[61px] h-[32px]"/>
            </div>
            <div className='text-dark-blue font-ps text-psS flex items-center'>
                <div>
                    <h1>
                        HOME
                    </h1>  
                </div>
                <div>
                    CONTACT ME
                </div>
                <div>
                    PORTFOLIO
                </div>
            </div>
        </div>
    </>)
}

export default Header;
