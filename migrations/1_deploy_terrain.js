const Terrain = artifacts.require("Terrain")

module.exports = async function (deployer) {
    const NAME = 'TerrainDeVente'
    const SYMBOL = 'EPSI'
    const COST = web3.utils.toWei('1', 'ether')

    await deployer.deploy(Terrain, NAME, SYMBOL, COST)
}