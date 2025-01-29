import PropTypes from 'prop-types';

const productType = PropTypes.shape({
  id: PropTypes.any,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
});

export default productType;
