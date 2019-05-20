import React, {Component} from 'react';

import PersonalDetails from './Personal/PersonalDetails';
import Phones from './Phones/Phones';
import Emails from './Emails/Emails';
import Passports from './Passports/Passports';
import Organizations from './Organizations/Organizations';
import SocialDetails from './Socials/SocialDetails';
import SettingDetails from './Settings/SettingDetails';

class Profile extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <PersonalDetails />
          <Phones />
        </div>
        <div className="col-md-6">
          <Organizations />
          <SettingDetails />
        </div>
      </div>
    );
  }
}

export default Profile;
