import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { sortMethod, formatPrice } from '../helpers';
import { Link } from 'react-router-dom';

const Tableau = ({ cryptos }) => {
    const columns = [
        {
            Header : 'Name',
            accessor :'name',
            Cell: cryptos => (
                <span className="crypto-name">
                    <img src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/${cryptos.original.symbol.toLowerCase()}.png`}
                        alt=""
                        width="16"
                        height="16" />
                    <Link to={`/${cryptos.original.id}/`}>
                    {cryptos.original.name}
                    </Link>
                </span>
            )
        },
        {
            Header: 'Symbol',
            accessor: 'symbol'
        }, 
        {
            Header: 'Market Cap',
            accessor: 'market_cap_usd',
            sortMethod: sortMethod,
            Cell: num => formatPrice(num.value)
        }, 
        {
            Header: 'Price',
            accessor: 'price_usd',
            sortMethod: sortMethod
        }, 
        {
            Header: 'Change(24H)',
            accessor: 'percent_change_24h',
            sortMethod: sortMethod,
            Cell: num => (
                <span className={num.value > 0 ? 'green' : 'red'}>
                {num.value}%
                </span>
            )
        }
    ]
    return (
        <ReactTable 
        data={cryptos} 
        columns={columns}
        className ="-striped"
        />
    )
}

export default Tableau;