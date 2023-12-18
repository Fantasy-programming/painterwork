'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { toast, Toaster } from 'react-hot-toast';
import colorService from '@/db/colorService';

const NewColor: React.FC<{ url: string }> = ({ url }) => {
  const [color, setColor] = useState('#ffffff');
  const [name, setName] = useState('');
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await colorService.createOne({ name, hexCode: color }, url);

    setName('');
    setColor('#ffffff');

    (document.getElementById('newModal') as HTMLFormElement)?.close();
    toast.success('Color added sucessfully');
    router.refresh();
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <dialog id="newModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg capitalize">Add new color</h3>
          <form className=" pt-6 pb-8 mb-4" onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                className=" input input-bordered input-secondary input-md  rounded w-full  leading-tight "
                id="Name"
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Name"
              >
                Color
              </label>
              <HexColorPicker
                className="w-full"
                color={color}
                style={{ width: '100%' }}
                onChange={setColor}
              />
              <HexColorInput
                color={color}
                onChange={setColor}
                className=" input input-bordered mt-6 input-secondary input-md  rounded w-full   leading-tight "
              />
            </div>

            <div className="flex items-center justify-between">
              <button className="btn btn-primary w-full " type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="submit">Close</button>
        </form>
      </dialog>
    </>
  );
};

export default NewColor;
