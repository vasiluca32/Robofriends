import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    //if statement to check if ErrorBoundry works.
    
    // if (true){
    //     throw new Error('noooooo');
    // }
    return (
        <div>
            {robots.map((user, index) => {
        return  <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
    })}
        </div>
        
    );
}

export default CardList;