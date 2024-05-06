import { CustomSearchableDropdownOptionType } from '../components/autocomplete';
import { IJob } from '../datasource/remote';

export const experienceOptions: CustomSearchableDropdownOptionType[] = [
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

export const basePayOptions: CustomSearchableDropdownOptionType[] = [
  { value: '0', label: '0L' },
  { value: '10', label: '10L' },
  { value: '20', label: '20L' },
  { value: '30', label: '30L' },
  { value: '40', label: '40L' },
  { value: '50', label: '50L' },
  { value: '60', label: '60L' },
  { value: '70', label: '70L' },
];

export const getRolesFilterOptions = (
  data: IJob[]
): CustomSearchableDropdownOptionType[] => {
  const filset = new Set<string>();

  data?.forEach((d) => {
    filset.add(d.jobRole!);
  });

  return [...Array.from(filset)].map((r) => {
    return {
      label: r,
      value: r,
    };
  });
};

export const getLocationFilterOptions = (
  data: IJob[]
): CustomSearchableDropdownOptionType[] => {
  const filset = new Set<string>();

  data?.forEach((d) => {
    filset.add(d.location!);
  });

  return [...Array.from(filset)].map((r) => {
    return {
      label: r,
      value: r,
    };
  });
};
