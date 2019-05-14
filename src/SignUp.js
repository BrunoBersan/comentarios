import React, { Component } from 'react'

class SignUp extends Component {

    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd)
    }

    render() {
        const errorMessage = {
            'auth/email-already-in-use': 'Email já cadastrado',
            'auth/invalid-email': 'Email inválido',
            'auth/weak-password': 'Campo senha é obrigatório',
        }
        return (
            <div>
                <h4>Criar Conta</h4>
                <form className='form-inline'>
                    <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='Email' />
                    <input type='password' className='form-control mr-1' onChange={this.handleChange('passwd')} placeholder='Password' />
                    <button type='button' className='btn btn-primary mr-1' onClick={this.createAccount}>Criar Conta</button>
                    <button className='btn' onClick={() => this.props.changeScreen('login')}>Já Tenho uma conta, entrar</button>
                </form>
                {
                    this.props.isSignUpError &&
                    <div className='card text-white bg-danger mt-3'>
                        <div className='card-header'>Erro ao cadastrar</div>
                        <div className='card-body'>
                            {errorMessage[this.props.signUpError]}
                        </div>
                    </div>
                }
            </div>

        )
    }
}

export default SignUp