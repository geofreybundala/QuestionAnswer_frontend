import React, { Component } from 'react';
import '../assets/css/Style.css';
import Header  from '../components/header';
export default class login extends Component {
    render() {
        return (
            <div >
            <Header/>
    <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="for-pwd"/><label for="tab-2" class="tab">Forgot Password</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Username or Email</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign In"/>
				</div>
				<div class="hr"></div>
			</div>
			<div class="for-pwd-htm">
				<div class="group">
					<label for="user" class="label">Username or Email</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Reset Password"/>
				</div>
				<div class="hr"></div>
			</div>
		</div>
	</div>
</div>
</div>
        )
    }
}
