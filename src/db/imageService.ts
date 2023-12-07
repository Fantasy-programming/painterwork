import { url } from '@/lib/env';

const baseUrl = `${url}/api/images`;

export type GalleryElement = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
};

export type GalleryForm = {
  name: string;
  description: string;
  imageUrl: FileList;
};

const getAll = async () => {
  try {
    const res = await fetch(baseUrl, {
      cache: 'no-store',
    });
    return await res.json();
  } catch (e) {
    console.log(e);
    throw new Error('Error fetching images');
  }
};

const deleteOne = async (id: string, url: string) => {
  try {
    const res = await fetch(`${url}/api/images/${id}`, {
      method: 'DELETE',
    });
    return await res.json();
  } catch (e) {
    console.log(e);
    throw new Error('Error deleting image');
  }
};

const createOne = async (data: FormData, url: string) => {
  await fetch(`${url}/api/images`, {
    method: 'POST',
    body: data,
  });
};

const imageService = {
  getAll,
  deleteOne,
  createOne,
};

export default imageService;
