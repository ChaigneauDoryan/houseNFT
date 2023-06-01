import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

// Import Assets
import ClearWood from '../assets/clearWood.png';
import DarkWood from '../assets/darkWood.jpg';

const House = ({ position, size, terrainId, terrain, setTerrainName, setTerrainOwner, setHasOwner, setTerrainId }) => {
    const [surface, color] = useLoader(TextureLoader, [DarkWood, ClearWood])

    const clickHandler = () => {
        setTerrainName(terrain.name)
        setTerrainId(terrainId)

        if (terrain.owner === '0x0000000000000000000000000000000000000000') {
            setTerrainOwner('Libre')
            setHasOwner(false)
        } else {
            setTerrainOwner(terrainId.owner)
            setHasOwner(true)
        }
    }

    return (
        <mesh position={position} onClick={clickHandler}>
            <boxBufferGeometry args={size} />
            <meshStandardMaterial map={color} normalMap={surface} metalness={0.25} />
        </mesh>
    );
}

export default House;