import axios from "axios";
import { useState } from "react";
import "../styles/home.scss"

const Home = (props) => {
    const years = [
        2020,2010,2000,1990,1980,1970,1960,1950
    ]
    const year = [
        2022,2021,2020,
        2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,
        2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,
        1999,1998,1997,1996,1995,1994,1993,1992, 1991, 1990,
        1899,1898,1897,1896,1895,1894,1893,1892, 1891, 1890,
        1799,1798,1797,1796,1795,1794,1793,1792, 1791, 1790,
        1699,1698,1697,1696,1695,1694,1693,1692, 1691, 1690,
        1599,1598,1597,1596,1595,1594,1593,1592, 1591, 1590,
    ]
    
    const genreFilter = () => {
        if (props.genres !== undefined) {
            return props.genres.map((v,i) => {
                return  <>
                            <option value={v.id} id={v.id} key={v.id}>{v.name}</option>      
                        </> 
            })
        }
      }
    
      const yearsFilter = () => {
            return years.map((v,i) => {
                return  <>
                            <option value={v} key={v.i}>{String(v + "s")}</option>      
                        </> 
            })
      }
      const yearFilter = () => {
            return year.map((v,i) => {
                return  <>
                            <option value={v} key={v.i}>{String(v)}</option>      
                        </> 
            })
      }
      const ratingFilter = () => {
        const array = [10,9,8,7,6,5,4,3,2,1]
        return array.map((v,i) => {
            return  <>
                        <option value={v} key={v}>{String(v)}</option>      
                    </> 
        })
      }
    

    return ( 
        <div className="homepage">
            <form className="filters" onSubmit={props.getMovie}>
                        <label className="genre-list">Genres</label>
                            <select onChange={(e) => {props.setGenre("&with_genres=" + e.target.value)}} className="genre-list" name="genre" value={props.genre} >
                            {genreFilter()}
                            </select>
                        <label className="rating-list">Rating</label>
                            <select onChange={(e) => {props.setRating("&vote_average.gte=" + e.target.value)}} className="rating-list"name="rating" id="rating-list">
                                {ratingFilter()}
                            </select>
                        <label className="year-list">Year</label>
                            <select onChange={(e) => {props.setYear("&primary_release_year=" + e.target.value)}} className="year-list" name="year" value={year}>
                                {/* <optgroup label="Years"></optgroup>
                                {yearsFilter()} */}
                                <optgroup label="Year"></optgroup>
                                {yearFilter()}
                            </select>
                        <button className="submit-btn">press</button>
                        {/* <button className="submit-btn">Find Other Movies</button> */}
            </form>
        </div>
        
     );
}
 
export default Home;