import Filter from '../components/filters';
import InfiniteScrollComponent from '../components/infinite-scroll';
import styles from './index.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.mainWrapper}>
      {/** Filters */}
      <Filter />

      {/* Infinite scroll */}
      <InfiniteScrollComponent />
    </div>
  );
};

export default Dashboard;
