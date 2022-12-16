import * as core from "./core";
import './components';
import { Router } from "./core";
import { appRoutes } from "./constants/appRoutes";

export class App extends core.Component {
    constructor() {
        super();
    }

    componentDidMount() { 
   
    }

    componentWillUnMount() { }

    render() {
        return `
            <it-router>    
                <it-route path="${appRoutes.home}" component="home-page" title="Home Page"></it-route>
                <it-route path="${appRoutes.admin}" component="admin-page" title="Admin Page"></it-route>
                <it-route path="${appRoutes.signUp}" component="sign-up-page" title="SignUp Page"></it-route>
                <it-route path="${appRoutes.courses}" component="courses-page" title="All Courses Page"></it-route>
                <it-route path="${appRoutes.courseDetails}/:id" component="course-page" title="Course Page"></it-route>
                <it-route path="${appRoutes.errorPage}" component="error-page" title="Not Found Page"></it-route>
                <it-outlet></it-outlet>
            </it-router>  
            <it-footer></it-footer>
        `
     }
}

customElements.define('it-app', App)