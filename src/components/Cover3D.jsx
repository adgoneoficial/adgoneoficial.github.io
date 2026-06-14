import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTexture, RoundedBox, Center, Float } from '@react-three/drei';

/**
 * Renderiza una imagen cuadrada dentro de un marco 3D.
 */
const FramedImage = ({ imageUrl }) => {
  // Cargamos la imagen como textura
  const texture = useTexture(imageUrl);

  return (
    <group>
      {/* Marco 3D (Recuadro) */}
      <RoundedBox args={[3.2, 3.2, 0.3]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.9} />
      </RoundedBox>
      
      {/* La imagen en la cara frontal */}
      <mesh position={[0, 0, 0.16]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
};

const Cover3D = ({ imageUrl = "/assets/images/caratula1.png" }) => {
  return (
    <div className="cover-3d-wrapper" style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.8} floatIntensity={0.5}>
            <Center>
              <FramedImage imageUrl={imageUrl} />
            </Center>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Cover3D;