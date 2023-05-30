import React, {useState} from 'react';
import AlbumForm from '../components/AlbumForm';
import DisplayAlbum from '../components/DisplayAlbums';
import Nav from '../components/Nav';

const Main = (props) => {
    const [recordList, setRecordList] = useState([])
    const {userId, setUserId} = props
    return (
        <>
            <Nav userId={userId}/>
            <AlbumForm recordList={recordList} setRecordList={setRecordList}/>
            <DisplayAlbum recordList={recordList} setRecordList={setRecordList}/>
        </>
)}

export default Main;