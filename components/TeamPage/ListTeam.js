// import { FixedSizeList as List } from 'react-window';
// import Team from '../../pages/team';
 
// const Row = (member) => {
//     // const data = member
//     return function({ index, style }){
//             const data = member[index];
//             return <Col key={index} style={{margin : '1em 0'}} md={3}>
//                 <Member name={data.name} tagline={data.tagline} linkedin={data.linkedin} insta={data.insta} facebook={data.facebook} photo={data.photo} year={data.year} />
//             </Col>
//     }

// }
// //   <div style={style}>Row {index}</div>
    

 
// const ListTeam = ({member}) => (
//   <List
//     height={150}
//     itemCount={member.length}
//     itemSize={35}
//     width={300}
//   >
//     {Row(member)}
//   </List>
// );

// export default Team
import { FixedSizeList as List } from 'react-window';
import Member from './Member'
import {Col } from 'react-bootstrap'
 

const Row = (member) =>{ 
  console.log(member)
  return ({ index, style }) => {
    const data = member[index];
                return <Col key={index} style={{margin : '1em 0'}} md={12}>
                    <Member name={data.name} tagline={data.tagline} linkedin={data.linkedin} insta={data.insta} facebook={data.facebook} photo={data.photo} year={data.year} />
                </Col>
  }
};
 
export default function ListTeam (member) {
  return <List
          height={500}
          itemCount={member.member.length}
          itemSize={35}
          width={500}
        >
          {Row(member.member)}
        </List>
}
  
