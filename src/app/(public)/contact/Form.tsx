'use client';

import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';

import resend, { MailInput } from '@/vendor/resendService';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<MailInput>();

  const onsubmit = async (data: MailInput) => {
    try {
      await resend.sendMail(data);
      toast.success('We will get back to you soon');
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onsubmit)}>
          <div className="flex w-full flex-col md:flex-row gap-5 flex-nowrap">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register('email')}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                {...register('name')}
              />
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="text"
                placeholder="Number"
                className="input input-bordered"
                required
                {...register('phone')}
              />
            </div>
          </div>
          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">
                  How would you like to hear back from us?
                </span>
              </div>
              <select
                className="select select-bordered"
                {...register('medium')}
                value="By Phone"
              >
                <option>By Phone</option>
                <option>By Email</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              rows={6}
              placeholder="Number"
              className="textarea textarea-bordered h-24"
              required
              {...register('message')}
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              disabled={isSubmitting}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
