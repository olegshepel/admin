import React, { Component } from 'react';

class ProductProperties extends Component {
  onChange = () => {
    this.props.onChange()
  }
  handleClick = () => {
    this.props.handleClick()
  }
  render() {
    return (
      <div className="row">
						<div className="form-group col-sm-2">
							<label for="weight">
              <i className="fa fa-arrow-down"></i>&nbsp;
              Weight (kg)
              </label>
							<div className="input-group">
                <input
                id="id_weight"
                name="weight"
                value={this.props.weight}
                onChange={this.onChange}
                className="form-control"
                type="text" />
							</div>
						</div>
						<div className="form-group col-sm-2">
              <i className="fa fa-cube"></i>&nbsp;
							<label for="volume">Volume (m3)</label>
							<div className="input-group">
                <input
                id="id_volume"
                name="volume"
                value={this.props.volume}
                onChange={this.onChange}
                className="form-control"
                type="text" />
							</div>
						</div>
						<div className="form-group col-sm-2">
            <i className="fa fa-arrows-h"></i>&nbsp;
							<label for="length">Length (mm)</label>
							<div className="input-group">
                <input
                id="id_length"
                name="length"
                value={this.props.length}
                onChange={this.onChange}
                className="form-control"
                type="text" />
							</div>
						</div>
						<div className="form-group col-sm-2">
              <i className="fa fa-expand"></i>&nbsp;
							<label for="width">Width (mm)</label>
							<div className="input-group">
                <input
                id="id_width"
                name="width"
                value={this.props.width}
                onChange={this.onChange}
                className="form-control"
                type="text" />
							</div>
						</div>
						<div className="form-group col-sm-2">
              <i className="fa fa-arrows-v"></i>&nbsp;
							<label for="height">
              Height (mm)
              </label>
							<div className="input-group">
                <input
                id="id_height"
                name="height"
                value={this.props.height}
                onChange={this.onChange}
                className="form-control"
                type="text" />
						    </div>
				    </div>

            <div className="form-group col-sm-2">
              <label for="id_is_active"><span>Active</span></label>
              <div className="input-group">
              <input
              id="id_is_active"
              name="is_active"
              type="checkbox"
              value={this.props.isActive}
              checked={this.props.isActive}
              onClick={this.handleClick}/>
              </div>
            </div>
			</div>
    );
  }
}

export default ProductProperties;


<ProductProperties
weight={this.state.weight}
volume={this.state.volume}
length={this.state.length}
width={this.state.width}
heighth={this.state.height}
isActive={this.state.isActive}
onChange={this.onChange.bind(this)}
handleClick={this.handleClick.bind(this)} />
