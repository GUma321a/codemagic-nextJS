import React from 'react';

function Preloader() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Change this value to set the loading time
  }, []);

  return (
    loading && (
      <div className="preloader fixed bg-third-light w-full h-full min-h-screen min-w-[100vw] flex justify-center items-center text-white heading-h3 z-120">
        <div className="preloader__image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <div className="preloader__circle preloader__circle--1" />
          <div className="preloader__circle preloader__circle--2 animation-delay-16" />
          <div className="preloader__circle preloader__circle--3 animation-delay-32" />
        </div>
      </div>
    )
  );
}

export default Preloader;
