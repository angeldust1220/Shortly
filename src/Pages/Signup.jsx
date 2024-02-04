import { BiUser, BiLockAlt } from 'react-icons/bi'
import { AiFillFacebook, AiOutlineArrowLeft, AiOutlineMail } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Signup({showSignupForm, showLoginForm}){
    return(
        <dialog className="login | container" id='modal'>
            <img src={"/signup.svg"} alt="illustration" draggable="false"/>
            <div className='wrapper'>
                <h2 style={{lineHeight: '1.3'}}>Sign up</h2>
                <p>Glad to see you stay with us</p>
                <form action="" className='login__form'>
                    <div className='login__form--group'>
                        <label htmlFor="username">Username</label>
                        <BiUser className='icon'/>
                        <input type="text" id='username' name='username' required placeholder='Username'/>
                    </div>
                    <div className='login__form--group'>
                        <label htmlFor="email">Email</label>
                        <AiOutlineMail className='icon'/>
                        <input type="email" id='email' name='email' required placeholder='Email address'/>
                    </div>
                    <div className='login__form--group'>
                        <label htmlFor="pass">Passsword</label>
                        <BiLockAlt className='icon'/>
                        <input type="password" id='pass' name='pass' required placeholder='Password'/>
                    </div>

                    <button type="submit">Sign up</button>
                </form>
                <p className='or'>Or</p>
                <h3><strong>Sign up</strong> with:</h3>
                <div className="login__socials">
                    <FcGoogle className='icon'/>
                    <p>Sign up with <strong>Google</strong></p>
                </div>
                <div className="login__socials">
                    <AiFillFacebook className='icon | facebook'/>
                    <p>Sign up with <strong>Facebook</strong></p>
                </div>
                <div className='redirect'>
                    <Link to="/" onClick={()=>{
                        showSignupForm()
                        showLoginForm()
                    }} className="login__socials">
                        <p>Have an Account? <strong> Login</strong></p>
                    </Link>
                    <Link to="/" onClick={showSignupForm} className="login__socials">
                        <AiOutlineArrowLeft className='icon'/>
                        <p>Back to <strong> Homepage</strong></p>
                    </Link>
                </div>
            </div>
        </dialog>
    )
}

Signup.propTypes = {
    showSignupForm: PropTypes.func,
    showLoginForm: PropTypes.func
}
