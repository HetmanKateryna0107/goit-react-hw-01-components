import css from './Statistics.module.css';
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className="title">{title}</h2> : null}

      <ul className={css.statUl}>
        {stats.map(item => (
          <li className={css.statList} key={item.id}>
            <span className="label">{item.label} </span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.PropTypes={
  stats: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired 
}