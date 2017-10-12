import React from 'react';
import HomeLayout from '../layouts/HomeLayout'
import UserEditor from '../components/UserEditor';

class UserAdd extends React.Component {
  render () {
    const {form: {name, age, gender}, onFormChange} = this.props;
    return (
      <HomeLayout title="添加用户">
        <UserEditor/>
      </HomeLayout>
    );
  }
}

export default UserAdd;