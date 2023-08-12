import React, {Children} from 'react';
import Drop from '../component/Drop';

const layout = ({children}) => {
  return (
    <div>
      <Drop />
      {children}
    </div>
  );
};

export default layout;
