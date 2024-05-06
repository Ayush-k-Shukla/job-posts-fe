import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../core/hook';
import { setFilter } from '../../datasource/redux.slice';
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

export interface IFilter {
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

const Filter = () => {
  const { filter: filters } = useAppSelector((state) => state.filterUseCase);
  const dispatch = useAppDispatch();
  console.log(filters);

  const changeFilters = ({
    name,
    value,
  }: {
    name: string;
    value: string | string[];
  }) => {
    dispatch(
      setFilter({
        ...filters,
        [name]: value,
      })
    );
  };

  return (
    <div className={styles.filterWrapper}>
      {/* Roles filter */}
      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            changeFilters({
              name: 'numOfEmp',
              value: [...e.value],
            });
          }}
          multi
          options={numberOfEmployeesOptions}
          name='Role'
          placeholder='Role'
          selectedOptions={filters?.numOfEmp}
        />
      </div>

      {/* No of employee filter */}
      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            changeFilters({
              name: 'numOfEmp',
              value: [...e.value],
            });
          }}
          multi
          options={numberOfEmployeesOptions}
          name='No Of Employees'
          placeholder='No Of Employees'
          selectedOptions={filters?.numOfEmp}
        />
      </div>

      {/* minimum experience filter */}
      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            changeFilters({
              name: 'minExp',
              value: e.value as string,
            });
          }}
          options={experienceOptions}
          name='Experience'
          placeholder='Experience'
          selectedOption={filters?.minExp}
        />
      </div>

      {/* Location filter */}
      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            changeFilters({
              name: 'location',
              value: [...e.value],
            });
          }}
          multi
          options={typeOptions}
          name='Remote'
          placeholder='Remote'
          selectedOptions={filters?.location}
        />
      </div>

      {/* Minimum pay filter */}
      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            changeFilters({
              name: 'minPay',
              value: e.value as string,
            });
          }}
          options={basePayOptions}
          name='Min Base pay'
          placeholder='Base pay'
          selectedOption={filters?.minPay}
        />
      </div>

      {/* Tech stack filter */}
      <div className={styles.filter}>
        <CustomSearchableDropdown
          handleSelectChange={(e) => {
            changeFilters({
              name: 'techStack',
              value: [...e.value],
            });
          }}
          options={techStackOptions}
          name='TechStack'
          multi
          placeholder='Tech Stack'
          selectedOptions={filters?.techStack}
        />
      </div>

      {/* Company name text filter */}
      <div className={styles.filter}>
        <TextField
          type='text'
          name='Company'
          label='Company'
          size='small'
          value={filters?.company}
          onChange={(e) => {
            changeFilters({
              name: 'company',
              value: e?.target.value,
            });
          }}
          fullWidth
          placeholder='Company'
        />
      </div>
    </div>
  );
};

export default Filter;
