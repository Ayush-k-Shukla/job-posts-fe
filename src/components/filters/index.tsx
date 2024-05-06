import { TextField } from '@mui/material';
import {
  basePayOptions,
  experienceOptions,
  getLocationFilterOptions,
  getRolesFilterOptions,
} from '../../core/helper';
import { useAppDispatch, useAppSelector } from '../../core/hook';
import { setFilter } from '../../datasource/filter.slice';
import CustomSearchableDropdown from '../autocomplete';
import styles from './index.module.scss';

export interface IFilter {
  minExp?: string;
  company?: string;
  location?: string[];
  minPay?: string;
  roles?: string[];
}

const Filter = () => {
  const { jobs: items } = useAppSelector((state) => state.jobUseCase);
  const { filter: filters } = useAppSelector((state) => state.filterUseCase);
  const dispatch = useAppDispatch();

  // Change filter on redux store
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
              name: 'roles',
              value: [...e.value],
            });
          }}
          multi
          options={getRolesFilterOptions(items)}
          name='Role'
          placeholder='Role'
          selectedOptions={filters?.roles}
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
          placeholder='Min experience'
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
          options={getLocationFilterOptions(items)}
          name='Location'
          placeholder='Location'
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
          name='Min pay'
          placeholder='Minimum pay'
          selectedOption={filters?.minPay}
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
