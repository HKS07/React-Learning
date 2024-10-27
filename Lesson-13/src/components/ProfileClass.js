import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(props.type, ' constructor');
    
  }

  async componentDidMount(){
      console.log(this.props.type,' component did mount');
    
  }

  render() {
    console.log(this.props.type, 'render');
    
    return (
      <>
        <h1>"{this.props.type}" Component</h1>
        <button onClick={() => {
            const c = this.state.count + 1;
            this.setState({count: c})

        }}>
          set count
        </button>{" "}
        <span>{this.state.count}</span>
      </>
    );
  }
}

export default Profile;
