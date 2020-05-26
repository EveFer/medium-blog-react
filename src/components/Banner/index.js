import React from "react";
import "./Banner.scss";

function Banner(props) {
  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
        {/* Aqui componente Banner - Marce */}
        <article>
          <a href>
            <img
              src="https://cdn-images-1.medium.com/fit/c/416/151/0*irQTXgaHVpHXsiZo.jpg"
              className=" article-principal-img"
              alt="..."
            />
          </a>
          <div className="article-principal-body">
            <h1 className="article-principal-title cursor-pointer">
              Mit Develops Cheap, Open Source Ventilador for Co..
            </h1>
            <p className="article-principal-summary cursor-pointer">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
            </p>
            <p className="article-principal-autor">by Ryan Whitwam</p>
            <div className="article-principal-data">
              <div className="d-flex justify-content-between">
                <div>
                  <a
                    href
                    className="article-principal-topic popover-autor"
                    data-toggle="popover"
                  >
                    ExtremeTech
                  </a>{" "}
                  in{" "}
                  <a
                    href
                    className="article-principal-topic popover-topic"
                    data-toggle="popover"
                    data-placement="top"
                  >
                    ExtremeTech Access
                  </a>
                  <p
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Update Mar 28"
                  >
                    <span className="article-principal-date-publication">
                      March 26 . 2 min read
                    </span>
                    <span className="icon-star">
                      <i className="fas fa-star" />
                    </span>
                  </p>
                </div>
                <a href className="align-self-center ellipsis">
                  <i className="fas fa-ellipsis-h" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        {/* Aqui componente Banner - Marce */}
        <section>
          <article className="article-card mb-4">
            <div className="article-card-img">
              <a href>
                <img
                  src="https://cdn-images-1.medium.com/fit/c/100/100/0*XT7UBDmQWpUUpWTa"
                  className
                  alt=""
                />
              </a>
            </div>
            <div className="article-card-body ml-4">
              <h2 className="article-card-title cursor-pointer">
                COVID-19 Vaccine May Be Avaible in Fall
              </h2>
              <div className="article-card-data d-flex justify-content-between">
                <div>
                  <a href className="article-card-autor popover-autor">
                    Jesse Smith
                  </a>
                  <p
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Update Mar 28"
                  >
                    <span className="article-card-date-publication">
                      March 26 . 2 min read
                    </span>{" "}
                    <span className="icon-star">
                      <i className="fas fa-star" />
                    </span>
                  </p>
                </div>
                <a href className="align-self-center ellipsis">
                  <i className="fas fa-ellipsis-h" />
                </a>
              </div>
            </div>
          </article>
          <article className="article-card mt-3">
            <div className="article-card-img">
              <a href>
                <img
                  src="https://cdn-images-1.medium.com/focal/100/100/64/39/1*yOakVeg6isgmDYv2frsIfg.jpeg"
                  className
                  alt=""
                />
              </a>
            </div>
            <div className="article-card-body ml-4">
              <h2 className="article-card-title cursor-pointer">
                Congres Is About to Bail Out Everyone-Except Black...
              </h2>
              <div className="article-card-data d-flex justify-content-between">
                <div>
                  <a href className="article-card-autor popover-autor">
                    Mike Muse
                  </a>{" "}
                  in{" "}
                  <a href className="article-card-autor popover-topic">
                    LEVEL
                  </a>
                  <p
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Update Mar 28"
                  >
                    <span className="article-card-date-publication">
                      March 24 . 5 min read
                    </span>{" "}
                    <span className="icon-star">
                      <i className="fas fa-star" />
                    </span>
                  </p>
                </div>
                <a href className="align-self-center ellipsis">
                  <i className="fas fa-ellipsis-h" />
                </a>
              </div>
            </div>
          </article>
          <article className="article-card mt-2">
            <div className="article-card-img">
              <a href>
                <img
                  src="https://cdn-images-1.medium.com/fit/c/100/100/1*Bx5Sb71JelPJV2BV_ja3Jg.jpeg"
                  className
                  alt=""
                />
              </a>
            </div>
            <div className="article-card-body ml-4">
              <h2 className="article-card-title cursor-pointer">
                Pentecostal Snake Handle Refuses Help And Dies
              </h2>
              <div className="article-card-data d-flex justify-content-between">
                <div>
                  <a href className="article-card-autor popover-autor">
                    Ramona Grigg
                  </a>{" "}
                  in{" "}
                  <a href className="article-card-autor popover-topic">
                    Indelible Inl
                  </a>
                  <p
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Update Mar 28"
                  >
                    <span className="article-card-date-publication">
                      March 20 . 6 min read
                    </span>{" "}
                    <span className="icon-star">
                      <i className="fas fa-star" />
                    </span>
                  </p>
                </div>
                <a href className="align-self-center ellipsis">
                  <i className="fas fa-ellipsis-h" />
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        {/* Aqui componente Banner - Marce */}
        <div className="article-secundary-wrapper">
          <article className="article-secundary">
            <div>
              <a href>
                <img
                  src="https://cdn-images-1.medium.com/fit/c/504/222/1*KnqaYt4ngxxIVdguKe8tGA.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="article-secundary-body">
              <h2 className="article-secundary-title cursor-pointer">
                This Is How Google Will Collapse
              </h2>
              <p className="article-secundary-summary">
                Reporting on Google's future with toda...
              </p>
              <div className="article-secundary-data d-flex justify-content-between">
                <div>
                  <a href className="article-secundary-autor popover-autor">
                    ExtremeTech
                  </a>{" "}
                  in{" "}
                  <a href className="article-secundary-autor popover-topic">
                    ExtremeTech Access
                  </a>
                  <p
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Update Mar 28"
                  >
                    <span className="article-secundary-date-publication">
                      April 24,2017 . 10 min read
                    </span>{" "}
                    <span className="icon-star">
                      <i className="fas fa-star" />
                    </span>
                  </p>
                </div>
                <a href className="align-self-center ellipsis">
                  <i className="fas fa-ellipsis-h" />
                </a>
              </div>
            </div>
          </article>
          <a href className="article-secundary-link">
            SEE EDITOR'S PICKS <i className="fas fa-angle-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
