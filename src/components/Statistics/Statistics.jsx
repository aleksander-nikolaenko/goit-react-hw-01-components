import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomColor() {
  const colors = [
    '#e74c3c',
    '#8e4adb',
    '#3498db',
    '#e67e22',
    '#2ecc71',
    '#cc2e95',
    '#a72ecc',
    '#392ecc',
    '#2e95cc',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{label} </span>
            <span className={styles.percentage}>{percentage}% </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
