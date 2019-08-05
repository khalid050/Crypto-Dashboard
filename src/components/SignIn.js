import React from 'react'
import FormInput from './FormInput'
import CustomButtom from './CustomButton'


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        function handleSubmit(event){
            event.preventDefault();
            this.setState({ email: '', password: '' })
        }

        function handleChange(event){
            const { value, name } = event.target
            this.setState({ [name]: value })
        }
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange} required />
                    <CustomButtom type='submit' > Sign In</CustomButtom>
                </form>
            </div>
        )
    }
}
export default SignIn