import React, { Component } from "react";
import uuid from 'uuid';

class AddProject extends Component {
  // componentDidMount() {}
  static defaultProps = {
    categories: ["Web Design", "Web Devolopement", "Mobile Devolopement"]
  };

  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }

  handleSubmit(e) {
    // console.log("Submitted");
    if (this.refs.title.value === "") {
      alert("enter title name");
    } else {
      this.setState({
        newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }
      },
      function(){
         // console.log(this.state);
      this.props.addProject(this.state.newProject);
        }
      );
    }
    e.preventDefault();
  }
  render() {
    let categoryOption = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });

    return (
      <div>
        <h3>AddProject</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <br />
            <select ref="category">{categoryOption}</select>
          </div>
          <br/>
          <input type="submit" value="Submit" />
          <br/>
        </form>
      </div>
    );
  }
}

export default AddProject;
