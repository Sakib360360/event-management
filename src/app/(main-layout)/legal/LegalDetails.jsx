// "use client"
// import Link from 'next/link';
// import React, { useEffect, useRef, useState } from 'react';
// // import './TabsComponent.css'

// const LegalDetails = ({legalItems}) => {
//     const [selectedTab,setSelectedTab]=useState(0);
//     const firstTabTef=useRef();

//     useEffect(()=>{
//         firstTabTef.current.focus();
//     },[])

//     return (

//         <div>
//             <div className='p-2 flex justify-around items-center gap-x-2 font-bold'>
//             {legalItems.map((item,index)=>(
//                 <Link 
//                 ref={index ===0 ? firstTabTef :null}
//                 key={index} 
//                 onClick={()=>setSelectedTab(index)}
//                 className={`p-2 focus:active ${selectedTab === index ?"active":""}`}
//                 href={{ pathname: "/legal/", query: { id:item.ref} }}>
//                     {item.title}
//                  </Link>
//             ))}
//         </div>
//         <div>
//             {legalItems.map((item,index)=>(
//                 <div className={`${selectedTab === index ? "":'hidden'}`}
//                 key={index}>
//                     {item.content}
//                 </div>
//             ))}
//         </div>
//         </div>
// //         <div className="tabs">
// //   <a className="text-white tab tab-bordered">Tab 1</a> 
// //   <a className="tab tab-bordered tab-active color">Tab 2</a> 
// //   <a className="tab tab-bordered">Tab 3</a>
// // </div> 
//     );
// };

// export default LegalDetails;