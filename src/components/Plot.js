const Plot = ({ position, size, terrainId, terrain, setTerrainName, setTerrainOwner, setHasOwner, setTerrainId }) => {
    const clickHandler = () => {
        setTerrainName(terrain.name)
        setTerrainId(terrainId)

        if (terrain.owner === '0x0000000000000000000000000000000000000000') {
            setTerrainOwner('Libre')
            setHasOwner(false)
        } else {
            setTerrainOwner(terrain.owner)
            setHasOwner(true)
        }
    }

    return (
        <mesh position={position} onClick={clickHandler}>
            <planeBufferGeometry attach="geometry" args={size} />
            <meshStandardMaterial color={"#000000"} metalness={0.5} roughness={0} />
        </mesh>
    );
}

export default Plot;