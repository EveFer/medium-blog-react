import React, { Component } from 'react'
import './CreatePost.scss'
import {createPost} from '../../services/posts'

export default class CreatePost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category:"",
      title:"",
      author:"",
      description:"",
      content:"",
      publication_date:"",
      estimated_time:"",
      image:"",
      tag:"",
      imgDetail:""

    }
  }
  handleChange ({target:{name,value}}){
    this.setState({
      [name]:value
    })
  }
  async handleSubmit (event){
    event.preventDefault()
    const {category, title, author, description, content, publication_date,estimated_time,image, tag, imgDetail} = this.state
    const dataPost = {category, title, author, description, content, publication_date,estimated_time,image, tag, imgDetail}
    const response = await createPost (dataPost)
    const dataResponse = await response.json ()
    console.log(dataResponse)
    if (dataResponse.succsess){
      window.location.href='/posts'
    }
  }
  render () {
    const {category, title, author, description, content, publication_date,estimated_time,image, tag, imgDetail} = this.state
    return (
      <>
        <div className='row'>
          <div className='col-12 col-md-8 mx-auto'>
            <form className='d-flex flex-wrap border border-black p-5 shadow p-3 mb-5 bg-white rounded' onSubmit ={this.handleSudmit}>
              <select id='post-category' className='form-control w-100 ' onChange = {this.handleChange} name ='category' value ={category}>
                <option value=' '>Categoría</option>
                <option value='Development'>Development</option>
                <option value='Tecnología'>Tecnología</option>
                <option value='Diseño'>Diseño</option>
                <option value='Medicina'>Medicina</option>
                <option value='Educación'>Educacíon</option>
                <option value='Lectura'>Lectura</option>
                <option value='Salud'>Salud</option>
              </select>

              <div className='form-group w-100'>
                <label htmlFor='post-title' className='col-form-label'>
                  Título
                </label>
                <input
                  className='form-control'
                  id='post-title'
                  placeholder='Ingrese el Título' 
                  onChange = {this.handleChange} 
                  name ='title' 
                  value ={title}
                />
              </div>
              <div className='form-group w-100'>
                <label htmlFor='message-text' className='col-form-label'>
                  Description
                </label>
                <textarea
                  className='form-control'
                  id='post-complete-description'
                  placeholder='Ingrese una breve despcripcion'
                  defaultValue=''
                  onChange = {this.handleChange} 
                  name ='description' 
                  value = { description}
                />
              </div>
              <div className='form-group w-100'>
                <label htmlFor='message-text' className='col-form-label'>
                  Contenido
                </label>
                <textarea
                  className='form-control'
                  id='post-complete-content'
                  placeholder='Ingrese el contenido completo'
                  defaultValue=''
                  onChange = {this.handleChange} 
                  name ='content' 
                  value ={content}
                />
              </div>
              <select id='post-tag' className='form-control w-100' 
                  onChange = {this.handleChange} 
                  name ='tag' 
                  value ={tag}>
                <option value=' '>Tag - In</option>
                <option value='Development'>Programming</option>
                <option value='Diseño'>UX Planet</option>
                <option value='Medicina'>Elemental</option>
                <option value='Tecnología'>Better Programming</option>
                <option value='Educación'>Towards Data Science</option>
                <option value='Lectura'>The Startup</option>
                <option value='Salud'>OneZero</option>
              </select>

              <div className='form-group w-50 pr-2'>
                <label htmlFor='message-text' className='col-form-label'>
                  Autor
                </label>
                <input
                  className='form-control'
                  id='post-autor'
                  placeholder='Ingrese el Autor'
                  onChange = {this.handleChange} 
                  name ='author' 
                  value ={author}
                />
              </div>
              <div className='form-group w-50'>
                <label htmlFor='message-text' className='col-form-label'>
                  Fecha de Publicación
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='post-publication-date'
                  onChange = {this.handleChange} 
                  name ='publication_date' 
                  value ={publication_date}
                />
              </div>
              <div className='form-group w-50 pr-2'>
                <label htmlFor='message-text' className='col-form-label'>
                  Tiempo-Lectura
                </label>
                <input
                  className='form-control'
                  id='post-minutes-reading'
                  placeholder='Tiempo estimado de lectura'
                  onChange = {this.handleChange} 
                  name ='estimated_time' 
                  value ={estimated_time}
                />
              </div>
              <div className='form-group w-50'>
                <label htmlFor='message-text' className='col-form-label'>
                  URL Imagen
                </label>
                <input
                  type='url'
                  className='form-control'
                  id='post-image'
                  placeholder='Ingrese la url de la imagen'
                  onChange = {this.handleChange} 
                  name ='image' 
                  value = {image}
                />
              </div>

              <div className='form-group w-100'>
                <label htmlFor='message-text' className='col-form-label'>
                URL Imagen del detalle
                </label>
                <input
                  className='form-control'
                  id='post-complete-description'
                  placeholder='url de la imagen para el detalle del post'
                  defaultValue=''
                  onChange = {this.handleChange} 
                  name ='imgDetail' 
                  value = {imgDetail}
                />
              </div>

              <div className='d-flex justify-content-center w-100'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                >
                Cancelar
                </button>
                <button
                  type='submit'
                  className='btn btn-primary'
                  id='btn-register-post'
                >
                Registrar
                </button>
              </div>
            </form>

          </div>
        </div>
      </>
    )
  }
}
