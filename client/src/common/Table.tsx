import "../assets/styles/table.css"

export interface ITableRowData<T> {
    header: string;
    field?: keyof T;
    className?: string;
    onChange?: any;
    render?: (data: T) => JSX.Element;
}

interface IProps<T> {
    isSelectable?: boolean;
    data: T[];
    rowData: ITableRowData<T>[];
}

const Table = <T extends {id: number}>({ data, rowData, isSelectable }: IProps<T>) => {

  const renderTableCell = (element: T, row: ITableRowData<T>) => {
    if(row.render){
      return row.render(element);
    }
    if (row.field) {
      return element[row.field]
    }
  };

  return <table>
    <thead>
      <tr>
        {isSelectable === true && <th><input type="checkbox" id="" className="checkBoxCell"/></th>}
        {rowData.map(row => (
          <th className={row.className} key={row.header}>{row.header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map(element => (
        <tr key={element.id}>
          {isSelectable === true && <th><input type="checkbox" id="" className="checkBoxCell"/></th>}
          {rowData.map(row => (
            <td className={row.className} onChange={row.onChange} key={row.header}>{renderTableCell(element, row) as JSX.Element}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
}

export default Table;