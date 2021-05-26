import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ArtistForm = props => {
    const [btnColor, setBtnColor] = useState('yellowgreen');
    const [bandName, setBandName] = useState('');
    const [bandStyle, setBandStyle] = useState('');
    const [bandLineUp, setBandLineUp] = useState(0);
    const [bandZipCode, setBandZipCode] = useState(0);
    const [bandSoundSystem, setBandSoundS] = useState(true);

   function handleClick() {
        btnColor === 'red'? setBtnColor('blue') : setBtnColor('red')
        console.log(bandName, bandStyle, bandLineUp, bandZipCode, bandSoundSystem)
    }
    return (
        <div>
            <Form className="band-form">
                <FormGroup>
                    <Label htmlFor="bandNameInput">Your name</Label>
                    <Input type="text" name="bandName" id="bandNameInput" placeholder="at least 5 caracters" 
                        onChange={(e) => setBandName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="nandStyleInput" >Style</Label>
                    <Input type="text" name="style" id="nandStyleInput" placeholder="Rock, blues, metal..." 
                        onChange={(e) => setBandStyle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="bandLineUpInput">Line-up</Label>
                    <Input type="number" name="lineUp" id="bandLineUpInput" placeholder="how many band memebers" 
                        onChange={(e) => setBandLineUp(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="bandzipCodeInput">Zip-code</Label>
                    <Input type="text" name="zipCode" id="bandzipCodeInput" placeholder="95376.." 
                        onChange={(e) => setBandZipCode(e.target.value)}
                    />
                </FormGroup>
                <FormGroup style={{marginLeft: 20}}> 
                    <Label>
                        <Input type="checkbox" name="bandSoundSystem" name="soundSystem" checked={bandSoundSystem}
                            onChange={(e) => setBandSoundS(e.target.checked)}
                            
                        />
                        Reliable sound system
                    </Label>
                </FormGroup>
                <Button 
                    id="namdFormSubmit-btn"
                    style={{backgroundColor: btnColor}}
                    onClick={() => handleClick()}
                    >Submit</Button>
            </Form>
        </div>
    )
}

export default ArtistForm;