import useSWR from 'swr'
import DOMPurify  from 'dompurify'

const fetcher = (url) => fetch(url).then((res) => res.json())
const COMMENTS_URL = 'http://headless-wp.test/wp-json/wp/v2/widgets?sidebar=wp-menu'


const CommentsList = (props) => {
  const { data, error } = useSWR(COMMENTS_URL, fetcher)
  // because of the api, data will come in like: { comments: [{ content: ""}, ...] }

  if (error) return <div>Something went wrong...</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className='upperFooter'>
      <div className='container'>
        <div className='upper-footer-row'>
          <footer role="list">
            <h2>Footer</h2>
            {data && data.map((comment) => (
                <div className="col-md-3" key={comment.id}>
                  { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.rendered) }} /> }
                </div>
              ))}
          </footer>
        </div>
      </div>
    </div>
  )
}

export default CommentsList
