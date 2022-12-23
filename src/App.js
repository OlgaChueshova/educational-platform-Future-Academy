import * as core from "./core";
import './components';
import { Router } from "./core";
import { appRoutes } from "./constants/appRoutes";
import { Preloader } from "./components";
import { authService } from "./services/Auth";

export class App extends core.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            isLogged: false,
            error: '',
        }
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !this.state.isLoading,
            }
        });
    }

    getUser() {
        this.toggleIsLoading();
        authService.init()
            .then((user) => {
                authService.user = user;
                this.setState((state) => {
                    return {
                        ...state,
                        isLogged: Boolean(user)
                    };
                });
                this.dispatch('is-logged', this.state.isLogged)
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...this.state,
                        error: error.message,
                    };
                });
            })
            .finally(() => {
                this.toggleIsLoading()
            })
    }

    onSignOut = (evt) => {
        this.toggleIsLoading();
        authService.signOut()
        .then(() => {
            this.setState((state) => {
                return {
                    ...state,
                    isLogged: false
                };
            });
            this.dispatch('is-logged', this.state.isLogged)
        })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...this.state,
                        error: error.message,
                    };
                });
            })
            .finally(() => {
                this.toggleIsLoading()
            })
    }

    onSignIn = (evt) => {
        this.setState((state)=> {
            return {
                ...state,
                isLogged: true,
            };
        });
    }

    componentDidMount() {
        this.getUser();
        window.addEventListener('sign-in', this.onSignIn)
        window.addEventListener('sign-out', this.onSignOut);
       
    }

    componentWillUnMount() {
        window.removeEventListener('sign-in', this.onSignIn)
        window.removeEventListener('sign-out', this.onSignOut);
    }

    render() {
        console.log(  this.state.isLogged)
        return this.state.isLoading
            ? `<it-preloader is-loading="${this.state.isLoading}" class="preloader"></it-preloader>`
            : `
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