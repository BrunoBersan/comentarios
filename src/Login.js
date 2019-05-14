import React, { Component } from 'react'

class Login extends Component {

    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }

    render() {
        const errorMessage = {
            'auth/wrong-password': 'Email e/ou senha inválidos',
            'auth/user-not-found': 'Usuário não encontrado',
            'auth/invalid-email': 'Email inválido'
        }
        return (
            <div>
                <h4>Entre para Comentar:</h4>
                <form className='form-inline'>
                    <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='Email' />
                    <input type='password' className='form-control mr-1' onChange={this.handleChange('passwd')} placeholder='Password' />
                    <button type='button' className='btn btn-primary mr-1' onClick={this.login}>Entrar</button>
                    <button className='btn mr-1' onClick={() => this.props.changeScreen('signup')}>Criar Conta</button>
                </form>
                {
                    this.props.isAuthError &&
                    <div className='card text-white bg-danger mt-3'>
                        <div className='card-header'>Erro ao criar nova conta</div>
                        <div className='card-body'>
                            {errorMessage[this.props.authError]}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Login