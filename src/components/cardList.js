// import React from "react";
// import Card from "./card";

// const CardList = ({ robots }) => {
//   const cardComponent = robots.map((user, index) => {
//     return (
//       <Card id={robots[index].id} name={robots[index].name} email={robots[index].email} />
//     );
//   });

//   const cardComponent2 = robots.map((user, index) => {
//     return <Card id={user.id} name={user.name} email={user.email} />;
//   });

//   return (
//     <div>
//       {cardComponent}
//       {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//       <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
//       <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
//     </div>
//   );
// };
// export default CardList;

import React from "react";
import Card from "./card";

//import { robots } from "./robots";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, index) => {
        return <Card id={user.id} name={user.name} email={user.email} />;
      })}
    </div>
  );
};
export default CardList;
