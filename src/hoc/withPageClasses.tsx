import React from 'react';

const withPageClasses = (Component: React.ComponentType<any>, classes?: string) => {
  return (props: any) => (
    <div className={classes || ''}>
      <Component {...props} />
    </div>
  );
};

export default withPageClasses;
