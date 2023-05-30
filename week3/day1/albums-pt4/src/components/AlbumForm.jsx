import React, {useState} from 'react';
import './AlbumForm.css'

const AlbumForm = (props) => {

    const {albumList, setAlbumList} = props
    // const [albumList, setAlbumList] = useState([])
    const [album, setAlbum] = useState({
        id: null,
        albumName:'',
        bandName:'',
        releaseYear:1900,
        recordsSold:0
    })


    const onChangeHandler = (e) => {
        // setAlbum({...album, [e.target.name]: e.target.value})
        setAlbum(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }


    const runValidations = () => {
        let isValid = true
        if (album.albumName.length < 3 || album.bandName.length < 3 || album.releaseYear < 1900 || album.recordsSold < 0){
            console.log('There was errors')
            isValid = false
            return isValid
        }
        else{
            return isValid
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = runValidations();
        console.log(isValid)
        if (isValid){
            // console.log(`New Album ${JSON.stringify(album)}`)
            let newRecord = {...album, id:crypto.randomUUID()}
            console.log(newRecord)
            // setAlbum(newRecord)
            setAlbumList([...albumList, newRecord])
            setAlbum({
                id:null,
                albumName:'',
                bandName:'',
                releaseYear:1900,
                recordsSold:0
            })
        }else{
            return isValid
        }
    }

    return (
        <>
            <div className='d-flex'>
                <form onSubmit={handleSubmit}>
                    
                    <h2>Add Your Favorite Album</h2>
                    <label htmlFor="albumName">Album Name:</label>
                    <input type="text" name='albumName' onChange={onChangeHandler} value={album.albumName}/>
                    {
                        album.albumName.length > 0 && album.albumName.length < 3?
                        <p className='error-red'>Album name must be 3 or more characters</p>:
                        null
                    }

                    <label htmlFor="bandName">Band Name:</label>
                    <input type="text" name='bandName' onChange={onChangeHandler} value={album.bandName}/>

                    {
                        album.bandName.length > 0 && album.bandName.length < 3?
                        <p className='error-red'>Band name must be 3 or more characters</p>:
                        null
                    }

                    <label htmlFor="releaseYear">Release Year:</label>
                    <input type="number" name='releaseYear' onChange={onChangeHandler} value={album.releaseYear}/>

                    {
                        album.releaseYear < 1900 ?
                        <p className='error-red'>Release year cannot be before 1900</p>:
                        null
                    }

                    <label htmlFor="recordsSolds">Records Sold:</label>
                    <input type="number" name='recordsSold' onChange={onChangeHandler} value={album.recordsSold}/>

                    {
                        album.recordsSold < 0?
                        <p className='error-red'>Cannot have negative records sales</p>:
                        null
                    }
                    <button>Add Album</button>
                </form>
            </div>
        </>
)}

export default AlbumForm;