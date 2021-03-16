import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/user/userActions'

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName:'',
            email: '',
            password: '',
            password_confirmation: '',
            signUpErrors: ""
        }

    }

    handleOnChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => {
                this.props.history.push("/dashboard")
            })
    }


    render() {
        const { userName, email, password, password_confirmation } = this.state
        return (
            <div>
                <h1>Signup Here!</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>User Name: </label>
                        <input type="text"
                            name="userName"
                            value={userName}
                            onChange={this.handleOnChange} />
                    </div>
                    <br />
                    <div>
                        <label>Email: </label>
                        <input type="text"
                            name="email"
                            value={email}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Password: </label>
                        <input type="password"
                            name="password"
                            value={password}
                            onChange={this.handleOnChange} />
                    </div>
                    <br />
                    <div>
                        <label>Password Confirmation: </label>
                        <input type="password"
                            name="password_confirmation"
                            value={password_confirmation}
                            onChange={this.handleOnChange} />
                    </div>
                    <br />
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { signup })(Signup)