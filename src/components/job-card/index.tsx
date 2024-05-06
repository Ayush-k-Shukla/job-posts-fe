import { Button } from '@mui/material';
import { IJob } from '../../datasource/remote';
import LimitedText from '../limited-text';
import styles from './index.module.scss';

export const JobCard = ({
  companyName,
  jdLink,
  jdUid,
  jobDetailsFromCompany,
  jobRole,
  location,
  logoUrl,
  maxExp,
  maxJdSalary,
  minExp,
  minJdSalary,
  salaryCurrencyCode,
}: IJob) => {
  // Opens link in new window
  const goToLink = (link?: string) => {
    if (!link) return;
    window.open(link, '_blank');
  };

  // Combines salary for job
  const renderSalary = () => {
    let text = ``;

    if (minJdSalary || minJdSalary === 0) {
      text += minJdSalary;
    }

    if (maxJdSalary || maxJdSalary === 0) {
      if (text.length) {
        text += ` - `;
        text += maxJdSalary;
      } else {
        text += maxJdSalary;
      }
    }

    if (text.length) {
      text += ` LPA`;
      text = `${salaryCurrencyCode} ${text}`;
    }

    return text;
  };

  return (
    <div key={jdUid} className={styles.cardWrapper}>
      {/* Role and company Details */}
      <div className={styles.roleDetails}>
        <div className={styles.logo}>
          <img src={logoUrl} className={styles.logo} />
        </div>
        <div className={styles.textData}>
          <h3>{companyName}</h3>
          <h2>{jobRole}</h2>
          <p className={styles.cardText}>{location}</p>
        </div>
      </div>

      {/* Salary */}
      {(minJdSalary || maxJdSalary) && (
        <div className={styles.salary}>
          <p>Estimated Salary: </p>
          <p>{renderSalary()}</p>
        </div>
      )}

      {/* Job Description */}
      <div className={styles.jd}>
        <p>Description :</p>
        <LimitedText text={jobDetailsFromCompany ?? ''} limit={300} />
      </div>

      {/* Experience */}
      <div className={styles.minExp}>
        <p>Minimum Experience</p>
        <h3>{minExp} years</h3>
      </div>

      {/* Apply link */}
      <div className={styles.applyLink}>
        <Button
          variant='contained'
          fullWidth
          style={{
            backgroundColor: 'rgb(85, 239, 196)',
            textTransform: 'none',
            color: 'black',
          }}
          onClick={() => {
            goToLink(jdLink);
          }}
        >
          Easy Apply
        </Button>
      </div>
    </div>
  );
};
