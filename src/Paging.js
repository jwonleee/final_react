import Pagination from "react-js-pagination";
import styled from "./css/Paging.module.css";

const Paging = ({totalCount, postPerPage, pageRangeDisplayed, handlePageChange, page}) => {

    return (
        <>  
            <div className={styled.pagination}>

            <Pagination
                activePage={page}
                itemsCountPerPage={postPerPage}
                totalItemsCount={totalCount? totalCount : 0}
                pageRangeDisplayed={pageRangeDisplayed}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
                />

            </div>
        </>
    )
}

export default Paging;
