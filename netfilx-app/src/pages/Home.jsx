import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../api'
import {MovieReducerActions} from '../redux/reducers/movieSlice'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import PacmanLoader from 'react-spinners/PacmanLoader'
import Button from 'react-bootstrap/Button';


const Home = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [random, setRandom] = useState(null)
    const [genreList, setGenreList] = useState(null)
    const {popularMovies,topRatedMovies,upcomingMovies} = useSelector((state)=>state.movie)
    const [pop, setPop] = useState(popularMovies)
    const [top, setTop] = useState(topRatedMovies)
    const [up, setUp] = useState(upcomingMovies)


    // const popularReq = async()=>{
    //     let res = await api.get('/movie/popular',{
    //         params: {language:'ko-KR',
    //                 page:1
    //     }
    //     })
    //     console.log(res.data)
    // }

    // const topRateReq = async()=>{
    //     let res = await api.get('/movie/top_rated', {
    //         params: {language:'ko-KR',
    //                 page:1
    //     }
    //     })
    //     console.log(res.data)
    // }

    // const upComingReq = async()=>{
    //     let min_date = '2023-09-24'
    //     let max_date = '2023-10-21'

    //     let res = await api.get(`/movie/upcoming?release_date.gte=${min_date}&release_date.lte=${max_date}`,{
    //         params: {language:'ko-KR',
    //                 page:1,
    //     }
    //     })
    //     console.log(res.data)
    // }


    // 3가지 종류의 영화 목록을 묶어서 요청하는 방법
    const getMovieList = async()=>{
        setLoading(true)
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

        setTimeout(()=> {
            setLoading(false)
          }, 1000);
        // reducer 함수 호출해서 popular, topRated, upComing 데이터 redux 변수에 대입

        setPop(popular.data.results)
        setTop(topRated.data.results)
        setUp(upComing.data.results)
        dispatch(MovieReducerActions.initData({popular:popular.data, topRated:topRated.data, upComing:upComing.data}))
    }

    // 장르리스트 
    const getGenres = async()=>{
        let data = await api.get('/genre/movie/list', {
            params : { language : 'ko'}
        })
        setGenreList(data.data.genres)
        dispatch(MovieReducerActions.genreData(data.data.genres))
        console.log(data.data.genres)
    }

    // 장르 선택 버튼
    const genreChoice = (e)=>{
        let choice = e.target.innerText
        let findId = genreList.find((item)=>item.name === choice).id
        let filter1 = popularMovies.filter((item)=> 0 < item.genre_ids.filter((tem)=>tem === findId).length)
        let filter2 = topRatedMovies.filter((item)=> 0 < item.genre_ids.filter((tem)=>tem === findId).length)
        let filter3 = upcomingMovies.filter((item)=> 0 < item.genre_ids.filter((tem)=>tem === findId).length)
        console.log(popularMovies)
        setPop(filter1)
        setTop(filter2)
        setUp(filter3)
    }

    const allChoice=()=>{
        setPop(popularMovies)
        setTop(topRatedMovies)
        setUp(upcomingMovies)
    }




    useEffect(()=>{
        // // popular
        // popularReq()
        
         
        // // Top Rated
        // topRateReq()
        
        // // Upcoming
        // upComingReq()
        let num = parseInt(Math.random()*20)+1
        getGenres()
        setRandom(num)
        getMovieList()

    },[])

  return (
    <div>
        {loading?(
        <div className='main-loading'>
            <PacmanLoader loading={loading} color={'yellow'} size={'50'} speedMultiplier={'1'}/>
        </div>)
        :
        (<div>
            {popularMovies && <Banner movieData={popularMovies[random]}/>}
            {/* 장르 필터 버튼 */}
            <Button variant="outline-danger" className='genre-btn' onClick={allChoice}>전체</Button>
            {genreList?.map((item,index)=><Button key={index} variant="outline-danger" className='genre-btn' onClick={genreChoice}>{item.name}</Button>)}
            {pop && (<div><MovieSlide list={'Popular Moive'} movies={pop}/>
            <MovieSlide list={'Top rated Moive'} movies={top}/>
            <MovieSlide list={'UpcomingMovie Moive'} movies={up}/></div>)}
        </div>)}
    </div>
  )
}

export default Home