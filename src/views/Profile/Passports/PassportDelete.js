import React, {PureComponent} from 'react';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css';

export default class PassportDelete extends PureComponent {

  render() {
    return (
      <form method="POST" id="passport_delete">
        <div className="card-body">
        <Tag>{this.props.passport.first_name} {this.props.passport.last_name}</Tag>
        <hr />
        {this.props.passport.series} {this.props.passport.number} {this.props.passport.country}
        </div>
      </form>
    );
  }
}
