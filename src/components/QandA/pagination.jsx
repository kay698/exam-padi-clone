
import { Pagination } from 'antd';

export const Paginate = (questions) => {

 const itemsPerPage = 5
 const numberOfPages = Math.ceil(questions.length / itemsPerPage)

 const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
  const start = index * itemsPerPage
  return questions.slice(start, start + itemsPerPage)
})

 return ( 
  <>
   <Pagination defaultCurrent={1} total={50}  onclick={newFollowers}/>
  </>
  );
}


