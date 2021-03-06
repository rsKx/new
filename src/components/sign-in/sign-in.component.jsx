import React from 'react';

import './sign-in.styles.css';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button.component/custom-button.component';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password:''})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className='form'onSubmit={this.handleSubmit}>
                    <label className='label'>Email</label>
                    <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} required />
                    <label className='label'>Password</label>
                    <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} required />

                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;