  import React from 'react';
  import Card from '../components/card';
  import styles from '../../styles/All.module.scss';
  import data from '../data'

   
  interface CardData {
    cardIndex: number;
    avatarUrl: string;
    username: string;
    photoUrl: string;
  }
  function Posts() {

    

    return (
      <div className={styles.container}>
        {data.map((item:CardData) => (
          <Card
            key={item.cardIndex}
            cardIndex={item.cardIndex}
            avatarUrl={item.avatarUrl}
            username={item.username}
            photoUrl={item.photoUrl}
          />
        ))}
      </div>
    );
    
  }

  export default Posts;
 
