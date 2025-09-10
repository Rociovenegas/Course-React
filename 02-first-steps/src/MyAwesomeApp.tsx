import React from 'react';


type MyAwesomeAppProps = {
    name: string;
    lastName: string;
};

const myStyles: React.CSSProperties = {
    backgroundColor: '#6a6afa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
};

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá',
};

export const MyAwesomeApp = (props: MyAwesomeAppProps) => {
    return (
        <div data-testid='div-app-01'>
            <h1 data-testid='Test-01'> Mongi </h1>
            <h3 className='mi-clase'> Hermosa </h3>
            <h1>Hello, {props.name}!</h1>
            <h3>{props.lastName} :3</h3>



            <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    );
};