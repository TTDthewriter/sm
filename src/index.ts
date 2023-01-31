import express from 'express'
import fetch from "node-fetch"

const port = 3000
const app = express()


async function sunswap() {
    
let baseurl = "https://openapi.sun.io/"
let sunswapData = new URL(
    'v2/allpairs?page_size=500&page_num=0&ver=3&token_address=TRXuDwR9EYWwindMPx8yveAcaDTR3Z3XXz',
    baseurl
)
    
let response = await fetch(sunswapData, {method: 'GET'})
let data = JSON.parse(await response.text())

return data

}

app.get('/price', async (req, res) => {

    let price = await sunswap()

    res.send(price)

})





app.listen(port, () => 
console.log(`Server is live on port ${port}`)
)