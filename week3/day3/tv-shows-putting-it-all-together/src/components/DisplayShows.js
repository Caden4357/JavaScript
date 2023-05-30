import React, {useState} from 'react';
import './DisplayShows.css'
const DisplayShows = (props) => {

    const {showList, setShowList} = props

    const toggleShow = (show) => {
        console.log(show);
        const updatedShowList = showList.map((tvShow) => {
            if (tvShow === show){
                // console.log(tvShow);
                tvShow.watchedShow = !tvShow.watchedShow
            }
            return tvShow
        })
        setShowList(updatedShowList)
    }
    const handleDeleteShow = (show) => {
        const updatedShowList = showList.filter((tvShow) => tvShow !== show)
        setShowList(updatedShowList)
    }
    return (
        <div className='flex-container jc-evenly'>
            {
                showList.map((show,idx) => (
                    <div key={idx} className='show-box'>
                        {
                            show.watchedShow?
                            <h2 className='line-through'>Title: {show.title}</h2>:
                            <h2>Title: {show.title}</h2>
                        }
                        <h2>Release Year: {show.releaseYear}</h2>
                        <h2>Genre: {show.genre}</h2>
                        <span>Watched this show?</span>
                        <input type="checkbox" name="watchedShow" defaultChecked={show.watchedShow} onClick={(e) => toggleShow(show)}/>
                        <button className='delete-button' onClick={() => handleDeleteShow(show)}>Delete Show</button>
                    </div>
                ))
            }
        </div>
)}

export default DisplayShows;