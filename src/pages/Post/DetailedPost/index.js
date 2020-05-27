import React from 'react'

import logo from '../../../assets/img/Medium_White.png'
import claps from '../../../assets/img/claps.png'


function DetailedPost({category,title,author,description,content,publication_date,estimated_time,image,tag, imgDetail}){
return (
  <>
      <div class="linea-div"></div>

      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-9">
            <h1 class="h1">{title}</h1>
            <h2 class="h2">{description}</h2>
        <div class="card promoting-card card border-0">
          <div class="card-body d-flex flex-row">
            <img src={image}  class="rounded-circle mr-3" height="50px" width="50px" alt="avatar"/>
            <div>
              <h4 class="card-title">{author}</h4>
              <span className="card-text"><time>{publication_date} </time><span> . </span> {estimated_time} read <span></span></span>
            </div>
          </div>
        </div>

        <img className="MainImage" src={image}  width="900" />
        <h6 class="h6 p-3">Photo: Getty Images</h6>
        <p class="p">
          {content}
        </p>
        <div class="row justify-content-origin">
          <button class="category">{tag}</button>
          <button class="category">{category}</button>
          <button class="category">Arte</button>
          <button class="category">Deportes</button>
          <button class="category">Política</button>
          <button class="category">Historia</button>
          <button class="category">Entrenamiento</button>
          <button class="category">Educación</button>
        </div>
        <img class="row justify-content-origin" src={claps} width="90" alt="clap-button"/>
        <div class="small-div"></div>
        <div class="card promoting-card card border-0">
          <div class="card-body d-flex flex-row">
            <img src={imgDetail} class="rounded-circle mr-3" height="100px" width="100px" alt="avatar"/>
            <div>
              <h2 class="card-title">{author}</h2>
              <p class="card-bio">Esta es una breve bio.</p>
            </div>
          </div>
        </div>
        <div class="small-div"></div>
      </div>
      </div>
    </div>

    <div class="footer-post">
      <div class="footer_one">
        <div class="row">
          <div class="col-4 md-hide ">
            <h4 class="h4">Discover Medium</h4>
            <h6 class="h6">Welcome to a place where words matter. On Medium, smart voices and original ideas take center
              stage - with no ads in sight. Watch</h6>
          </div>
          <div class="col-4 md-hide">
            <h4 class="h4">Make Medium yours</h4>
            <h6 class="h6">Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage
              and inbox. Explore</h6>
          </div>
          <div class="col-4 md-hide ">
            <h4 class="h4">Become a member</h4>
            <h6 class="h6">Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just
              $5/month. Upgrade</h6>
          </div>
        </div>
      </div>
    <div class="white-line"></div>
      <div class="footer_two">
        <div class="row">
          <div class="col-12">
          <nav class="nav justify-content-between m-5">
            <a class="navbar-brand text-black" href="#">
              <img class="logo-medium d-none d-md-block" src={logo} heigth="" alt=""></img>
            </a>
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Help</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Legal</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  </>
  )
}

export default DetailedPost