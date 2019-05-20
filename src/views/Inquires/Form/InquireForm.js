import React, { Component } from 'react';

import Description from './Description';
import Groups from './Groups';
import IsActive from './IsActive';
import EmailNotification from './EmailNotification';
import Documents from './Documents';
import StartDate from './StartDate';
import ExpireDate from './ExpireDate';
import Lots from './Lots/Lots';


class InquireForm extends Component {
  render() {
    return (
      <form method="POST" id="inquire_form">

        <div className="row">
          <Description />
        </div>

        <div className="row">
          <StartDate />
          <ExpireDate />
          <Groups />
          <IsActive />
          <EmailNotification />
        </div>

        <div className="row">
          <Lots />
        </div>

        <div className="row">
          <Documents />
        </div>

      </form>
    );
  }
}

export default InquireForm;
