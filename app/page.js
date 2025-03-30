import Image from "next/image";
import Header from "../app/_components/Header";
import Footer from "../app/_components/Footer";
import Carousel from "../app/_components/Carousel";
import BrandCarousel from "../app/_components/BrandCarousel";

export default function Home() {
  return (
    <>
      <div id="wrapper">
        <Header />
        <div id="content">
          <h1 className="hiddenHeader">Govital</h1>
          {/* #region Slideshow */}
          <Carousel />
          {/* #endregion */}
          {/* #region Brands Slideshow */}

          <div id="about" className="mb-20"></div>
          {/* #endregion */}
          {/* #region Story & Middle Banner */}
          <div className="Story" >
            <div className="container">
              <h2 className="subHeader">
                Our <b>Story</b>
              </h2>
              <div className="text">
                <div className="text">
                GOVITAL quickly gained recognition for its innovative approach to healthy food. Our baked chips, made with real ingredients and boasting 50% less fat than traditional alternatives, became a hit among health-conscious snackers. The introduction of protein cereals, healthy bites, and ChocoRice Snacks expanded our range, providing even more options for individuals and families seeking guilt-free indulgences. 
                </div>
              </div>

            </div>
            <div
              className="photo"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dsamezukx/image/upload/v1740435942/vxzafbe5zhvloovr2tpo.webp")'
              }}
            >
              <div className="data">
                <div className="caption">
                  <p>
                  Boost your food brand with irresistible flavors and standout packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* #endregion */}
          {/* #region What We Do */}
          <div id="what">
            <div className="container">
              <h2 className="subHeader">
                What <b>We Do</b>
              </h2>
              <ul className="items">

                <li>
                  <svg
                    height="80px"
                    width="80px"
                    fill="#263441"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 458.823 458.823"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M458.539,194.435L416.933,69.623c-0.569-1.706-1.941-3.029-3.664-3.53L190.581,0.833c-1.496-0.453-3.146-0.22-4.459,0.611 l-165.6,103.606c-1.377,0.861-2.299,2.285-2.522,3.899L0.053,237.839c-0.348,2.501,1.043,4.909,3.383,5.848l34.744,13.997 l0.009,89.812c0,2.138,1.253,4.094,3.192,4.989L266.13,455.744l0.009,0.015c0.191,0.317,0.401,0.682,0.733,0.984 c1.017,0.947,2.347,1.475,3.738,1.475c1.521,0,2.986-0.639,4.022-1.755l140.307-150.909c0.947-1.018,1.471-2.348,1.471-3.738 v-59.711l40.869-42.109C458.707,198.521,459.188,196.388,458.539,194.435z M34.362,109.342l153.557-96.065v143.828L34.362,109.342z M242.449,339.945c1.521,0.602,3.276,0.499,4.704-0.294c1.456-0.798,2.455-2.194,2.754-3.832l14.641-81.226v188.335L49.173,343.973 l-0.009-81.87L242.449,339.945z M264.384,193.569l-24.091,133.667L11.524,235.095l16.19-116.318l236.978,73.712 C264.557,192.839,264.449,193.196,264.384,193.569z M397.699,72.974L270.148,182.683l-71.241-22.157V14.717L397.699,72.974z M447.062,194.745L320.991,324.642l-45.938-131.688L408.275,78.374L447.062,194.745z M275.529,227.664l38.018,108.99 c0.621,1.788,2.156,3.15,4,3.557c1.802,0.396,3.817-0.191,5.129-1.54l82.748-85.258v46.241L275.529,439.368V227.664z" />{" "}
                      </g>{" "}
                    </g>
                  </svg>

                  <div className="caption">Packaging</div>
                </li>
                <li>
                  <svg
                    height="70px"
                    width="70px"
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    fill="#263441"
                    stroke="#263441"
                    strokeWidth="0.00512"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{ __html: " .st0{fill:#263441;} " }}
                      />{" "}
                      <g>
                        {" "}
                        <path
                          className="st0"
                          d="M487.014,300.33l-211.416,69.377c6.826,7.133,12.37,15.629,16.202,25.26l204.272-67.029 c7.63-2.499,11.778-10.71,9.281-18.335C502.846,301.977,494.639,297.824,487.014,300.33z"
                        />{" "}
                        <path
                          className="st0"
                          d="M228.332,345.781l-76.42-232.859c-11.163-34.021-40.151-59.102-75.416-65.26L17.03,37.273 C9.126,35.893,1.595,41.172,0.218,49.09c-1.376,7.918,3.907,15.44,11.821,16.821l-0.009-0.01L71.496,76.29 c24.684,4.314,44.986,21.873,52.8,45.686l74.078,225.735C208.413,345.09,218.54,344.531,228.332,345.781z"
                        />{" "}
                        <path
                          className="st0"
                          d="M199.736,367.398c-31.358,10.313-48.41,44.04-38.136,75.402c10.303,31.353,44.027,48.411,75.394,38.128 c31.358-10.293,48.415-44.022,38.136-75.384C264.832,374.192,231.104,357.124,199.736,367.398z M237.098,433.643 c-2.469,4.844-6.623,8.638-12.185,10.473c-5.568,1.808-11.155,1.23-16.022-1.22c-4.844-2.479-8.638-6.623-10.469-12.186 c-1.821-5.564-1.225-11.154,1.211-16.008c2.474-4.854,6.628-8.648,12.19-10.473c5.567-1.826,11.159-1.23,16.022,1.201 c4.844,2.478,8.633,6.632,10.469,12.204C240.13,423.179,239.534,428.771,237.098,433.643z"
                        />{" "}
                        <path
                          className="st0"
                          d="M512,266.641l-3.023-9.215L433.712,28.078l-254.675,83.577l78.288,238.544L512,266.641z M421.342,52.524 l66.206,201.743L269.69,325.752l-66.198-201.733L421.342,52.524z"
                        />{" "}
                        <path
                          className="st0"
                          d="M389.279,213.263c13.69,5.658,19.626,19.906,16.864,26.282c-2.332,5.431-6.693,13.075-6.693,13.075 l17.351-5.694l17.361-5.696c0,0-8.042-3.577-13.137-6.557c-6.012-3.51-9.668-18.496-1.991-31.174 c12.919-21.305,7.01-37.219,7.01-37.219s-5.076,1.675-11.216,3.681l-5.648,11.164l4.905-1.618l-11.792,27.928l1.731-20.738 l-8.401,2.752l1.646-13.728c-1.636,0.549-2.862,0.946-3.458,1.145c-3.713,1.22-32.229,10.577-32.229,10.577 S366.246,203.755,389.279,213.263z"
                        />{" "}
                      </g>{" "}
                    </g>
                  </svg>

                  <div className="caption">Distribution</div>
                </li>
                <li>
                  <svg
                    fill="#263441"
                    height="70px"
                    width="70px"
                    version={1.0}
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                    enableBackground="new 0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M23.4,13.3C23,13.1,22.4,13,22,13.2l-1,0.4v-12C21,0.7,20.3,0,19.5,0h-2C16.7,0,16,0.7,16,1.5V3h-2.5C12.7,3,12,3.7,12,4.5 V8H9.5C8.7,8,8,8.7,8,9.5v5.2l-3,0.7v-0.3c0-0.6-0.3-1.1-0.8-1.3L3,13.2C2.8,12.5,2.2,12,1.5,12h-1C0.2,12,0,12.2,0,12.5v11 C0,23.8,0.2,24,0.5,24h1c0.7,0,1.3-0.5,1.5-1.2l1.2-0.6C4.6,22,4.9,21.5,5,21l4.8,2.8c0.2,0.1,0.5,0.2,0.8,0.2 c0.2,0,0.5-0.1,0.7-0.2l12-6.4c0.5-0.3,0.8-0.8,0.8-1.3v-1.5C24,14.1,23.8,13.6,23.4,13.3z M2,22.5C2,22.8,1.8,23,1.5,23H1V13h0.5 C1.8,13,2,13.2,2,13.5V22.5z M4,20.9c0,0.2-0.1,0.4-0.3,0.4L3,21.7v-7.4l0.7,0.4C3.9,14.8,4,14.9,4,15.1V20.9z M17,1.5 C17,1.2,17.2,1,17.5,1h2C19.8,1,20,1.2,20,1.5v12.4L17,15V1.5z M13,4.5C13,4.2,13.2,4,13.5,4H16v11.4l-1.4,0.5l-0.3-1.1 c-0.2-0.6-0.7-1-1.2-1.1V4.5z M9,9.5C9,9.2,9.2,9,9.5,9H12v4.8l-3,0.7V9.5z M23,16c0,0.2-0.1,0.4-0.3,0.4l-12,6.5 c-0.1,0.1-0.3,0.1-0.5,0L5,19.9v-3.5l7.7-1.7c0.3-0.1,0.5,0.1,0.6,0.4l0.5,1.6c0,0.1,0,0.3,0,0.4c-0.1,0.1-0.2,0.2-0.3,0.2l-3,0.7 c-0.3,0.1-0.4,0.3-0.4,0.6c0.1,0.2,0.3,0.4,0.5,0.4c0,0,0.1,0,0.1,0l3-0.7c0.4-0.1,0.7-0.4,0.9-0.7c0.1-0.2,0.2-0.4,0.2-0.6l7.6-2.8 c0.2-0.1,0.3,0,0.5,0.1c0.1,0.1,0.2,0.2,0.2,0.4V16z" />{" "}
                    </g>
                  </svg>

                  <div className="caption">Marketing</div>
                </li>
              </ul>
            </div>
          </div>

          <BrandCarousel/>

        </div>
        <Footer />

      </div>




    </>

  );
}
