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
  console.log(portData);
  // console.log(datas)

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
                    {/* { data.acf.banner_image.url ? 'yes' : 'no' } */}
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
          {/* ORANGE BLOCK STARTS */}
          <div className="repair-off-shore">
            <div className="container">
              <div className="title-section">
                {/* <h2>White Label Solution for Agencies</h2> */}
                <h2>White Label Solution for Agencies</h2>
              </div>
              <div className="repair-off-shore-content">
                <div className="white-label-subtitle">Are you looking for skilled WordPress developers to backup your
                  digital agency?</div>
                <p>With over 12 years of WordPress experience, we can code your designs to a fully secured, fast, SEO
                  friendly and responsive WordPress website with your label on it. In addition, we can be an extension of
                  your in-house team working on your website projects and provide your clients with ongoing maintenance
                  and technical support.</p>
                {/* { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.rendered) }} /> } */}
                <a className="hvr-ripple-out" href="white-label/">Learn More</a>
              </div>
            </div>
          </div>
          {/* ORANGE BLOCK ENDS */}

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
                        <Image src={data.acf.portfolio_image} width="650" height="450" alt="img"></Image>
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



          {/* GRAY BLOCK STARTS */}
          <div className="why-us-section">
            <div className="container">
              <div className="title-section">
                <h2>WordPress Developer Sydney</h2>
              </div>
              <div className="about-cta">
                <p>WP Creative is an Australian owned and operated, Sydney based boutique WordPress Agency. As WordPress specialists, we build high quality and affordable websites for businesses that are modern, fast, secure, SEO friendly and easy to manage.</p>
                <p>Whether a simple brochure website or a complex online store, we have built all kinds of websites using WordPress, the World’s most popular open-source CMS platform. We also offer WordPress Web Design Sydney, ongoing support and WordPress maintenance services for your WordPress websites so you can focus on the business and get the peace of mind you deserve.</p>
                <p>In addition, we have been helping some of Sydney’s top digital agencies as a white-label development team to build websites for their clients. We offer a dedicated team for agencies looking to grow and want to get support from a reliable team at a fraction of cost. We can also collaborate on a project basis if you need additional resources for overflow WordPress projects.</p>
                <p>If you are looking for a WordPress development partner in Sydney for your business or digital agency, please reach out to one of our local WordPress Developer Sydney to discuss your needs. We would be delighted to be your WordPress Development partner and provide you with ongoing support to build, maintain and optimise your websites in Sydney and Australia-wide.</p>
              </div>
            </div>
          </div>
          {/* GRAY BLOCK ENDS */}




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
