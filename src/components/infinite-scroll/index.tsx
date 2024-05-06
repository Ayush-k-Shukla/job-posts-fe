import { useEffect, useRef, useState } from 'react';
import { getJobs } from '../../datasource/remote';
import { JobCard } from '../job-card';
import styles from './index.module.scss';

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  // initial load
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getJobs({
        limit: 10,
        offset: (currentPage - 1) * 10,
      });
      setItems((prevItems) => [...prevItems, ...response]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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

  return (
    <div className={styles.infiniteScroll}>
      <div>
        <div className={styles.jobs}>
          {items?.map((job: any, index) => (
            <JobCard
              applyLink={job?.applyLink}
              company={job?.company}
              experienceRequired={job?.experienceRequired}
              id={job?.id}
              jd={job?.jd}
              jobTitle={job?.jobTitle}
              location={job?.location}
            />
          ))}
        </div>
      </div>
      {loading && <div style={{ marginTop: '5px' }}> Loading...</div>}
      <div ref={observerRef}></div>
    </div>
  );
};

export default InfiniteScrollComponent;
