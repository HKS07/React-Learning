import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import {Component} from "react" ;

class About extends Component {

  constructor(props) {
    super(props);
    console.log('parent constructor');
    
  }

  componentDidMount(){
    console.log('parent component did mount');
  }

  render() {
    console.log('parent render');
    
    return (
      <div className="px-8 bg-gray-200">
        <h1 className="py-2 text-3xl ">About Us Page</h1>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ips um passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum
        </p>
        {/* <Outlet/> */}
        <ProfileClass type="first"/>

        
        {/* <ProfileClass type="second"/> */}
      </div>
    )
  };
};


export default About;


// const About2 = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ips um passages, and more recently
//         with desktop publishing software like Aldus PageMaker including versions
//         of Lorem Ipsum
//       </p>
//       {/* <Outlet/> */}
//       <Profile type="funciton"/>
//       <ProfileClass type="class"/>
//     </div>
//   );
// };
