// const str = {
//   str1 : 'sample01',
//   str2 : 'sample02',
//   str3 : 'sample03',
// }

function Sample(props){
  // console.log(props)
  return(
    <ul>
      <li>{props.str1}</li>
      <li>{props.str2}</li>
      <li>{props.str3}</li>
    </ul>
  )
}

export default Sample;