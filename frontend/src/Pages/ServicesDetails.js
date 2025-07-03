// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// function ServicesDetails() {
//   const { id } = useParams();
//   const [service, setService] = useState(null);

//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         const response = await fetch(`https://consulting-4rbe.onrender.com/api/services/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setService(data);
//         } else {
//           console.error('Failed to fetch service details');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchService();
//   }, [id]);

//   if (!service) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="breadcumb-area d-flex">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-12 text-center">
//               <div className="breadcumb-content">
//                 <div className="breadcumb-title">
//                   <h4>Service Details</h4>
//                 </div>
//                 <ul>
//                   <li><a href="/"><i className="las la-home"></i> Home </a></li>
//                   <li className="rotates"><i className="las la-slash"></i>Service Details</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <section className="feature_area boxed">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="section_title text-center">
//                 <h1>{service.title}</h1>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="feature_item">
//                 <div className="feature_icon">
//                   <img src={`http://localhost:5000/${service.iconUrl}`} alt={service.title} width={100} />
//                 </div>
//                 <div className="feature_content">
//                   <p>{service.description}</p>
//                   <p>{service.paragraph}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       <div className='container mt-5 mb-5'>
//         <div className='row'>
//             <div className='col-md-6'>
//                 <img src={`http://localhost:5000/${service.iconUrl}`} alt={service.title} style={{width:'100%',borderRadius:'10px'}} />
//             </div>
//              <div className='col-md-6'>
//               <h3 className='mb-2'>{service.title}</h3>
//                 <p>{service.description}</p>
//                   <p>{service.paragraph}</p>
//             </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default ServicesDetails;






