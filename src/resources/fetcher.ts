import { API_BASE_URL } from '@/constants/api';

interface Response {
  headers: { [key: string]: string };
  status: number;
}

const fetcher = async <R, T = never>(
  url: string,
  method: string,
  body?: T
): Promise<{ data: R } & Response> => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: method === 'POST' ? JSON.stringify(body) : undefined,
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  const data = (await response.json()) as R;

  const headers = {};

  for (const [key, value] of response.headers.entries()) {
    headers[key] = value;
  }

  return {
    data,
    headers,
    status: response.status,
  };
};

export const post = async <T, R>(url: string, body: T) => await fetcher<R, T>(url, 'POST', body);

export const get = async <T>(url: string) => await fetcher<T>(url, 'GET');

export const destroy = async <T>(url: string) => await fetcher<T>(url, 'DELETE');
