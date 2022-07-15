import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function PortfolioDetail() {

  const router = useRouter()
  const { portfolio } = (router.query)

  const { data, error } = useSWR(`http://headless-wp.test/wp-json/wp/v2/portfolio/` + `${portfolio}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      {data.title.rendered} <br/>
      {data.acf.intro_subtitle}
    </div>
  )
}
