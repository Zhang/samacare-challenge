import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'react-jss';

const styles = {
  boxes: {
    backgroundColor: 'red',
    position: 'absolute',
    width: '250px',
    height: '35px',
  },
  image: {
  // Height is the larger dimension so we set it to 100% of container
    width: 'auto',
    height: '100%',
  },
  // I am setting the height of the image to 90% of the viewport for responsive resizing
  wrapper: {
    height: '90vh',
  },
};

const Form = (props) => {
  const {
    classes,
    handleClick,
    imgPath,
    markupBoxes,
  } = props;
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} onClick={handleClick} src={imgPath} alt="" />
      {markupBoxes.map((coords, i) => {
        const position = {
          top: `${coords[1]}px`,
          left: `${coords[0]}px`,
        };
        return <div className={classes.boxes} key={i} style={position} />;
      })}
    </div>
  );
};

Form.defaultProps = {
  markupBoxes: [],
};

Form.propTypes = {
  markupBoxes: PropTypes.arrayOf(PropTypes.array),
  imgPath: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Form);
