import PropTypes from 'prop-types';
import React from 'react';
// I like this styling tool that you're using
import withStyles from 'react-jss';

const styles = {
  controls: {
    margin: '1% 0',
  },
  inline: {
    display: 'inline',
  },
};

const Controls = (props) => {
  const {
    classes,
    currentForm,
    forms,
    handleChange,
    handleSubmit,
    saveName,
  } = props;

  return (
    <div>
      <div className={classes.controls}>
      Upload a form:
        <form className={classes.inline} action="/forms" encType="multipart/form-data" method="post">
          <input type="file" name="medical-form" />
          <input type="submit" value="Upload" />
        </form>
      </div>
      <div className={classes.controls}>
      Select a form:
        <select value={currentForm} onChange={handleChange} name="currentForm">
          { /* You might want to consider using more sensible arg names in the .map iterable method. Perhaps index and formName */ }
          {forms.map((x, y) => <option key={y}>{x}</option>)}
        </select>
      </div>
      <div className={classes.controls}>
      Save markup for a form:
        <form className={classes.inline} onSubmit={handleSubmit} action="/save" method="post">
          <input type="text" onChange={handleChange} name="saveName" value={saveName} placeholder="markup name" />
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
};

// Nice, you're the only candidate (I think) who's implemented proptypes and defaults
Controls.defaultProps = {
  currentForm: '',
  forms: [],
  saveName: '',
};

Controls.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  currentForm: PropTypes.string,
  forms: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  saveName: PropTypes.string,
};

export default withStyles(styles)(Controls);
