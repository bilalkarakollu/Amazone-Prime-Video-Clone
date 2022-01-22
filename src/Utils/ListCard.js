import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { fetchApi } from '.'

export default function ListCard({ requests }) {

    useEffect(() => {
        getFetch()
    }, [0])

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const getFetch = async () => {

        const { data, message, status } = await fetchApi(requests)
        if (status === 200) {
            console.log(data.results)
            setMovies(data.results)
            setLoading(false)
        }

    }

    const writeMovies = () => {
        if (!loading) {
            return movies.map((data) => {
                return (
                    <>
                        <Card data={data} loading={loading} />
                    </>
                )
            })
        }
    }

    return <>{writeMovies()}</>
}
