import React from 'react';

export default class FormSetData extends React.PureComponent {
  render() {
    return (
      <span>
      <input id="id_form-TOTAL_FORMS" name="form-TOTAL_FORMS" value={this.props.length} type="hidden" key="management-0"/>
      <input id="id_form-INITIAL_FORMS" name="form-INITIAL_FORMS" value="0" type="hidden" key="management-1"/>
      <input id="id_form-MIN_NUM_FORMS" name="form-MIN_NUM_FORMS" value="0" type="hidden" key="management-2"/>
      <input id="id_form-MAX_NUM_FORMS" name="form-MAX_NUM_FORMS" value="1000" type="hidden" key="management-3"/>
      </span>
    );
  }
}
