import { DEFAULT_URL } from '../../Constant';

export default function Portada() {
  return (
    <div className={`flex items-center justify-center w-full min-h-screen py-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 relative bg-gray-500`}>
      <img
        src={`${DEFAULT_URL}assets/logos/logo.png`}
        alt='Canibalización Tecnológica'
        className="w-full max-h-[80vh] max-w-7xl object-contain"
      />
    </div>
  );
};
