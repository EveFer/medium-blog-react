import React, { Component } from "react";
import "./CreatePost.scss";
import Header from "../../components/Header";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header isAuthenticated={true} />
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <form className="d-flex flex-wrap border border-black p-5 shadow p-3 mb-5 bg-white rounded">
              <select id="post-category" className="form-control w-100 ">
                <option value=" ">Categoría</option>
                <option value="Development">Development</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Diseño">Diseño</option>
                <option value="Medicina">Medicina</option>
                <option value="Educación">Educacíon</option>
                <option value="Lectura">Lectura</option>
                <option value="Salud">Salud</option>
              </select>
              <div className="form-group w-100 ">
                <label htmlFor="post-title" className="col-form-label ">
                  Título
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="post-title"
                  placeholder="Ingrese el Título"
                />
              </div>
              <div className="form-group w-100">
                <label htmlFor="message-text" className="col-form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="post-complete-description"
                  placeholder="Ingrese una breve despcripcion"
                  defaultValue={""}
                />
              </div>
              <div className="form-group w-100">
                <label htmlFor="message-text" className="col-form-label">
                  Contenido
                </label>
                <textarea
                  className="form-control"
                  id="post-complete-content"
                  placeholder="Ingrese el contenido completo"
                  defaultValue={""}
                />
              </div>
              <select id="post-tag" className="form-control w-100">
                <option value=" ">Tag - In</option>
                <option value="Development">Programming</option>
                <option value="Diseño">UX Planet</option>
                <option value="Medicina">Elemental</option>
                <option value="Tecnología">Better Programming</option>
                <option value="Educación">Towards Data Science</option>
                <option value="Lectura">The Startup</option>
                <option value="Salud">OneZero</option>
              </select>
              <div className="form-group w-50 pr-2">
                <label htmlFor="message-text" className="col-form-label">
                  Autor
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="post-autor"
                  placeholder="Ingrese el Autor"
                />
              </div>
              <div className="form-group w-50">
                <label htmlFor="message-text" className="col-form-label">
                  Fecha de Publicación
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="post-publication-date"
                />
              </div>
              <div className="form-group w-50 pr-2">
                <label htmlFor="message-text" className="col-form-label">
                  Tiempo-Lectura
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="post-minutes-reading"
                  placeholder="Tiempo estimado de lectura"
                />
              </div>
              <div className="form-group w-50">
                <label htmlFor="message-text" className="col-form-label">
                  URL Imagen
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="post-image"
                  placeholder="Ingrese la url de la imagen"
                />
              </div>
              <div className="form-group w-50 ">
                <label htmlFor="message-text" className="col-form-label">
                  URL Imagen del detalle
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="imagDetail"
                  placeholder="Ingrese la url de la imagen"
                />
              </div>
            </form>
            <div className="modal-footer border-black p-3 shadow p-2 mb-3 bg-white rounded">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="btn-register-post"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
