export default function PaginationButton(props){
    const {page,setPage,current,className} = props;
    return (
        <li><a className={`pagination-link ${current?"is-current":""} ${className}`}aria-label={`Goto page ${page}`} onClick={()=>setPage(page)}>{page}</a></li>
    )
}