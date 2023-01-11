
// props 방법
//  function ReactBook(props){
//   return(
//     <dl>
//       <dt>제목</dt>
//       <dd>{props.title}</dd>
//       <dt>가격</dt>
//       <dd>{props.price}</dd>
//       <dt>클래스룸</dt>
//       <dd>{props.room}</dd>
//     </dl>
//   )
// }



// 구조화 방법
function ReactBook({title,price,room}){
  return(
    <dl className="book">
      <dt>제목</dt>
      <dd>{title}</dd>
      <dt>가격</dt>
      <dd>{price}</dd>
      <dt>클래스룸</dt>
      <dd>{room}</dd>
    </dl>
  )
}

export default ReactBook;