function page() {
  return (
    <>
      <h1 className="text-3xl md:text-5xl flex justify-center text-primary p-20 uppercase">Change password</h1>

      <div className="flex flex-col  justify-center items-center">
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="flex w-full flex-col  gap-5 flex-nowrap">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Old Password</span>
                </label>
                <input type="password" placeholder="old password" className="input input-bordered" required />
              </div>
              <div className="form-control w-full mt-6">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input type="password" placeholder="new password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
