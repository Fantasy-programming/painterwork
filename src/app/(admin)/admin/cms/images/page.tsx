import Posts from './Posts';
import NewPost from './NewPost';
import Search from '@/components/Search';

import { url } from '@/lib/env';
import { searchFilter } from '@/lib/tools';

import imageService, { GalleryElement } from '@/db/imageService';

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query ?? '';
  const rawdata: GalleryElement[] = await imageService.getAll();
  const data = searchFilter(query, rawdata);

  return (
    <div className="p-10">
      <h1 className="text-2xl text-primary uppercase">Images Showcase</h1>
      <div className="my-10 ">
        <Search searchText="Search images" />
        <Posts data={data} url={url || ''} />
        <NewPost url={url || ''} />
      </div>
    </div>
  );
};

export default page;
