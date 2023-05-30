import React, {useState} from 'react';
import { CountProvider } from '../context/CountContext';
import Nav from '../components/Nav'
import Count from '../components/Count'
import UserForm from '../components/UserForm'


const Main = (props) => {
    return (
        <>
            <CountProvider>
                <UserForm/>
                <Nav/>
                <Count/>
            </CountProvider>
        </>
)}

export default Main;