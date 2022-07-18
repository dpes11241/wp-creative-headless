import Head from 'next/head'
import axios from 'axios';
import Image from 'next/image'
import useSWR from 'swr'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import DOMPurify from 'dompurify'

const Portfolio = ({ portData, error }) => {
  console.log(portData);
  // console.log(datas)

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }



  return (
    <div>
    <div id="portfolioEvents">
      <div className="container home-portfolio">
          <div className="title-section">
              <h2>Our Recent Work</h2>
              <p><br/>As we mostly work as a white label partner for agencies, most of our projects are bound by an NDA <br/>so we can only showcase a few WordPress sites here.</p>
              <p>We have built websites for a range of companies from high-traffic media agencies to start-ups using WordPress. <br/>We love WordPress for its ease of use, community support and endless possibilities for customisation.</p>
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
      </div>

    </div>


    </div>
  );
};

Portfolio.getInitialProps = async ctx => {
  try {
    // const res = await axios.get('https://headless.naphix.com/wp-json/wp/v2/pages?slug="wp-creative"');
    const portfolio = await axios.get('https://headless.naphix.com/wp-json/wp/v2/portfolio/');
    const portData = portfolio.data;
    return { portData };
  } catch (error) {
    return { error };
  }
};



export default Portfolio;
