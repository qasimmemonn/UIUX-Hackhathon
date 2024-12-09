const Banner = () => {
    return (
      <div className="relative w-full h-[100vh] overflow-hidden">
        <div className="font-bold text-2xl py-4">Don't Miss</div>
        {/* Background Image */}
        <img
          src="/images/banner.png"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };
  
  export default Banner;