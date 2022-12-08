import * as core from "../../../core";

export class CoursesDetailPage extends core.Component {
    render() {
        return `
                    <h1>Course Page</h1>
                `
    }
}

customElements.define('course-page', CoursesDetailPage)