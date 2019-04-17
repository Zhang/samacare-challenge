import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'react-jss';

const styles = {
  row: {
    margin: '0 auto',
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

class ticTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    };
  }

  render() {
    const { classes } = this.props;
    const { board } = this.state;
    return (
      <div>
        <div className={classes.row}>
          {board[0].map(elm => <span>{elm}</span>)}
        </div>
        <div className={classes.row}>
          {board[1].map(elm => <span>{elm}</span>)}
        </div>
        <div className={classes.row}>
          {board[2].map(elm => <span>{elm}</span>)}
        </div>
      </div>
    );
  }
}

ticTacToe.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ticTacToe);
