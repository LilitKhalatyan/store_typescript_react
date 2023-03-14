import { useState, useEffect } from 'react';

import Button from '../../common/Button';
import Table, { ITableRowData } from '../../common/Table';
import { Product } from '../../types/product';
import { productStatuses } from '../../constants/productConstatns';
import { getAllProducts } from '../../services/productsService';
import Pagination from '../../common/Pagination';
import Select from '../../common/Select';
import '../../assets/styles/products.css';
import '../../assets/styles/table-footer.css';
import moment from 'moment';

const productRowData: ITableRowData<Product>[] = [
  {
    header: 'Photo',
    field: 'photo',
    render: (data: Product) => (
      <img src={data.photo} height={50} width={50} alt="" />
    ),
  },
  {
    header: 'Name',
    field: 'name',
    className: 'align-center',
  },
  {
    header: 'Color',
    field: 'color',
    className: 'align-center',
    render: (data: Product) => (
      <span
        className="color-box"
        style={{ backgroundColor: `${data.color}` }}
      ></span>
    ),
  },
  {
    header: 'Date',
    field: 'date',
    className: 'align-center',
  },
  {
    header: 'Price',
    field: 'price',
    render: (data) => <span>{`${data.price} $`}</span>,
    className: 'align-center',
  },
  {
    header: 'Code',
    field: 'code',
  },
  {
    header: 'Sale',
    field: 'sale',
    render: (data) => <span>{data.sale ? `${data.sale} $` : ''}</span>,
    className: 'align-center',
  },
  {
    header: 'Gender',
    field: 'gender',
    className: 'align-center',
  },
  {
    header: 'Group',
    field: 'group',
  },
  {
    header: 'Status',
    field: 'status',
  },
  {
    header: '',
    className: 'empty-theader',
    render: () => <i className="fa-regular fa-pen-to-square"></i>,
  },
];

const Products = () => {
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [total, setTotalProducts] = useState(0);
  const [data, setData] = useState([] as any);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(6);


  const countPageNumers = (total: number, perPage: number) => {
    const quotient = Math.floor(total / perPage);
    const reminder = total % perPage;
    return reminder ? quotient + 1 : quotient;
  }

  const fetchProducts = async () => {
    const {total, data} = await getAllProducts(currentPage, elementsPerPage, status, date);
    setTotalProducts(total);
    setData(data);
    setNumberOfPages(countPageNumers(total, elementsPerPage));
  };

  useEffect(() => {
    fetchProducts();
  }, [elementsPerPage, currentPage, status, date]);

  const handleDateSelect = (e: any) => {
    setDate(moment(e.target.value).format('DD.MM.YYYY'));
  }

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setElementsPerPage(+e.target.value);
  };

  const handlePageSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(+e.currentTarget.innerText);
  }

  const perPageOptions = [6, 7, 8, 9, 10, 11, 12];

  const formatDate = moment().format('DD-MM-YYYY')

  return (
    <div className="products-wrapper">
      <h1>Products</h1>
      <div className="products-single-line">
        <div className="products-top-left">
          <div className="product-search">
            <input type="text" className="" />
            <i className="fa fa-magnifying-glass"></i>
          </div>
          <select id="select-status" className="select-status" onChange={handleStatusChange}>
            <option value="">Status</option>
            {productStatuses.map((status) => (
              <option value={status.value} key={status.value}>
                {status.title}
              </option>
            ))}
          </select>
          <select id="select-status" className="select-status" >
            <option value="">Code</option>
          </select>
          <select id="select-status" className="select-status">
            <option value="">Date</option>
          </select>
          <input type="date" name="Date" onChange={(e) => handleDateSelect(e)}/>
          <h1>{formatDate}</h1>
        </div>
        <Button text="+" className="button-add" />
      </div>
      <Table data={data} rowData={productRowData} isSelectable />
      <div className="table-footer">
        <div>Total Products - {total}</div>
        <div className="table-footer-pagination">
          <div className="pagination-text">Elements in one page</div>
          <select className="select-per-page" onChange={handlePerPageChange} defaultValue={elementsPerPage}>
            {perPageOptions.map((num) => <option value={num} key={num}>{num}</option>)}
          </select>
          {/* <Select className="select-per-page" handleSelect={handlePerPageChange} options={perPageOptions}/> */}
          <Pagination numberOfPages={numberOfPages} currentPage={currentPage} onClick={handlePageSelect}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
