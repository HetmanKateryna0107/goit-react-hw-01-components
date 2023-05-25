import css from './Statistics.module.css'

export const Statistics=({title, stats})=>{
    return(
<section className={css.statistics}>
  <h2 className="title">{title}</h2>

  <ul className={css.statUl}>
    {stats.map((item) => (
    <li className={css.statList} key={item.id}>
      <span className="label">{item.label} </span>
      <span className="percentage">{item.percentage}%</span>
    </li>
    ))}
  </ul>
</section>
   
       
     )
}