async function  getCsrfTOkenN0G4nGBoYY () {
    try {
        const response = await fetch('http://localhost:3000/getCsrfTOkenN0G4nGBoYY', {method: 'GET'})
        const data = await response.json()
        const csrfToken = data.csrfToken
        console.log(csrfToken)
        return csrfToken
        
    }
    catch(error) {
    console.log(`Erro: ${error}`)
    }
}

const _getCsrfTOkenN0G4nGBoYY = getCsrfTOkenN0G4nGBoYY
export { _getCsrfTOkenN0G4nGBoYY as getCsrfTOkenN0G4nGBoYY }