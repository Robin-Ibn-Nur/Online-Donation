const Banner = () => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/y4BYwhF/Clothing.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0, 0, 0, 1.9)",
    opacity : "10"
  };
  return (
    <div
      className="h-[70vh] flex justify-center items-center"
      style={bannerStyle}
    >
      <div className="form-control">
        <div
          className="h-[70vh] flex justify-center items-center"
        >
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-outline btn-accent">Accent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
