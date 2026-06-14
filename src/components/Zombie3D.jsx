import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, Float } from '@react-three/drei';

/**
 * Componente que carga el modelo 3D descargado.
 * Asegúrate de que el archivo esté en /public/assets/models/zombie.glb
 */
function Model(props) {
  const { scene } = useGLTF('/assets/models/zombie.glb');
  return <primitive object={scene} {...props} />;
}

const Zombie3D = () => {
  return (
    <div className="zombie-3d-container" style={{ width: '100%', height: '500px', cursor: 'grab' }}>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          {/* PresentationControls permite rotar el modelo libremente */}
          <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <Stage environment="night" intensity={0.5} contactShadow={{ opacity: 0.7, blur: 2 }}>
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Model scale={1} />
              </Float>
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Zombie3D;

// Pre-carga el modelo para evitar tirones al renderizar
useGLTF.preload('/assets/models/zombie.glb');