import React, { Component } from 'react'
import './LoginForm.css'

class LoginForm extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="login-form-container">
                <div className="email-input-container">
                    <div className="email-label">
                        <span>Email or username</span>
                    </div>
                    <div className="email-input">
                        <input name="email" type="email" />
                    </div>
                </div>
                <div className="password-input-container">
                    <div className="password-label">
                        <span>Password</span>
                    </div>
                    <div className="password-input">
                        <input name="password" type="password" />
                    </div>
                </div>
                <div className="forgot-password">
                    <span>Forgot password?</span>
                </div>
                <div className="checkbox-container">
                    <div className="checkbox-input">
                        <input type="checkbox" />
                    </div>
                    <div className="checkbox-label">
                        Remember me
                    </div>
                </div>
                <div className="button-container">
                    <button><span>LOGIN</span></button>
                </div>
            </div>
        )
    }
}

export default LoginForm