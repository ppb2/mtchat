import React from 'react';
import FoundContainer from '../containers/FoundContainer';
import ChatContainer  from '../containers/ChatContainer';
import ContactContainer from '../containers/ContactContainer';
import MyContainer from '../containers/MyContainer'
/**路由配置文件 */

const routes = [
    { path: '/',
      exact: true,
      main: ChatContainer
    },
    {
        path:'/contact',
        main:ContactContainer
    },
    {
        path:'/found',
        main:FoundContainer
    },
    {
        path:'/my',
        main:MyContainer
    }
   
  ]
export default routes;