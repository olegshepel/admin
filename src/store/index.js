import constants from './constants';
import helpers from './helpers';
import selectors from './selectors';
import actions from './actions';
import names from './names';
import creators from './creators';
import effects from './effects';
import saga from './saga';
import components from './components';

export default {
  constants,
  helpers,
  selectors,
  actions: {
    names: names,
    creators: creators
  },
  effects,
  reducers,
  saga,
  components
};
