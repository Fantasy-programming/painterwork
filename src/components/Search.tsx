'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

function Search({ searchText }: { searchText: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex justify-between ">
      <input
        type="text"
        placeholder={searchText}
        className="input input-bordered input-md input-primary w-full max-w-xs"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <button
        className="btn uppercase btn-outline btn-primary"
        type="button"
        onClick={() =>
          (document.getElementById('newModal') as HTMLFormElement)?.showModal()
        }
      >
        Add new
      </button>
    </div>
  );
}

export default Search;
