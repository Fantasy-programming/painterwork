"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

import { publicUrl } from "@utils/env";

interface FormData {
  name: string;
  description: string;
  imageUrl: FileList;
}

const NewPost: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // potential threat

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);

    Array.from(data.imageUrl).forEach((file: File) => {
      formData.append(file.name, file);
    });

    await fetch(`${publicUrl}/api/images`, {
      method: "POST",
      body: formData,
    });

    setPreviewImage(null);
    reset();
    (document.getElementById("newModal") as HTMLFormElement)?.close();
    toast.success("Image added sucessfully");
    router.refresh();
  };

  return (
    <>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <dialog id="newModal" className="modal  modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg capitalize">Add new content</h3>
          <form className=" pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
                Location
              </label>
              <input
                className=" input input-bordered input-secondary input-md  rounded w-full  leading-tight "
                id="Name"
                type="text"
                placeholder="Enter Location"
                {...register("name", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Description">
                Description
              </label>
              <textarea
                id="Description"
                className="textarea textarea-bordered w-full"
                placeholder="Bio"
                {...register("description", { required: true })}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileInput">
                File Input
              </label>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-primary file-input-md file-input-bordered w-full "
                id="fileInput"
                {...register("imageUrl", { required: true })}
                onChange={handleFileChange}
              />
              {previewImage && (
                <Image
                  width={200}
                  height={200}
                  src={previewImage}
                  alt="Preview"
                  className="mt-2 w-full h-60 object-cover"
                />
              )}
            </div>
            <div className="flex items-center justify-between">
              <button className="btn btn-primary w-full " type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default NewPost;
