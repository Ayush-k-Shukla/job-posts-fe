import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../core/hook';
import { fetchJobs } from '../../datasource/job.slice';
import { IJob } from '../../datasource/remote';
import { JobCard } from '../job-card';
import styles from './index.module.scss';

const InfiniteScrollComponent = () => {
  const dispatch = useAppDispatch();
  const { jobs: items, status } = useAppSelector((state) => state.jobUseCase);
  const [currentPage, setCurrentPage] = useState(1);
  const observerRef = useRef(null);

  const { filter } = useAppSelector((state) => state.filterUseCase);

  // initial load
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    dispatch(fetchJobs({ limit: 10, offset: (currentPage - 1) * 10 }));
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    // If element found then trigger fetch data with new pagination limit
    if (target.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // register observer for ref of element
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [observerRef]);

  const getFilteredData = () => {
    let data = items;

    // Company name
    if (filter && filter.company) {
      data = data.filter((d) =>
        d.companyName?.toLowerCase()?.includes(filter?.company?.toLowerCase())
      );
    }

    // Minimum pay
    if (filter && filter.minPay) {
      data = data.filter(
        (d) => d.minJdSalary && d.minJdSalary >= Number(filter.minPay)
      );
    }

    // Minimum exp
    if (filter && filter.minExp) {
      data = data.filter((d) => d.minExp && d.minExp >= Number(filter.minExp));
    }

    // Role
    if (filter && filter.roles && filter.roles.length > 0) {
      data = data.filter((d) => d.jobRole && filter.roles?.includes(d.jobRole));
    }

    // location
    if (filter && filter.location && filter.location.length > 0) {
      data = data.filter(
        (d) => d.location && filter.location?.includes(d.location)
      );
    }

    return data ?? [];
  };

  return (
    <div className={styles.infiniteScroll}>
      <div>
        <div className={styles.jobs}>
          {getFilteredData().length ? (
            getFilteredData()?.map((job: IJob) => <JobCard {...job} />)
          ) : (
            <div className={styles.emptyState}>
              {status === 'fullfilled' ? (
                <p>
                  No Data available for applied filters. Try changing filters.
                </p>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
      </div>

      {status === 'pending' && (
        <div style={{ marginTop: '15px', marginBottom: '10px' }}>
          Loading...
        </div>
      )}
      <div ref={observerRef}></div>
    </div>
  );
};

export default InfiniteScrollComponent;
