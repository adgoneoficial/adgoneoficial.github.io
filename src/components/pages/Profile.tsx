import { FC, ReactElement, Suspense } from 'react'; // Added Suspense
import { Canvas, useLoader } from '@react-three/fiber'; // Added Canvas, useLoader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Added GLTFLoader
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei'; // Added drei components
// Import react-icons as before
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6';


// Define the structure of the object socialLinks within ProfileData
interface SocialLinksData {
  email: string;
  phone: string;
  whatsappNumber: string;
  websiteUrl: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  github: string;
}

// Define the structure of the data object, now using profileModel
interface ProfileData {
  name: string;
  username?: string;
  subtitle?: string;
  socialLinks?: SocialLinksData;
  profileModel: string;
  modelPosition: { x: number; y: number; z: number };
  greeting?: string;
  description?: string;
  welcomeMessage?: string;
}

// Define the props for the main Profile component
interface ProfileProps {
  profileData: ProfileData;
  initialLanguage?: 'es' | 'en';
}

const Profile: FC<ProfileProps> = ({ profileData }) => {
  const {
    name,
    username,
    subtitle,
    socialLinks,
    profileModel,
    modelPosition,
    greeting,
    description,
    welcomeMessage,
  } = profileData;

  const renderFormattedText = (text: string): ReactElement => {
    const formattedHtml = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
    return <span dangerouslySetInnerHTML={{ __html: formattedHtml }} />;
  };


  const getCleanPhoneNumber = (phone: string): string => {
    return phone.replace(/[()\s+]/g, '');
  };

  function Model({ url }: {
    url: string;
  }) {
    const gltf = useLoader(GLTFLoader, url);
    // Cambia Y a un valor positivo (ajusta 0.5 según necesites)
    return <primitive object={gltf.scene} dispose={null} scale={4} position={[0, 0, 0]} />;
  }

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-auto overflow-y-auto bg-gray-500 min-w-80" style={{ minWidth: '310px' }}>
      {/* Main Content */}
      <main className="flex flex-1 w-full p-2">
        <section id="presentation" className="container w-full mx-auto my-auto max-w-7xl">
          <div className="flex flex-wrap items-start justify-center w-full gap-8 md:flex-nowrap">

            {/* Left Column: Profile Card */}
            <div
              className="w-full max-w-lg p-6 border border-black rounded-lg md:w-auto md:max-w-sm lg:max-w-md shrink-0"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '#a9a4a0 0px 0px 10px 0px',
              }}
            >
              {/* === 3D Model Section === */}
              <div className="relative flex justify-center px-0 mb-10 sm:px-8">
                {/* === Contenedor del Canvas Modificado === */}
                {/* 1. Asegura width y height iguales (ej. w-80 h-80) */}
                {/* 2. Añade rounded-full, bg-black, overflow-hidden */}
                <div className="relative overflow-hidden bg-black rounded-full w-80 h-80"> {/* Ajusta w/h según necesites */}
                  <Canvas>
                    {/* Lighting */}
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[modelPosition.x, modelPosition.y, modelPosition.z]} intensity={1.2} castShadow />
                    {/* Suspense Fallback */}
                    <Suspense fallback={<Html center>
                      <div className="flex items-center justify-center p-2 text-white bg-black bg-opacity-50 rounded">
                        Loading 3D...
                      </div>
                    </Html>}>
                      {Model({ url: profileModel })}
                    </Suspense>
                    {/* Controls and Camera */}
                    <OrbitControls
                      autoRotate={true}
                      autoRotateSpeed={2.5}
                      enableZoom={true}
                      enablePan={false}
                      minPolarAngle={Math.PI / 4}
                      maxPolarAngle={Math.PI / 1.8}
                      target={[0, 0, 0]}
                    />
                    <PerspectiveCamera makeDefault position={[10, 2, 0]} fov={25} />
                  </Canvas>
                </div>
                {/* --- Name/Username Overlay (se mantiene relativo al contenedor circular) --- */}
                <div className="absolute left-0 right-0 flex flex-col items-center w-full text-center -bottom-10">
                  <span
                    className="px-3 py-1 text-3xl font-bold bg-white rounded-t-lg bg-opacity-85 sm:text-4xl w-fit"
                    style={{ color: '#353230' }}
                  >
                    {name}
                  </span>
                  {username && <span
                    className="px-3 pb-1 text-2xl text-white bg-white rounded-b-lg bg-opacity-85 sm:text-3xl w-fit"
                    style={{ color: '#353230' }}
                  >
                    @{username}
                  </span>}
                </div>
                {/* === Fin Contenedor del Canvas Modificado === */}
              </div>
              {/* === End 3D Model Section === */}

              {/* Info Section - Adjusted margin top */}
              {socialLinks && <div className="w-full p-2 mt-16 text-lg text-black rounded-lg"> {/* mt-16 might need fine-tuning */}
                <div className="p-2 -mx-2 font-semibold text-center bg-gray-200 rounded-lg sm:text-left">
                  <span className='block text-base'>{subtitle}</span>
                </div>
                <div className="mt-6">
                  <ul className="space-y-3">
                    {/* Email */}
                    <li>
                      <a
                        target="_blank"
                        href={`mailto:${socialLinks.email}`}
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        <FaEnvelope className="mr-3 text-xl shrink-0" />
                        <span className='break-all'>{socialLinks.email}</span>
                      </a>
                    </li>
                    {/* Phone & WhatsApp */}
                    <li className="flex items-center mt-2">
                      <a
                        target="_blank"
                        href={`tel:${getCleanPhoneNumber(socialLinks.phone)}`}
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                        title={socialLinks.phone}
                      >
                        <FaPhone className="text-xl shrink-0" />
                      </a>
                      <span className="mx-2">|</span>
                      <a
                        target="_blank"
                        href={`https://wa.me/${socialLinks.whatsappNumber}`}
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        <FaWhatsapp className="mr-2 text-xl shrink-0" />
                        <span>{socialLinks.phone.replace(/^\(\+\d+\)\s*/, '')}</span>
                      </a>
                    </li>
                    {/* Website */}
                    <li className="mt-2">
                      <a
                        target="_blank"
                        href={socialLinks.websiteUrl}
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        <FaGlobe className="mr-3 text-xl shrink-0" /> Web
                      </a>
                    </li>
                    {/* Facebook */}
                    <li className="mt-2">
                      <a
                        target="_blank"
                        href={socialLinks.facebook}
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        <FaFacebookF className="mr-3 text-xl shrink-0" /> Facebook
                      </a>
                    </li>
                    {/* Instagram */}
                    <li className="mt-2">
                      <a
                        target="_blank"
                        href={socialLinks.instagram}
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        <FaInstagram className="mr-3 text-xl shrink-0" /> Instagram
                      </a>
                    </li>
                    {/* Twitter */}
                    <li className="mt-2">
                      <a
                        target="_blank"
                        href={socialLinks.twitter}
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        <FaTwitter className="mr-3 text-xl shrink-0" /> X (Twitter)
                      </a>
                    </li>
                    {/* LinkedIn */}
                    <li className="mt-2">
                      <a
                        target="_blank"
                        href={socialLinks.linkedin}
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        <FaLinkedinIn className="mr-3 text-xl shrink-0" /> LinkedIn
                      </a>
                    </li>
                    {/* GitHub */}
                    <li className="mt-2">
                      <a
                        target="_blank"
                        href={socialLinks.github}
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        <FaGithub className="mr-3 text-xl shrink-0" /> GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>}
            </div>

            {/* Right Column: Introduction */}
            {description && <div className="w-full min-w-0 py-8 my-auto md:w-auto md:flex-1 md:pl-4 lg:pl-8">
              <div className="flex mb-4">
                <h2 className="text-3xl font-bold text-white">
                  {greeting}
                </h2>
              </div>
              <p
                id="presentation-text"
                className="mt-4 text-lg text-white"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {renderFormattedText(description)}
              </p>
              <h3 className="mt-10 text-xl text-center text-gradient">
                {welcomeMessage}
              </h3>
            </div>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;