import React from "react";

class GreetingC extends React.Component {
  constructor() {
    super();

    this.state = {
      name: this.props?.name || "Euralio",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "Alfonsina" });
    }, 3000);
  }

  render() {
    return (
      <div>
        <div className="card">
          <p>
            <span>Hola {this.state.name}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default GreetingC;
