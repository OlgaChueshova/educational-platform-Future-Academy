import { Component } from "../../../core";

export class CoursesPage extends Component {
    render() {
        return `
                    <h1>Courses</h1>
                `
    }
}

customElements.define('courses-page', CoursesPage)