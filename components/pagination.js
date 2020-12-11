import PaginationButton from "./paginationButton";

export default function Pagination(props) {
    const {page,setPage,lastPage} = props;
     return (
        <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
        <a className="pagination-previous"  disabled={(page===1)} onClick={()=>(page!==1)&&setPage(page-1)}>Previous</a>
        <a className="pagination-next" disabled={(page===lastPage)} onClick={()=>(page!==lastPage)&&setPage(page+1)} >Next page</a>
        <ul className="pagination-list">
          {(page > 2)&&(
            <>
            <PaginationButton page={1} setPage={setPage} />
            <li><span className="pagination-ellipsis">&hellip;</span></li>
            </>
          )}
          {(page!==1)&&<PaginationButton className="is-hidden-mobile" page={page-1} setPage={setPage} />}
          <PaginationButton current={true} page={page} setPage={setPage} />
          {(page!==lastPage) && <PaginationButton className="is-hidden-mobile" page={page+1} setPage={setPage} />}
          
          {(page+2<=lastPage)&&(
          <>
          <li><span className="pagination-ellipsis">&hellip;</span></li>
          <PaginationButton page={lastPage} setPage={setPage} />
          </>
          )}
        </ul>
      </nav>
     )
}