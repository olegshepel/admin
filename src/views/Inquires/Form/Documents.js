import React, { Component } from 'react';
import { Upload, message, Button, Icon } from 'antd';

class Documents extends Component {
  render() {
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      multiple: true,
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <div className="form-group col-sm-12">
        <label for="id_documents">Documents</label>
        &nbsp;
        <Upload {...props}>
          <Button type="primary" size="small">
          +
          </Button>
        </Upload>
      </div>
    );
  }
}

export default Documents;
