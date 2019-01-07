import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
//import './App.css';

class Projects extends Component {
  // componentDidMount() {}
 deleteProject(id){
this.props.onDelete(id);
 }
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />;
      });
    }

    console.log(this.props);
    return <div className="Projects">
            <h3>Latest project </h3>
          {projectItems}
       
    </div>;
  }
}

export default Projects;