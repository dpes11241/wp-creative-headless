import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function PortfolioDetail() {

  const router = useRouter()
  const { portfolio } = (router.query)

  const { data, error } = useSWR(`https://headless.naphix.com/wp-json/wp/v2/portfolio/` + `${portfolio}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <div className="pdTitle">
          <div className="container">
              <div className="row">
                  <h1> {data.title.rendered} </h1>
                  <p>{data.acf.intro_subtitle}</p>
              </div>
          </div>
      </div>

      <div className="pdTitle pdBanner">
          <div className="container">
              <div className="row">
                  <h2>Project Overview</h2>
                  <p>For Vision of Humanity, our goal was to create a simple, lightweight, and fully responsive website. This will help the organisation achieve its long-term aim of being the leading source of information on peace and development. Interactive global maps, current news and articles, downloadable content/resources, and a donation page are all available on the website.</p>
                  <Image
                  src={data.acf.detail_page.detail_image.url}
                  alt="Picture"
                  width={1207}
                  height={583}
                />
                  {/* <Link  passHref> */}
                    {/* <a className="hvr-ripple-out external" >Live Preview</a> */}
                    <a target="_blank" href={data.acf.detail_page.detail_page_url.url} className="hvr-ripple-out external" > {data.acf.detail_page.detail_page_url.title} </a>
                  {/* </Link> */}
                  </div>
              </div>
          </div>
      </div>
  )
}
