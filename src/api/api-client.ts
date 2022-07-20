// Fake API URL for dev purposes - mocks only for now
export const API_URL = 'https://some-server/api';

type Options = RequestInit & {
  data?: any;
};

export async function client(
  endpoint: string,
  { data, headers: customHeaders, ...customConfig }: Options = {},
) {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...customHeaders,
    },
    ...customConfig,
  };

  return window
    .fetch(`${API_URL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      return response.ok ? data : Promise.reject(data);
    });
}
