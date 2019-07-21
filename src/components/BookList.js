import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ background: theme.bg, color: theme.syntax }}
            >
              <ul>
                <li style={{ backgroundColor: theme.ui }}>the way of kings</li>
                <li style={{ backgroundColor: theme.ui }}>
                  the name of the wind
                </li>
                <li style={{ backgroundColor: theme.ui }}>the final empire</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
