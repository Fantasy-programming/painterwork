import { url } from '@/lib/env';

const baseUrl = `${url}/api/colors`;

export type ColorElement = {
  _id: string;
  name: string;
  hexCode: string;
};

const getAll = async () => {
  try {
    const res = await fetch(baseUrl, {
      cache: 'no-store',
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

const createOne = async (
  data: { name: string; hexCode: string },
  url: string,
) => {
  await fetch(`${url}/api/colors`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const colorService = {
  getAll,
  createOne,
};

export default colorService;
