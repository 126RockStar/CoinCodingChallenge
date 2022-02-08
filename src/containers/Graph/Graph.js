import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ViewGraph from './components/ViewGraph';
import * as CoinService from 'services/coin.service';

const Graph = () => {

    const [periodValue, setPeriodValue] = useState("oneMonth")
    const [data, setData] = useState(null);

    useEffect(() => {
        let params;

        if (periodValue==="oneWeek"){
            params = {
                start: moment().subtract(7, 'days').format("YYYY-MM-DD"),
                end: moment().format("YYYY-MM-DD")
            }
        }
        if (periodValue==="oneMonth"){
            params = {
                start: moment().subtract(30, 'days').format("YYYY-MM-DD"),
                end: moment().format("YYYY-MM-DD")
            }
        }
        if (periodValue==="threeMonths"){
            params = {
                start: moment().subtract(90, 'days').format("YYYY-MM-DD"),
                end: moment().format("YYYY-MM-DD")
            }
        }
        if (periodValue==="oneYear"){
            params = {
                start: moment().subtract(365, 'days').format("YYYY-MM-DD"),
                end: moment().format("YYYY-MM-DD")
            }
        }

        CoinService.getHistory(params).then(response => {
            setData(response);
        })

    }, [periodValue])

    const handleChangePeriod = (event) => {
        const { value } = event.target;
        setPeriodValue(value);
    }

    return (
        <div className="coin-graph">
            <div className="coin-graph__filter">
                <div className="coin-graph__filter--item">
                    <input type="radio" id="oneWeekGraph"
                        name="graph-period" value="oneWeek" onChange={handleChangePeriod} />
                    <label for="oneWeekGraph">One Week</label>
                </div>
                <div className="coin-graph__filter--item">
                    <input type="radio" id="oneMonthGraph"
                        name="graph-period" value="oneMonth" onChange={handleChangePeriod} defaultChecked />
                    <label for="oneMonthGraph">One Month</label>
                </div>
                <div className="coin-graph__filter--item">
                    <input type="radio" id="threeMonthsGraph"
                        name="graph-period" value="threeMonths" onChange={handleChangePeriod} />
                    <label for="threeMonthsGraph">Three Months</label>
                </div>
                <div className="coin-graph__filter--item">
                    <input type="radio" id="oneYearGraph"
                        name="graph-period" value="oneYear" onChange={handleChangePeriod} />
                    <label for="oneYearGraph">One Year</label>
                </div>
            </div>
            <div className="coin-graph__main">
                {data && <ViewGraph data={data} />}
            </div>
        </div>
    );
};

export default Graph;