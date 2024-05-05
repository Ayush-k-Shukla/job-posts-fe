import { Button } from '@mui/material';
import LimitedText from '../limited-text';
import styles from './index.module.scss';

interface IProps {
  company?: string;
  jobTitle?: string;
  location?: string;
  jd?: string;
  applyLink?: string;
  experienceRequired?: string;
  id?: string;
}

export const JobCard = ({
  applyLink,
  company,
  jobTitle,
  location,
  jd,
  experienceRequired,
  id,
}: IProps) => {
  const goToLink = (link?: string) => {
    if (!link) return;
    window.open(link, '_blank');
  };
  return (
    <div key={id} className={styles.cardWrapper}>
      <div className={styles.roleDetails}>
        <h3>{company}</h3>
        <h2>{jobTitle}</h2>
        <p className={styles.cardText}>{location}</p>
      </div>

      <div className={styles.jd}>
        <LimitedText text={jd ?? ''} limit={100} />
      </div>

      <div className={styles.minExp}>
        <p>Minimum Experience</p>
        <p>{experienceRequired} year</p>
      </div>
      <div className={styles.applyLink}>
        <Button
          variant='contained'
          fullWidth
          style={{ color: 'rgb(85, 239, 196)' }}
          onClick={() => {
            goToLink(applyLink);
          }}
        >
          Easy Apply
        </Button>
      </div>
    </div>
  );
};
