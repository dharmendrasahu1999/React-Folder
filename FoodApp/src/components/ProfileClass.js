import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Profile Class Component!!</h1>
        <h2>Name:{this.state.name}</h2>
        <h2>Count:{this.state.count}</h2>

        <button
          onClick={() => {
            //we donot mutate state directly
            this.setState({
              count: 1,
            });
          }}
        >
          Click Class counter
        </button>
      </div>
    );
  }
}

export default ProfileClass;
