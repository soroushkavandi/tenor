import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { getData } from '../redux/actions/cocktailAction';
import { updateField } from '../redux/actions/formAction';

const Home = ({ input, updateField, fetchData }) => (
  <div>
    <form onSubmit={fetchData}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary">Enter</Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          onChange={updateField}
          value={input}
        />
      </InputGroup>
    </form>
  </div>
);
// Home.propTypes = {
//   input : PropTypes.string.isRequired,

// }
const mapStateToProps = state => ({
  input: state.form.input,
});
const mapDispatchToProps = dispatch => ({
  updateField: e => {
    dispatch(updateField(e.target.value));
  },
  fetchData: e => {
    e.preventDefault();
    // console.log('form is submitted...');
    // console.log(
    //   `dispatch an actioncreator where is send the input ${input} and where it dispatches my data from axios`
    // );
    dispatch(getData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
