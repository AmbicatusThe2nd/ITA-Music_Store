/**
 * Express router paths go here.
 */

import { Immutable } from '@src/other/types';


const Paths = {
  Base: '/api',
  Auth: {
    Base: '/auth',
    Login: '/login',
    Logout: '/logout',
  },
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
  Items: {
    Base: '/items',
    Get: '/all',
    GetById: '/:id',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
  Orders: {
    Base: '/orders',
    Get: '/all',
    GetById: '/:id',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
};


// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
