import styles from "./CountryList.module.css";
import Spinner from "../Spinner/Spinner";
import CountryItem from "./CountryItem";
import Message from "../Message/Message";

const CountryList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city by cicking on a city on the map" />;

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.city).includes(city.country)) return [...acc, { country: city.country, emoji: city.emoji }];
    else return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((city) => (
        <CountryItem data={city} />
      ))}
    </ul>
  );
};

export default CountryList;
