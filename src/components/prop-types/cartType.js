import PropTypes from 'prop-types';
import productType from './productType';

const cartType = {
  ...productType,
  quantity: PropTypes.number,
};

export default cartType;
