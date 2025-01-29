import PropTypes from 'prop-types';
import styles from './trending-categories.module.css';

function TrendingCategorires({ categories = [] }) {
  return (
    <div>
      <h2>Trending categories</h2>
      <div className={styles.categoryList}>
        {categories.map((categoryItem) => {
          return (
            <a
              href=""
              key={categoryItem}
              className={styles.categoryItem}
            >
              {categoryItem}
            </a>
          );
        })}
      </div>
    </div>
  );
}

TrendingCategorires.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default TrendingCategorires;
