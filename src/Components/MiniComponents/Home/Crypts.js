import React from 'react'

import data from '../../../data/Data'

function Crypts() {

    const currency = { "margin": "12vh 0vw 0vh 5vw", "width": "60vw", "height": "45vh" }

    const baseUrl = "https://api.coinranking.com/v2/coins"
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const apiKey = 'coinranking5c3322b13eeb05b688b8e7d972034c20e3149cd7cd74c4f4'

    // let coins

    fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${apiKey}`,
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then((response) => {
        if(response.ok) {
            response.json().then((res) => {
                // let coins = res.data.coins
                console.table(res.data.coins)
                res.data.coins.map(coin => (
                    `<tr key=${coin.uuid}>
                        <td>${coin.name}</td>
                        <td>${coin.price}</td>
                        <td>${coin.change}</td>
                    </tr>`
                ))
            })
        }
    })
    .catch((err) => {console.log(err)})


    return (
        <div className="card" style={ currency }>
            <card-head>
                <card-title>Crypts</card-title>
                <currency-converter style={ { "textAlign": "right" } }>
                    Currency: <current-currency>INR</current-currency>
                </currency-converter>
            </card-head>
            <table>
                <tbody>
                    <tr>
                        <th>Currency</th>
                        <th>Price</th>
                        <th>Growth</th>
                    </tr>
                </tbody>
            </table>

            <table className="data-table">
                <tbody>
                {data.map(data => (
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.growth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Crypts