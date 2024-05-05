import axios from 'axios';

export const getJobs = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  const body = JSON.stringify({ limit, offset });
  const data = await axios.post(
    'https://api.weekday.technology/adhoc/getSampleJDJSON',
    body,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(data);
};
