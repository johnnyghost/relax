import {
  GraphQLNonNull
} from 'graphql';

import authorize from '../../authorize';
import menuInputType from '../../types/menu-input';
import menuType from '../../types/menu';
import MenuModel from '../../../models/menu';

export default {
  type: menuType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(menuInputType)
    }
  },
  resolve (root, params) {
    authorize(root);

    return MenuModel
      .findByIdAndRemove(
        params.data._id
      )
      .exec()
      .then((removedMenu) => {
        if (!removedMenu) {
          throw new Error('Menu not found');
        }
        return removedMenu;
      });
  }
};
