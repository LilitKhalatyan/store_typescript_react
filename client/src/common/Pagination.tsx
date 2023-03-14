import Button from './Button';
import "../assets/styles/pagination.css"

interface IProps {
  numberOfPages: number;
  currentPage: number;
  onClick: any;
}

const Pagination: React.FC<IProps> = (props) => {
  const arr = [];
  for (let i = 1; i <= props.numberOfPages; i++) {
    arr.push(`${i}`);
  }

  return (
    <nav className="pagination">
      {props.currentPage !== 1 && <Button disabled text="<" className="button-pagination"/>}
      {arr.map(elem  => <Button text={elem} key={elem} onClick={props.onClick} className="button-pagination"/>)}
      {props.currentPage !== props.numberOfPages && <Button disabled text=">" className="button-pagination"/>}
    </nav>
  );
}

export default Pagination

// when currentPage === 1 ==> will turn inactive, otherwise onClick={onPageClick(currentPage - 1)}
// onClick={onPageClick(currentPage)
// when currentPage === lastPage ==> will turn inactive/invisible, otherwise onClick={onPageClick(currentPage + 1)}