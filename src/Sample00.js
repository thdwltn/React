const str = {
  str1 : 'sample01',
  str2 : 'sample02',
  str3 : 'sample03',
}

function Sample(){
  return(
    <ul>
      <li>{str.str1}</li>
      <li>{str.str2}</li>
      <li>{str.str3 + `num+${str.str1}`}</li>
    </ul>
  )
}

export default Sample;