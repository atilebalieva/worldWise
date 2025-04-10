import styles from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import CityItem from "./CityItem";
import Message from "../Message/Message";

const CityList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city by cicking on a city on the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem data={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
