
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';

export default function Signup() {
    return (
        <>
            <Navbar />
            <HomeHero
                title="Signup"
                btnClass="hide"
                cName="hero-mid"
                heroImg={"https://images.unsplash.com/photo-1529154036614-a60975f5c760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"}
            />
            <SignupForm />
            <Footer />
        </>
    )
}