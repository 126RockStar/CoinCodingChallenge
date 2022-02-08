import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ViewData from './components/ViewData';
import * as CoinService from 'services/coin.service';

const Table = () => {

    const [periodValue, setPeriodValue] = useState("oneMonth")
    const [data, setData] = useState(null);

    useEffect(() => {
        let params;

        if (periodValue === "oneWeek") {
            params = {
                start: moment().subtract(7, 'days').format("YYYY-MM-DD"),
                end: moment().format("YYYY-MM-DD")
            }
        }
        if (periodValue === "oneMonth") {
            params = {
                start: moment().subtract(30, 'days').format("YYYY-MM-DD"),
                end: moment().format("YYYY-MM-DD")
            }
        }
        if (periodValue === "threeMonths") {
            params = {
                start: moment().subtract(90, 'days').format("YYYY-MM-DD"),
                end: moment().format("YYYY-MM-DD")
            }
        }
        if (periodValue === "oneYear") {
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
        <div className="coin-table">
            <div className="coin-table__filter">
                <div className="coin-table__filter--item">
                    <input type="radio" id="oneWeek"
                        name="period" value="oneWeek" onChange={handleChangePeriod} />
                    <label for="oneWeek">One Week</label>
                </div>
                <div className="coin-table__filter--item">
                    <input type="radio" id="oneMonth"
                        name="period" value="oneMonth" onChange={handleChangePeriod} defaultChecked />
                    <label for="oneMonth">One Month</label>
                </div>
                <div className="coin-table__filter--item">
                    <input type="radio" id="threeMonths"
                        name="period" value="threeMonths" onChange={handleChangePeriod} />
                    <label for="threeMonths">Three Months</label>
                </div>
                <div className="coin-table__filter--item">
                    <input type="radio" id="oneYear"
                        name="period" value="oneYear" onChange={handleChangePeriod} />
                    <label for="oneYear">One Year</label>
                </div>
            </div>
            <div className="coin-table__main">
                {data && <ViewData data={data} />}
            </div>
        </div>
    );
};

export default Table;