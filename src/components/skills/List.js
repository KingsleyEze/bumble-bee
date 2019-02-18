import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { findSkills, deleteSkill } from "../../actions/skillActions";

class List extends Component {
  componentDidMount() {
    this.props.findSkills();
  }
  onDeleteClick(skillId) {
    this.props.deleteSkill(skillId);
  }

  render() {
    const { skills } = this.props.skills;
    let skillList = <li>Loading...</li>;

    if (skills) {
      console.log(skills);
      skillList = skills.map((skill, key) => (
        <li className="skillItem" key={key}>
          <h5>{skill.name}</h5>
          <span className="timeSkill">{skill.expirience}</span>
          <div className="sticker">{key + 1}</div>
          <button
            className="buttonDeleteSkill"
            onClick={this.onDeleteClick.bind(this, skill.id)}
          >
            <i className="fas fa-times" />
          </button>
        </li>
      ));
    }
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul className="listSkills">{skillList}</ul>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  findSkills: PropTypes.func,
  deleteSkill: PropTypes.func,
  skills: PropTypes.object
};

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { findSkills, deleteSkill }
)(List);
