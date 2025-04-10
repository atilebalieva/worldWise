import styles from "./CountryItem.module.css";

function CountryItem({ data }) {
  const { emoji, cityName } = data;

  return (
    <li className={styles.data}>
      <span>{data.emoji}</span>
      <span>{data.country}</span>
    </li>
  );
}

export default CountryItem;
