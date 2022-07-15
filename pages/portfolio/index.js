import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Portfolio() {
  var { data, error } = useSWR('http://headless-wp.test/wp-json/wp/v2/portfolio/', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
        { data.map( elem => {
           return(
            <div key ={elem.id}>
                <Link href={`/portfolio/${elem.id}`}>
                    <a> {elem.title.rendered} </a>
                </Link>
                <p>{elem.acf.acf_portfolio_title}</p>
            </div>
           )
        }) }
    </div>
  )
}
