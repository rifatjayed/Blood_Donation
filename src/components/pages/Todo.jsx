// 1.Login Form
// 2.Authentaction

<form onSubmit={handleSubmit} className="card-body w-[350px]">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Your name</span>
    </label>
    <input
      type="text"
      placeholder="name"
      className="input input-bordered"
      name="name"
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input
      type="email"
      placeholder="email"
      className="input input-bordered"
      name="email"
      required
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <div className="relative w-full">
      <input
        type="password"
        placeholder="password"
        className="input input-bordered w-full pr-10"
        name="password"
        required
      />
      {/* <span
    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
    onClick={() => {
      setShow(!show);
    }}
  >
    {show ? (
      <BsEyeSlashFill></BsEyeSlashFill>
    ) : (
      <BsEyeFill></BsEyeFill>
    )}
  </span> */}
    </div>
  </div>
  {error && <p>{error}</p>}
  {success && <p>{success}</p>}
  <div className="form-control mt-6">
    <button className="btn btn-primary">Register</button>
  </div>
</form>;
