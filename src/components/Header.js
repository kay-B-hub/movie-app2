import React from "react";

const Header = props => {
  return (
    <header className="App-header hero is-medium is-primary is-bold">
      <h1 className="title">{props.text}</h1>
    </header>
  );
};

export default Header;
