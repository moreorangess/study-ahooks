import React, { useState } from 'react';
import Mock from 'mockjs';
import { useRequest } from 'ahooks';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

const UseRequest = () => {
  const [name, setName] = useState<string>();
  const { data, error, loading } = useRequest(getUsername);

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    console.log('[  UseRequest] >');
    return <div>loading...</div>;
  }
  return (
    <div>
      <header>1.学习useRequset</header>
      Username: {data}
    </div>
  );
};

export default UseRequest;
