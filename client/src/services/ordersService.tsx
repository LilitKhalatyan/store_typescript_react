async function getOrders() {
  const loginUrl = 'https://fakestoreapi.com/products/';
  const data = await fetch(loginUrl);
  const responce = await data.json();
  const {id , title} = responce
  const result = {
    id ,
    title
  }
  return result;
}

export default getOrders

const fetchData = async () => {
  const loginUrl = 'https://fakestoreapi.com/products/';
  const response = await fetch(loginUrl);
  const newData = await response.json();
  return newData;
};

export { fetchData }