import React from 'react';
import { Select }  from 'antd';

const Option = Select.Option;

export function options(data) {
  var options = data.map((listItem, index) =>
    <Option key={`${listItem.value}`}>{listItem.label}</Option>
  );
  return options;
}
