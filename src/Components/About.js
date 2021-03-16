import React from 'react';
import { Card } from 'react-bootstrap';

export const About = () => {
    return (
        <div>
            <h1>
                About us        
            </h1>
            <h2>
                Our MVC Model.
            </h2>
            <div style={{display:"flex",justifyContent:"space-around", flexWrap:"wrap",alignItems:"center"}}>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Our Mission</Card.Title>
                        <Card.Text>
                        You Sprout, We Bloom
                        is our only Mission at Elite Mantra. Our TechoFreaks and MarketingGeaks meet
                        you with their only mission to help you prosper in your business. 
                        Don't hire the company but hire the People as your Own.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Our Vision</Card.Title>
                        <Card.Text>
                        Internet Bolta Hai (Internet Speaks)
                        Since we know the Internet better, we understand that it speaks. 
                        Our Vision at Elite Mantra is to translate Internet to You and Vice Versa. 
                        We speak your language and our work speak as that of Internet.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Our Culture</Card.Title>
                        <Card.Text>
                        Customer is Family
                        You might have heard about common cultures that Customer 
                        is always right or Customer is God but for us at Elite Mantra, 
                        you are our Family and as our ancestors taught us 
                        that Family always Comes First
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    )
}
