import { JobCard } from '../components';
import styles from './index.module.scss';
const jobsData = [
  {
    company: 'ABC Corporation',
    jobTitle: 'Software Engineer',
    location: 'New York, NY',
    jd: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis ultricies magna, nec tincidunt turpis consequat ac. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. v Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo. Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '2-4 years',
    id: '1',
  },
  {
    company: 'XYZ Tech',
    jobTitle: 'Web Developer',
    location: 'San Francisco, CA',
    jd: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '3-5 years',
    id: '2',
  },
  {
    company: 'Tech Innovators',
    jobTitle: 'Data Scientist',
    location: 'Seattle, WA',
    jd: 'Fusce condimentum augue ac vestibulum suscipit. Mauris scelerisque velit at enim vehicula, sed molestie libero volutpat.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '5+ years',
    id: '3',
  },
  {
    company: 'E-Commerce Solutions',
    jobTitle: 'UI/UX Designer',
    location: 'Chicago, IL',
    jd: 'Nulla nec elit vitae felis fermentum malesuada eget ut mauris. Sed feugiat sapien vel velit varius, at tristique lorem consequat.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '3-7 years',
    id: '4',
  },
  {
    company: 'Global Enterprises',
    jobTitle: 'Product Manager',
    location: 'London, UK',
    jd: 'Curabitur in erat malesuada, blandit justo eu, consectetur nulla. Etiam sit amet eros ut justo finibus maximus nec et lorem.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '6-8 years',
    id: '5',
  },
  {
    company: 'Tech Startups Inc.',
    jobTitle: 'Backend Developer',
    location: 'Berlin, Germany',
    jd: 'Duis nec ante et lorem ultricies posuere. Ut sed lacus eget eros mattis sagittis. Sed interdum ultrices velit a fermentum.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '4-6 years',
    id: '6',
  },
  {
    company: 'Healthcare Innovations',
    jobTitle: 'Healthcare Analyst',
    location: 'Sydney, Australia',
    jd: 'Suspendisse rutrum mi vel nulla tincidunt lobortis. Integer lacinia lacus nec nibh vehicula eleifend. Vestibulum vehicula eros a ante convallis, vel condimentum sem tristique.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '2-3 years',
    id: '7',
  },
  {
    company: 'Finance Solutions Ltd.',
    jobTitle: 'Financial Advisor',
    location: 'Toronto, Canada',
    jd: 'Morbi auctor magna nec neque consequat, nec fringilla urna venenatis. Donec non magna et turpis commodo placerat.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '5-8 years',
    id: '8',
  },
  {
    company: 'Education Hub',
    jobTitle: 'Educational Consultant',
    location: 'Tokyo, Japan',
    jd: 'Fusce eu risus eget est cursus vestibulum. Nulla sit amet tellus quis elit tempus congue at vel justo.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '3-5 years',
    id: '9',
  },
  {
    company: 'Consulting Experts',
    jobTitle: 'Management Consultant',
    location: 'Paris, France',
    jd: 'Aenean vel ligula nec purus dignissim ullamcorper. Sed a sem non ipsum vehicula sollicitudin. Integer mattis felis quis urna dapibus, id accumsan metus consequat.',
    applyLink: 'https://example.com/apply',
    experienceRequired: '7-10 years',
    id: '10',
  },
];

const Dashboard = () => {
  return (
    <div className={styles.mainWrapper}>
      {/** Filters */}
      <div>Filters</div>

      {/** Cards */}
      <div className={styles.jobs}>
        {jobsData?.map((job) => (
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
  );
};

export default Dashboard;
