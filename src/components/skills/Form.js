import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSkill } from "../../actions/skillActions";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      expirience: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();

    const newSkill = {
      name: this.state.name,
      expirience: this.state.expirience
    };

    this.props.addSkill(newSkill);
    this.setState({
      name: "",
      expirience: ""
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control custom-input"
                name="name"
                placeholder="Node JS, Postgres, React, etc.,"
                required={true}
                value={this.state.name}
                minLength="4"
                maxLength="255"
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-6">
            <div className="form-group">
              <select
                className="form-control custom-select"
                name="expirience"
                required={true}
                onChange={this.onChange}
                value={this.state.expirience}
              >
                <option value="">Experience</option>
                <option value="&#60; 1 year">&#60; 1 year</option>
                <option value="1 - 3 years">1 - 3 years</option>
                <option value="3 - 5 years">3 - 5 years</option>
                <option value="5 - 7 years">5 - 7 years</option>
                <option value="7+ years">7+ years</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <button type="submit" className="btn btn-custom">
              Add Skill
            </button>
          </div>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  addSkill: PropTypes.func
};

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { addSkill }
)(Form);
