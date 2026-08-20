import useMacbookStore from '../store'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import StudioLights from './three/studioLights'
import { useMediaQuery } from 'react-responsive'
import ModelSwitcher from './three/ModelSwitcher'

const cameraConfig = { position: [0,2,5], fov:50, near:0.1, far:100 }

const ProductViewer = () => {
    const {color, scale, setColor, setScale} =  useMacbookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px )'});

  return (
    <section id='product-viewer'>
        <h2>Take a closer look</h2> 

        <div className='controls'>
            <p className="info"> Mackbook Pro | Available in 14" & 16" in Gray & Dark colors  </p>
            
            <div className='flex-center gap-5 mt-5'>
                <div className="color-control">
                    <div 
                        onClick={() => setColor('#aab5bd')} 
                        className= {clsx('bg-neutral-300', color === "#aab5bd" && 'active' )}
                    />
                    <div 
                        onClick={() => setColor('#2e2c2e')} 
                        className= {clsx('bg-neutral-900', color === "#2e2c2e" && 'active' )}
                    />
                </div>

                <div className='size-control'>
                    <div 
                        onClick={() => setScale(0.06)} 
                        className= {clsx(scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white")}
                    >
                        <p>14"</p>
                    </ div>  
                    <div 
                        onClick={() => setScale(0.08)} 
                        className= {clsx(scale === 0.08 ? "bg-white text-black" : "bg-transparent text-white")}
                    >
                        <p>16""</p>
                    </ div>      
                    
                </div>
            </div>
        </div>

        <Canvas id='canvas' camera={cameraConfig}>
            {/* <Box position={[0, 0, 0]} scale={10*scale} material-color={color} /> */}
            
            <StudioLights/>
            {/* <MacbookModel14 position={[0, 0.15, 0]} scale = {0.06} /> */}
            
            {/* <OrbitControls enableZoom={false}/> */}
            {/* instead of using the OrbitControls we will use the ModelSwitcher */}

            <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile = {isMobile}/>
        </Canvas>
    </section>
  )
}

export default ProductViewer