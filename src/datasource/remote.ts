export interface IJob {
  companyName?: string;
  jdLink?: string;
  jdUid?: string;
  jobDetailsFromCompany?: string;
  jobRole?: string;
  location?: string;
  logoUrl?: string;
  maxExp?: number;
  maxJdSalary?: number;
  minExp?: number;
  minJdSalary?: number;
  salaryCurrencyCode?: string;
}

export const getJobs = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  const body = JSON.stringify({ limit, offset });

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const reqOp = {
    method: 'POST',
    headers: myHeaders,
    body,
  };

  const res = await fetch(
    'https://api.weekday.technology/adhoc/getSampleJdJSON',
    reqOp
  );
  const jsonD = await res.text();
  const data = JSON.parse(jsonD);
  return data;
};
