import css from "./statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2> 
        <ul className={css.statList}>
            {stats.map(({ id,label, percentage }) => (
                <li className={css.item} key={id} style={{background: getRandomHexColor()}}>
                 <span className="label">{label} </span>
                <span className="percentage">{percentage}%</span>
            </li>)
        )}
    </ul>
</section>
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}