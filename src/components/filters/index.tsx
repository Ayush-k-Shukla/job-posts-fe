import { TextField } from '@mui/material';
import { useState } from 'react';
import CustomSearchableDropdown, {
  CustomSearchableDropdownOptionType,
} from '../autocomplete';
import styles from './index.module.scss';

const techStackOptions: CustomSearchableDropdownOptionType[] = [
  { value: 'react', label: 'React' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'expressjs', label: 'Express.js' },
  { value: 'mongodb', label: 'MongoDB' },
];

const experienceOptions: CustomSearchableDropdownOptionType[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
];

const basePayOptions: CustomSearchableDropdownOptionType[] = [
  { value: '0', label: '0L' },
  { value: '10', label: '10L' },
  { value: '20', label: '20L' },
  { value: '30', label: '30L' },
  { value: '40', label: '40L' },
  { value: '50', label: '50L' },
  { value: '60', label: '60L' },
  { value: '70', label: '70L' },
];

const typeOptions: CustomSearchableDropdownOptionType[] = [
  { value: 'Remote', label: 'Remote' },
  { value: 'InOffice', label: 'In-Office' },
  { value: 'Hybrid', label: 'Hybrid' },
];

interface IFilter {
  techStack?: string[];
  minExp?: string;
  numOfEmp?: string[];
  company?: string;
  location?: string[];
  minPay?: string;
  roles?: string[];
}

const numberOfEmployeesOptions: CustomSearchableDropdownOptionType[] = [
  { value: '1-10', label: '1-10' },
  { value: '11-20', label: '11-20' },
  { value: '21-50', label: '21-50' },
  { value: '51-100', label: '51-100' },
  { value: '101-200', label: '101-200' },
  { value: '201-500', label: '201-500' },
  { value: '500+', label: '500+' },
];

const initialFilterState: IFilter = {
  techStack: [],
  minExp: '',
  numOfEmp: [],
  company: '',
  location: [],
  minPay: '',
  roles: [],
};

const Filter = () => {
  const [filters, setFilters] = useState<IFilter>(initialFilterState);

  console.log(filters);

  const handleKeyPress = () => {};

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            setFilters({
              ...filters,
              numOfEmp: [...e.value],
            });
          }}
          multi
          options={numberOfEmployeesOptions}
          name='Role'
          placeholder='Role'
          selectedOptions={filters?.numOfEmp}
        />
      </div>

      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            setFilters({
              ...filters,
              numOfEmp: [...e.value],
            });
          }}
          multi
          options={numberOfEmployeesOptions}
          name='No Of Employees'
          placeholder='No Of Employees'
          selectedOptions={filters?.numOfEmp}
        />
      </div>

      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            setFilters({
              ...filters,
              minExp: e.value as string,
            });
          }}
          options={experienceOptions}
          name='Experience'
          placeholder='Experience'
          selectedOption={filters?.minExp}
        />
      </div>

      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            setFilters({
              ...filters,
              location: [...e.value],
            });
          }}
          multi
          options={typeOptions}
          name='Remote'
          placeholder='Remote'
          selectedOptions={filters?.location}
        />
      </div>

      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            setFilters({
              ...filters,
              minPay: e.value as string,
            });
          }}
          options={basePayOptions}
          name='Min Base pay'
          placeholder='Base pay'
          selectedOption={filters?.minPay}
        />
      </div>

      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            setFilters({
              ...filters,
              techStack: [...e.value],
            });
          }}
          options={techStackOptions}
          name='TechStack'
          multi
          placeholder='Tech Stack'
          selectedOptions={filters?.techStack}
        />
      </div>

      <div className={styles.filter}>
        <TextField
          type={'text'}
          name='Company'
          label='Company'
          size='small'
          value={filters?.company}
          onChange={(e) => {
            setFilters({
              ...filters,
              company: e?.target.value,
            });
          }}
          fullWidth
          placeholder='Company'
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Filter;
