import React, { Component } from 'react'

// Components
import Header from '../../components/Header'

import logo from '../../assets/img/Medium_White.png'
import claps from '../../assets/img/claps.png'


import './Post.scss';

// export default class Post extends Component {
//   render() {
//     return (
//       <>
//         <Header />

//           <div class="linea-div"></div>

//           <div class="container">
//             <div class="row justify-content-center text-center">
//               <div class="col-md-9">
//                 <h1 class="h1" href="#">How People Over 60 Can Protect Themselves Right Now</h1>
//                 <h2 class="h2">Physician and longevity expert Dr. Peter Attia shares tips</h2>
//             <div class="card promoting-card card border-0">
//               <div class="card-body d-flex flex-row">
//                 <img src={"https://picsum.photos/400/400"}  class="rounded-circle mr-3" height="50px" width="50px" alt="avatar"/>
//                 <div>
//                   <h4 class="card-title">Equipo 3</h4>
//                   <p class="card-text">Mar 25 · 4 min read</p>
//                 </div>
//               </div>
//             </div>

//             <img className="MainImage" src={"https://picsum.photos/400/400"}  width="900" />
//             <h6 class="h6 p-3">Photo: Getty Images</h6>
//             <p class="p">As the coronavirus pandemic continues to dominate headlines, we’ve been hearing that one particular population may be vulnerable: those aged 60 and older. But what puts that group at a higher risk of complications from Covid-19? And for those over 60, or who have a loved one in that age group, what should we be doing to keep ourselves and each other safe? We turned to physician and longevity expert Dr. Peter Attia for his thoughts on the subject. Here’s what he had to say…
//             </p>
//             <div class="row justify-content-origin">
//               <button class="category">Salud</button>
//               <button class="category">Ciencia</button>
//               <button class="category">Arte</button>
//               <button class="category">Deportes</button>
//               <button class="category">Política</button>
//               <button class="category">Historia</button>
//               <button class="category">Entrenamiento</button>
//               <button class="category">Educación</button>
//             </div>
//             <img class="row justify-content-origin" src={claps} width="90" alt="clap-button"/>
//             <div class="small-div"></div>
//             <div class="card promoting-card card border-0">
//               <div class="card-body d-flex flex-row">
//                 <img src={"https://picsum.photos/400/400"} class="rounded-circle mr-3" height="100px" width="100px" alt="avatar"/>
//                 <div>
//                   <h2 class="card-title">Equipo 3</h2>
//                   <p class="card-bio">Esta es una breve bio.</p>
//                 </div>
//               </div>
//             </div>
//             <div class="small-div"></div>
//           </div>
//           </div>
//         </div>

//         <div class="footer-post">
//           <div class="footer_one">
//             <div class="row">
//               <div class="col-4 md-hide ">
//                 <h4 class="h4">Discover Medium</h4>
//                 <h6 class="h6">Welcome to a place where words matter. On Medium, smart voices and original ideas take center
//                   stage - with no ads in sight. Watch</h6>
//               </div>
//               <div class="col-4 md-hide">
//                 <h4 class="h4">Make Medium yours</h4>
//                 <h6 class="h6">Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage
//                   and inbox. Explore</h6>
//               </div>
//               <div class="col-4 md-hide ">
//                 <h4 class="h4">Become a member</h4>
//                 <h6 class="h6">Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just
//                   $5/month. Upgrade</h6>
//               </div>
//             </div>
//           </div>
//         <div class="white-line"></div>
//           <div class="footer_two">
//             <div class="row">
//               <div class="col-12">
//               <nav class="nav justify-content-between m-5">
//                 <a class="navbar-brand text-black" href="#">
//                   <img class="logo-medium d-none d-md-block" src={logo} heigth="" alt=""></img>
//                 </a>
//                 <ul class="nav">
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">About</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">Help</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">Legal</a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       </>
//     )
//   }
// }


// export default class Post extends Component {
//   constructor(props){
//     super({key})
//       this.state= {
//         id: key,
//         post:{}
//         // category: "",
//         // title: "",
//         // author: "",
//         // description: "",
//         // content: "",
//         // publication_date: "",
//         // estimated_time: "",
//         // image: "",
//         // tag: "", 
//         // imgDetail: ""
//       }
//   }


//   async componentDidMount(){
//     try {
//       const response = await GetPost(tis.key)
//       const dataResponse = await response.json()
//       console.log(dataResponse.data.posts)
//       this.setState({
//         post : dataResponse.data.posts      
//       })
//     } catch (error) {
//       console.log('Error', error)
//     }

//   }
//   _renderPosts(){
//     const { posts } = this.state;
//     return posts.map(({_id,category,title,description,author,publication_date,estimated_time,image}) => (
//     <Post key={_id} 
//     category={category} 
//     title={title} 
//     description={description} 
//     author={author} 
//     publication_date={publication_date} 
//     estimated_time={estimated_time} 
//     image={image}
//     />
//     ))
//   }


//   render() {
//     return (
//       <>
//         <Header />

//           <div class="linea-div"></div>

//           <div class="container">
//             <div class="row justify-content-center text-center">
//               <div class="col-md-9">
//                 <h1 class="h1">{title}</h1>
//                 <h2 class="h2">{description}</h2>
//             <div class="card promoting-card card border-0">
//               <div class="card-body d-flex flex-row">
//                 <img src={image}  class="rounded-circle mr-3" height="50px" width="50px" alt="avatar"/>
//                 <div>
//                   <h4 class="card-title">{author}</h4>
//                   <span className="card-text"><time>{publication_date} </time><span> . </span> {estimated_time} read <span></span></span>
//                 </div>
//               </div>
//             </div>

//             <img className="MainImage" src={imgDetail}  width="900" />
//             <h6 class="h6 p-3">Photo: Getty Images</h6>
//             <p class="p">
//               {content}
//             </p>
//             <div class="row justify-content-origin">
//               <button class="category">{tag}</button>
//               <button class="category">Ciencia</button>
//               <button class="category">Arte</button>
//               <button class="category">Deportes</button>
//               <button class="category">Política</button>
//               <button class="category">Historia</button>
//               <button class="category">Entrenamiento</button>
//               <button class="category">Educación</button>
//             </div>
//             <img class="row justify-content-origin" src={claps} width="90" alt="clap-button"/>
//             <div class="small-div"></div>
//             <div class="card promoting-card card border-0">
//               <div class="card-body d-flex flex-row">
//                 <img src={"https://picsum.photos/400/400"} class="rounded-circle mr-3" height="100px" width="100px" alt="avatar"/>
//                 <div>
//                   <h2 class="card-title">{author}</h2>
//                   <p class="card-bio">Esta es una breve bio.</p>
//                 </div>
//               </div>
//             </div>
//             <div class="small-div"></div>
//           </div>
//           </div>
//         </div>

//         <div class="footer-post">
//           <div class="footer_one">
//             <div class="row">
//               <div class="col-4 md-hide ">
//                 <h4 class="h4">Discover Medium</h4>
//                 <h6 class="h6">Welcome to a place where words matter. On Medium, smart voices and original ideas take center
//                   stage - with no ads in sight. Watch</h6>
//               </div>
//               <div class="col-4 md-hide">
//                 <h4 class="h4">Make Medium yours</h4>
//                 <h6 class="h6">Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage
//                   and inbox. Explore</h6>
//               </div>
//               <div class="col-4 md-hide ">
//                 <h4 class="h4">Become a member</h4>
//                 <h6 class="h6">Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just
//                   $5/month. Upgrade</h6>
//               </div>
//             </div>
//           </div>
//         <div class="white-line"></div>
//           <div class="footer_two">
//             <div class="row">
//               <div class="col-12">
//               <nav class="nav justify-content-between m-5">
//                 <a class="navbar-brand text-black" href="#">
//                   <img class="logo-medium d-none d-md-block" src={logo} heigth="" alt=""></img>
//                 </a>
//                 <ul class="nav">
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">About</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">Help</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">Legal</a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       </>
//     )
//   }
// }


