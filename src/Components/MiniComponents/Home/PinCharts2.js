import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'

function PinCharts2(props) {

    const pincharts_2 = { "margin": "62vh 0vw 0vh 55vw", "width": "40vw", "height": "35vh" }

    const lineChartStyle = {
        "width": "84%",
        "marginLeft": "3vw"
    }

    const [chartData, setChartData] = useState({})

    useEffect(() => {
        const chart = (coin) => {

            let time = []
            let price = []

            axios
                .get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1&interval=hourly`)
                .then(res => {
                    res.data.prices.map(item => {
                        time.push(formatter(item[0]))
                        price.push(item[1])
                        return null
                    })

                    function formatter(timestamp) {
                        var date = new Date(timestamp).getDate()
                        var month = new Date(timestamp).getMonth() + 1
                        var hour = new Date(timestamp).getHours()
                        return date + "/" + month + ": " + hour;
                    }

                    setChartData({
                        labels: time,
                        datasets: [{
                            label: props.coin.toUpperCase(),
                            data: price,
                            backgroundColor: '#03dac5',
                            borderWidth: 1,
                            borderColor: '#03dac9'
                        }]
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
        chart(props.coin)
    }, [props.coin])

    return (
        <div className="card" style={pincharts_2}>
            <div style={lineChartStyle}>
                <Line
                    data={chartData} />
            </div>
        </div>
    )
}

export default PinCharts2