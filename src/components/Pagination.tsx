import { FullSpinner, Pagination as PaginationPage } from '@styles/app'

type PaginationProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    loading: boolean;
}

const Pagination = ({ page, setPage, loading }: PaginationProps) => {
    return (
        <>
            {loading && <FullSpinner />}
            <div className={PaginationPage}>
                <span className='p-title'>
                    Page: <span className='p-page'>{page}</span>
                </span>
                <button onClick={() => setPage(1)} disabled={page <= 1} className="button">First page</button>
                <button onClick={() => setPage(p => p - 1)} disabled={page <= 1} className="button">Prev</button>
                <button onClick={() => setPage(p => p + 1)} disabled={page >= 500} className="button">Next</button>
                <button onClick={() => setPage(500)} disabled={page >= 500} className="button">Last Page</button>

            </div>
        </>
    )
}

export default Pagination
