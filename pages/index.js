import Head from 'next/head'
import axios from 'axios';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import DOMPurify from 'dompurify'

const Home = ({ datas, portData, error }) => {
  // console.log(portData);
  console.log(datas)

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }




  return (
    <div>

      {datas.map(data => (
        <div key={data.id}>
          {/* BANNER STARTS */}
          <div className="mainB">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-sm-6">
                  <div className="bannerC">
                    <div className="wrap">{data.acf.banner_title}</div>
                    <p>{data.acf.banner_subtitle}</p>
                    <a href={data.acf.banner_link.title} className="cBtn Request hvr-ripple-out">{data.acf.banner_link.title}</a>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6">
                  <div className="banner-image">
                    <Image width="650" height="450" alt="img" src={data.acf.banner_image.url}></Image>
                    { data.acf.banner_image.url ? 'yes' : 'no' }
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* BANNER ENDS */}
          {/* BOTIQUE STARTS */}
          <div className="wordpress-solution">
            <div className="container">
              <div className="title-section-service">
                <h1>A Boutique <span>WordPress Agency Sydney</span></h1>
              </div>
              <div className="wp-solution-section">
                <div className="row">
                  {data.acf.a_boutique_wordpress_agency_sydney.features.map(book => (
                    <div key={book.title} className="">
                      <div className="col-sm-6 col-md-3">
                        <div className="wp-solution-items">
                          <div className="wp-soln-icons">
                            <Image width="100" height="100" alt="img" src={book.image.url}></Image>
                          </div>
                          <div className="wp-soln-title">
                            <h3> <a href="#">  {book.title} </a></h3>
                          </div>
                          <div className="wp-soln-detail">
                            <p> {book.content} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* BOUTIQUE ENDS */}


          {/* PORTFOLIO STARTS */}
          <div id="portfolioEvents">
            <div className="container home-portfolio">
              <div className="title-section">
                <h2>Our Recent Work</h2> <br />
                <h2>FROM ACF</h2>
                <p>
                  <br />
                  As we mostly work as a white label partner for agencies, most of our
                  projects are bound by an NDA
                  <br />
                  so we can only showcase a few WordPress sites here.
                </p>
                <p>
                  We have built websites for a range of companies from high-traffic media
                  agencies to start-ups using WordPress. <br />
                  We love WordPress for its ease of use, community support and endless
                  possibilities for customisation.
                </p>
              </div>

              <div className="row">
                {portData.map(data => (
                  <div key={data.id}>
                    <div className="col-md-4 col-sm-4 col-xs-6 portfolioItem">
                      <div className="portfolioItemWrap">
                        <div className="overlay"></div>
                        {/* {data.acf.portfolio_image} */}
                        {/* <Image width="650" height="450" alt="img" src={data.acf.portfolio_image}></Image> */}
                        {/* <img src={data.acf.portfolio_image} /> */}
                        {/* <a href="https://www.wpcreative.com.au/portfolio/the-optical-co/ " className="btn">
                                  <p className="itemtitle">{data.title.rendered}</p>
                                  <p className="itemsubtitle"></p>
                                  <i className="fa fa-plus" aria-hidden="true"></i>
                                </a> */}

                        <Link href={`/portfolio/${data.id}`}>
                          <a className="btn">
                            <p className="itemtitle">{data.title.rendered}</p>
                            <p className="itemsubtitle"></p>
                            <FontAwesomeIcon icon={faPlus} />
                          </a>
                        </Link>

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/portfolio">
                  <a className="orangeBtn hvr-ripple-out">
                    See More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* PORTFOLIO ENDS */}


        </div>
      ))}

    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    // const res = await axios.get('https://headless.naphix.com/wp-json/wp/v2/pages?slug="wp-creative"');
    const res = await axios.get('https://headless.naphix.com/wp-json/wp/v2/pages?slug="wp-creative"');
    const portfolio = await axios.get('https://headless.naphix.com/wp-json/wp/v2/portfolio/');
    const datas = res.data;
    const portData = portfolio.data;
    return { datas, portData };
  } catch (error) {
    return { error };
  }
};



export default Home;
