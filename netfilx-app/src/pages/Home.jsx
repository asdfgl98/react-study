import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
import api from '../api'

const Home = () => {

    // const data = useSelector((state)=>state.movie.data)

    const popularReq = async()=>{
        let res = await api.get('/movie/popular',{
            params: {language:'ko-KR',
                    page:1
        }
        })
        console.log(res.data)
    }

    const topRateReq = async()=>{
        let res = await api.get('/movie/top_rated', {
            params: {language:'ko-KR',
                    page:1
        }
        })
        console.log(res.data)
    }

    const upComingReq = async()=>{
        let min_date = '2023-09-24'
        let max_date = '2023-10-21'

        let res = await api.get(`/movie/upcoming?release_date.gte=${min_date}&release_date.lte=${max_date}`,{
            params: {language:'ko-KR',
                    page:1,
        }
        })
        console.log(res.data)
    }


    // 3가지 종류의 영화 목록을 묶어서 요청하는 방법
    const getMovieList = async()=>{
        let min_date = '2023-09-24'
        let max_date = '2023-10-21'


        const popularList = api.get('/movie/popular',{
            params: {language:'ko-KR',
                    page:1
        }
        })

        const topRatedList = api.get('/movie/top_rated', {
            params: {language:'ko-KR',
                    page:1
        }
        })

        const upcomingList = api.get(`/movie/upcoming?release_date.gte=${min_date}&release_date.lte=${max_date}`,{
            params: {language:'ko-KR',
                    page:1,
        }
        })

        const [popular, topRated, upComing] = await Promise.all([popularList, topRatedList, upcomingList])
        console.log(popular.data)
        console.log(topRated.data)
        console.log(upComing.data)
    }




    useEffect(()=>{
        // // popular
        // popularReq()
        
         
        // // Top Rated
        // topRateReq()
        
        // // Upcoming
        // upComingReq()
        getMovieList()

    },[])

  return (
    <div>
        Home
    </div>
  )
}

export default Home