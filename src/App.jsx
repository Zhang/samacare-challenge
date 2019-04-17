import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'react-jss';

import Home from './Home';

const styles = {
  content: {
    textAlign: 'center',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Home />,
      name: 'Kyle',
    };
  }

  changeView = (page) => {
    this.setState({
      page,
    });
  }

  render = () => {
    const { classes } = this.props;
    const { page, name } = this.state;
    return (
      <div className={classes.content}>
        Hello from React,
        {name}
        {page}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(App);
