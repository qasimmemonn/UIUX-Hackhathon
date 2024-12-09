const Feature = () => {
    return (
      <div className="relative w-full h-[100vh] overflow-hidden">
        <div className="font-bold text-2xl py-4">Featured</div>
        {/* Background Image */}
        <img
          src="/images/feature.png"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };
  
  export default Feature;