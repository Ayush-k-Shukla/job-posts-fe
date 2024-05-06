import { Filter, InfiniteScrollComponent } from '../components';
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
