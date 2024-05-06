import { Autocomplete, Chip, TextField } from '@mui/material';
import styles from './index.module.scss';

export interface CustomInputChangeFuncInterface {
  name: string;
  value: string | string[];
}

export interface DropdownPropTypes {
  placeholder?: string;
  options: CustomSearchableDropdownOptionType[];
  handleSelectChange: (event: CustomInputChangeFuncInterface) => void;
  selectedOptions?: string[];
  selectedOption?: string;
  multi?: boolean;
  name: string;
}

export interface CustomSearchableDropdownOptionType {
  label: string;
  value: string;
}

export interface customSearchableDropdownFetchDataPropsInterface {
  searchText?: string;
  delay?: boolean;
}

/**
 * Renders a custom searchable dropdown
 *
 * For MultiSelect
 * -pass multi as true
 * -pass selectedOptions as selected options
 *
 * For Single Select
 * -pass multi as false
 * -pass selectedOption as selected option
 *
 * @param {DropdownPropTypes} {
 *   placeholder,
 *   options,
 *   handleSelectChange,
 *   selectedOptions,
 *   selectedOption,
 *   multi = false,
 *   name,
 * }
 * @return {*}
 */
function CustomSearchableDropdown({
  placeholder,
  options,
  handleSelectChange,
  selectedOptions,
  selectedOption,
  multi = false,
  name,
}: DropdownPropTypes) {
  const _onChange = (
    newValue:
      | CustomSearchableDropdownOptionType
      | CustomSearchableDropdownOptionType[]
  ) => {
    handleSelectChange({
      name,
      value: Array.isArray(newValue)
        ? newValue.map((val) => val.value!)
        : newValue.value!,
    });
  };

  const onChangeAutoComplete = (
    e: React.SyntheticEvent<Element, Event>,
    newValue: (string | CustomSearchableDropdownOptionType)[]
  ) => {
    const latestSelectedValue = newValue[newValue.length - 1];
    if (typeof latestSelectedValue === 'string') {
      newValue[newValue.length - 1] = {
        label: latestSelectedValue,
        value: latestSelectedValue,
      };
      _onChange(newValue as CustomSearchableDropdownOptionType[]);
    } else {
      _onChange(newValue! as CustomSearchableDropdownOptionType[]);
    }
  };

  const getLabelByValue = (value: string): string => {
    const _option = [...options].filter((option) => option.value === value);
    if (_option && _option.length > 0) return _option[0].label;
    return value;
  };

  return (
    <div className={styles.container}>
      {multi ? (
        <Autocomplete
          size='small'
          multiple
          filterSelectedOptions
          options={options}
          isOptionEqualToValue={(option, value) => {
            return option?.value === value?.value;
          }}
          onChange={onChangeAutoComplete}
          value={selectedOptions?.map((option) => {
            return { label: option, value: option };
          })}
          getOptionLabel={(option: CustomSearchableDropdownOptionType) => {
            return option.label;
          }}
          renderInput={(params) => (
            <TextField {...params} label={placeholder} />
          )}
          renderTags={(values, getTagProps) => {
            return values.map((value, index) => (
              <Chip
                label={getLabelByValue(value.value)}
                {...getTagProps({ index })}
                style={{
                  padding: '2',
                  height: '100%',
                  fontSize: '12px',
                }}
              />
            ));
          }}
        />
      ) : (
        <Autocomplete
          size='small'
          options={options}
          onChange={(e, newValue) => {
            _onChange(newValue!);
          }}
          isOptionEqualToValue={(option, value) => {
            return option.value === value.value;
          }}
          value={{
            label: getLabelByValue(selectedOption!) ?? '',
            value: selectedOption ?? '',
          }}
          renderInput={(params) => (
            <TextField {...params} label={placeholder} />
          )}
        />
      )}
    </div>
  );
}

export default CustomSearchableDropdown;
