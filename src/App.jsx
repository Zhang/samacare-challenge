import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'react-jss';
import Form from './Form';
import Controls from './Controls';

const styles = {
  content: {
    textAlign: 'center',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: '',
      forms: [],
      markupBoxes: [],
      saveName: '',
    };
  }

  componentDidMount() {
    // Initialize the state with an array of file names in the uploads folder
    axios.get('/forms')
      .then((res) => {
        const forms = res.data;
        this.setState({
          forms,
          currentForm: forms[0],
        });
      })
      .catch(() => {
        console.log('error retrieving uploaded forms');
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    const { clientX, clientY } = e;
    const { markupBoxes } = this.state;
    this.setState({
      markupBoxes: [
        ...markupBoxes,
        [clientX, clientY],
      ],
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      currentForm,
      markupBoxes,
      saveName,
    } = this.state;
    axios.post('/save', {
      fileName: currentForm,
      markupBoxes,
      saveName,
    })
      .then(() => { console.log('success'); })
      .catch(() => { console.log('fail'); });
    this.setState({
      markupBoxes: [],
      saveName: '',
    });
  }

  render = () => {
    const { classes } = this.props;
    const {
      currentForm,
      forms,
      markupBoxes,
      saveName,
    } = this.state;
    return (
      <div className={classes.content}>
        <Controls
          currentForm={currentForm}
          forms={forms}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          saveName={saveName}
        />
        {currentForm // conditional rendering for Form image
          && (
          <Form
            imgPath={`uploads/${currentForm}`}
            handleClick={this.handleClick}
            markupBoxes={markupBoxes}
          />
          )
        }
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(App);
