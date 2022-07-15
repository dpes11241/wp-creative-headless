import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Profile () {
    const { data, error } = useSWR('https://headless.naphix.com//wp-json/acf/v2/options', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    // console.log({data});
    // render data
    return(
<div>
        <nav className="navbar navbar-default scroll-to-fixed-fixed" id="menu"
        >
            <div className="container menuW">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <Link href='/'>
                    <a className="navbar-brand">
                            <Image width="205" height="38" alt="img" src={data.acf.site_logo.url}></Image>
                    </a>
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-center">
                        <div className="menu-main-nav-container">
                        <ul id="primary-menu" className="menu">
                        {data.acf.menu.map(book => (
                            <li key={book.link.title}  className="">
                               <Link href={book.link.url}>
                                    <a>{book.link.title}</a>
                                </Link>
                            </li>
                        ))}
                        </ul>
                        </div>
                    </ul>
                    <div className="headerContact">
                        <a href={`tel:${data.acf.phone_number.url}`} className="contactNumber"> {data.acf.phone_number.title} </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
  }

