import React, {PureComponent} from 'react';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

const URL_COUNTRIES = '/api/countries/';

export default class PassportUpdate extends PureComponent {
  state = {
    countries: []
  }
  componentDidMount() {
    axios.get(URL_COUNTRIES)
      .then(res => {
        let data = res.data;
        let countries = data.map(function(item, index) {
          return {value: item.id, label: item.name}
        });
        this.setState({
          countries: countries
        });
      })
  }
  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <form method="POST" id="passport_update">
        <div className="card-body">

        </div>
      </form>
    );
  }
}
