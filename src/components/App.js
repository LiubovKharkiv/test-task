import React from 'react';
import PostList from './PostList';
import UsersList from './UsersList';

const App = () => {
  return (
    <div className="container">
      <UsersList />
      {/* <PostList /> */}
    </div>
  );
};

export default App;