import { BiUser, BiLockAlt } from 'react-icons/bi'
import { AiFillFacebook, AiOutlineArrowLeft } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Login({showLoginForm, showSignupForm}){
    return(
        <dialog className="login | container" id='modal'>
            <div className='wrapper'>
                <h2>Welcome</h2>
                <p>Glad to see you back with us</p>
                <form action="" className='login__form'>
                    <div className='login__form--group'>
                        <label htmlFor="username">Username</label>
                        <BiUser className='icon'/>
                        <input type="text" id='username' name='username' required placeholder='Username'/>
                    </div>
                    <div className='login__form--group'>
                        <label htmlFor="pass">Passsword</label>
                        <BiLockAlt className='icon'/>
                        <input type="password" id='pass' name='pass' required placeholder='Password'/>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p className='or'>Or</p>
                <h3><strong>Login</strong> with:</h3>
                <div className="login__socials">
                    <FcGoogle className='icon'/>
                    <p>Login with <strong>Google</strong></p>
                </div>
                <div className="login__socials">
                    <AiFillFacebook className='icon | facebook'/>
                    <p>Login with <strong>Facebook</strong></p>
                </div>
                <div className='redirect'>
                    <Link to="/" onClick={()=>{
                        showLoginForm()
                        showSignupForm()
                    }} className="login__socials">
                        <p>No Account? <strong>Sign up</strong></p>
                    </Link>

                    <Link to="/" onClick={showLoginForm} className="login__socials">
                        <AiOutlineArrowLeft className='icon'/>
                        <p>Back to <strong> Homepage</strong></p>
                    </Link>
                </div>
            </div>
            <img src={"/login.svg"} alt="illustration" draggable="false" />
        </dialog>
    )
}

Login.propTypes = {
    showLoginForm: PropTypes.func,
    showSignupForm: PropTypes.func
}