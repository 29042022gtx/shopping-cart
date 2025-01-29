import PropTypes from 'prop-types';
import productType from './productType';

const cartType = PropTypes.shape({
  ...productType,
  quantity: PropTypes.number,
});

export default cartType;
