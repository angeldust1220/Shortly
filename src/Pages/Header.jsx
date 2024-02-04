import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'

export default function Header({showLoginForm, showSignupForm}){
    const [mobile, setMobile] = useState(false);

    const triggerMobileView = () => setMobile(!mobile)

    const handleNavChanges = useCallback(() => {
        if(mobile) document.body.classList.add('disabled');
        else document.body.classList.remove('disabled');
    }, [mobile])

    useEffect(() =>{
        handleNavChanges();
    }, [handleNavChanges])

    return(
        <header className='header | container'>
            <nav className='header__nav'>
                <Link to ="/">
                    <img src="/logo.svg" height={40} width={130} alt="Shortly logo" draggable="false"/>
                </Link>

                <div className="header__nav--tabs">
                    <ul role='list'>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>        
                    </ul>
                </div>

                <div className="header__nav--tabs | dialogs">
                    <ul role='list'>
                        <li><Link to="/" onClick={showLoginForm}>Login</Link></li>
                        <li><Link to="/" onClick={showSignupForm} className='signup'>Sign Up</Link></li>
                    </ul>                              
                </div>

                {
                    mobile ? null
                    : <button onClick={triggerMobileView} type="button" className='hamburger--icon'><img height={15} width={20} src="/icon-hamburger.svg" alt="hamburger icon" /></button>
                }
            </nav>

            <div className={mobile ? "hamburger active" : "hamburger"}>
                <button type="button" onClick={triggerMobileView} className='hamburger__icon'><img height={15} width={20} src="/icon-close-white.svg" alt="close icon" /></button>
                <div className="hamburger__tabs">
                    <ul role='list' className='hamburger__tabs--first'>
                        <li><Link to="/about" onClick={triggerMobileView}>About Us</Link></li>
                        <li><Link to="/features" onClick={triggerMobileView}>Features</Link></li>
                        <li><Link to="/pricing" onClick={triggerMobileView}>Pricing</Link></li>        
                    </ul>
                </div>

                <div className="hamburger__tabs | dialogs">
                    <ul role='list'>
                        <li><Link to="/" onClick={showLoginForm}>Login</Link></li>
                        <li><Link to="/" onClick={showSignupForm} className='signup'>Sign Up</Link></li>
                    </ul>                              
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    showLoginForm: PropTypes.func,
    showSignupForm: PropTypes.func
}