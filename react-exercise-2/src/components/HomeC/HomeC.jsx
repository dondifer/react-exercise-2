import React from "react";

class HomeC extends React.Component {
  constructor() {
    super();

    this.state = {
      dishes: this.props?.dishesList || [],
    };
  }

  render() {
    return (
      <div>
        <div className="profile">
          <h1 className="menu__title">My Menu</h1>
          <ul>
            {this.props.dishesList.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
                <p>Price: {item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeC;
