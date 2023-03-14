import { useState, useEffect } from 'react';

import { Order } from '../../types/order';
import Table, { ITableRowData } from '../../common/Table';
import { orderStatuses } from '../../constants/orderConstatns';
import Pagination from '../../common/Pagination';
import '../../assets/styles/orders.css';
import '../../assets/styles/table-footer.css';

const orders: Order[] = [
  {
    id: 1,
    number: '00082165',
    customer: 'John Barrous',
    date: '25.07.2021',
    summary: 48.5,
    method: 'Cash',
    status: 'Confirmed',
  },
  {
    id: 2,
    number: '00082164',
    customer: 'Martin Zakaryan',
    date: '25.07.2021',
    summary: 25,
    method: 'Webmoney',
    status: 'Delivering',
  },
  {
    id: 3,
    number: '00082163',
    customer: 'David Osrow',
    date: '25.07.2021',
    summary: 34,
    method: 'Cash',
    status: 'Confirmed',
  },
  {
    id: 4,
    number: '00082162',
    customer: 'Natan Jablonski',
    date: '2.07.2021',
    summary: 28,
    method: 'Cash',
    status: 'Completed',
  },
  {
    id: 5,
    number: '00082161',
    customer: 'Gene Kamenez Liberto',
    date: '23.07.2021',
    summary: 21,
    method: 'Amex',
    status: 'Confirmed',
  },
  {
    id: 6,
    number: '00082160',
    customer: 'Alexander Hess',
    date: '22.07.2021',
    summary: 36.75,
    method: 'Webmoney',
    status: 'In Progress',
  },
  {
    id: 7,
    number: '00082159',
    customer: 'John Doe',
    date: '22.07.2021',
    summary: 48,
    method: 'Cash',
    status: 'Confirmed',
  },
];

// let statuses: any = orders.forEach(elem => {
//   if (!(elem.status in statuses)) {
//     statuses.push(elem.status)
//   }
// })

const orderRowData: ITableRowData<Order>[] = [
  {
    header: 'Order Number',
    field: 'number',
  },
  {
    header: 'Customer',
    field: 'customer',
  },
  {
    header: 'Date',
    field: 'date',
  },
  {
    header: 'Order Summary',
    field: 'summary',
    className: 'align-center',
    render: (data) => <span>{`${data.summary} $`}</span>,
  },
  {
    header: 'Payment Method',
    field: 'method',
    className: 'align-center',
  },
  {
    header: 'Order Status',
    field: 'status',
    className: 'align-center',
  },
  {
    header: '',
    className: 'empty-theader',
    render: () => <i className="fa-regular fa-pen-to-square"></i>,
  },
];

const Orders = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  // const [status, setStatus] = useState('');
  
  const [data, setData] = useState([] as any);
  const [totalOrders, setTotalOrders] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(7);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const countPageNumers = (total: number, perPage: number) => {
    const quotient = Math.floor(total / perPage);
    const reminder = total % perPage;
    return reminder ? quotient + 1 : quotient;
  }

  useEffect(() => {
    setData(orders);
    setNumberOfPages(countPageNumers(totalOrders, elementsPerPage))
  }, []);

  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = currentPage * elementsPerPage;
  const currentResults = data.slice(startIndex, endIndex);

  let handleDateSelect = (e: any) => {
    e.target.id === 'from'
      ? setDateFrom(e.target.value)
      : setDateTo(e.target.value);
    console.log(`Dates: from ${dateFrom} - to ${dateTo}`);
  };

  let handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  // let handleSelect = (e: React.ChangeEvent<HTMLSelectElement>)=> {
  //   console.log(e.target.value);
  // };
  // let handleUpdateOrder = (e: any) => { };

  let handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    +e.target.value !== elementsPerPage && setElementsPerPage(+e.target.value);
  };

  return (
    <div className="orders-wrapper">
      <div className="orders-top-wrapper">
        <div className="orders-top-left">
          <h1>Orders</h1>
          <div className="top-select-wrapper">
            <select
              id="select-status"
              className="select-status"
              name="Status"
              onChange={handleStatusChange}
            >
              {orderStatuses.map((status) => (
                <option value={status.value} key={status.value}>
                  {status.title}
                </option>
              ))}
            </select>
            <select
              id="select-status"
              className="select-status"
              name="Status"
              onChange={handleStatusChange}
            >
              <option>Date</option>
            </select>
            <select
              id="select-status"
              className="select-status"
              name="Status"
              onChange={handleStatusChange}
            >
              <option>Summary</option>
            </select>
          </div>
        </div>
        <div className="orders-date">
          <input
            type="date"
            id="from"
            className="Orders-date-from"
            onChange={handleDateSelect}
          />
          <p>-</p>
          <input
            type="date"
            id="to"
            className="Orders-date-to"
            onChange={handleDateSelect}
          />
        </div>
      </div>
      {/* <Table data={orders} rowData={orderRowData} onChange={handleUpdateOrder}/> */}
      <Table
        data={currentResults}
        rowData={orderRowData}
        isSelectable={false}
      />
      <div className="table-footer">
        <div>Total Orders - {data.length}</div>
        <div className="table-footer-pagination">
          <div className="pagination-text"> Elements in one page </div>
          <select
            id=""
            className="select-per-page"
            name=""
            onChange={handlePerPageChange}
            defaultValue={elementsPerPage}
          >
            <option value={6}>6</option>
            <option value={10}>10</option>
          </select>
          {/* <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
        /> */}
        </div>
      </div>
    </div>
  );
};

export default Orders;
