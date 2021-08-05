
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { useState, useEffect } from 'react';
import { Neco } from '../../utils/dataHelpers/NecoSat';
 const url = Neco
export const Paginate = (questions) => {

 const itemsPerPage = 5
 const numberOfPages = Math.ceil(questions.length / itemsPerPage)

 const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
  const start = index * itemsPerPage
  return questions.slice(start, start + itemsPerPage)
})

 return ( 
  <>
   <Pagination defaultCurrent={1} total={50} onclick={newFollowers} />
  </>
  );
}

export const Paginates = () => {

 const [data, setData] = useState([])

 const getQuestions = async () => {
   const response = await fetch (url);
   const data = await response.json()
   setData(Paginate(data))
 }
 console.log(getQuestions)
 useEffect(() => {
  getQuestions()
 }, [])
 return {data}
}

