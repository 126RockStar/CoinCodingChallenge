import React, { useEffect, useState } from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';

const ViewGraph = (props) => {

    const { data } = props;
    const [config, setConfig] = useState(null);
    const [marketConfig, setMarketConfig] = useState(null);

    useEffect(() => {
        const categories = data.map(item => {
            const date = moment(item.time_open).format("YYYY-MM-DD");
            return date;
        });

        const openPrice = data.map(item => item.open);
        const closePrice = data.map(item => item.close);
        const marketCap = data.map(item => item.market_cap);

        setConfig({
            title: "",
            xAxis: {
                categories: categories
            },
            series: [
                {
                    name: "Open Price",
                    data: openPrice
                },
                {
                    name: "Close Price",
                    data: closePrice
                }
            ]
        })

        setMarketConfig({
            title: "",
            xAxis: {
                categories: categories
            },
            series: [
                {
                    name: "Market Cap",
                    data: marketCap
                }
            ]
        })


    }, [data])

    return (
        <div>
            {config && <ReactHighcharts config={config} />}
            {marketConfig && <ReactHighcharts config={marketConfig} />}
        </div>
    )
}

export default ViewGraph;