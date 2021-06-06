import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import bandsUrl from '../config';
const dataExample = 
    {
        id:0,
        image: 'https://i.postimg.cc/pd5RNwrM/resume-Photo.jpg',
        background: 'https://i.postimg.cc/kgCznDcc/MBackground.jpg',
        name: 'HAMZA',
        style: ['ROCK', 'BLUES'],
        email: 'asba@gmail.com',
        description: 'bla bla bla and also why not bleu bleu or Blue BLue? may be not bleu, because it should be a band musical experience, maybe discography...',
        country: 'USA',
        city: 'Tracy',
        lineup: 4,
        instruments: ['GUITAR', 'DRUMS', 'KEYBOARD', 'VOCALS'],
        state: "Washington",
        zipcode: 34532,
        sound: true
    },

const bandProfile = props => {

}