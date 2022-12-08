import * as core from "./core";
import './components';
import { Router } from "./core";

export class App extends core.Component {
    constructor() {
        super();
    }

    componentDidMount() { 
   
    }

    componentWillUnMount() { }

    render() {
        return `
            <it-header></it-header>
                <main>
                    <it-router>    
                        <it-route path="/" component="home-page" title="Home Page"></it-route>
                        <it-route path="/admin" component="admin-page" title="Admin Page"></it-route>
                        <it-route path="/signUp" component="sign-up-page" title="SignUp Page"></it-route>
                        <it-route path="/courses" component="courses-page" title="All Courses Page"></it-route>
                        <it-route path="/courses/:id" component="course-page" title="Course Page"></it-route>
                        <it-route path="*" component="error-page" title="Not Found Page"></it-route>
                        <it-outlet></it-outlet>
                    </it-router>
                </main>
            <it-footer></it-footer>
        `
     }
}

customElements.define('it-app', App)