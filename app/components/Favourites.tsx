'use client'
import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import data from '../data';
import styles from '../../styles/All.module.scss';

interface CardData {
  cardIndex: number;
  avatarUrl: string;
  username: string;
  photoUrl: string;
}
const Favourites: React.FC = () => {
  const [likedCards, setLikedCards] = useState<number[]>([]);

  useEffect(() => {
    const savedLikedCards = localStorage.getItem('likedCards');
    if (savedLikedCards) {
      setLikedCards(JSON.parse(savedLikedCards));
    }
  }, []);

  const filteredData: CardData[] = data.filter((item: CardData) => likedCards.includes(item.cardIndex));

  return (
    <div className={styles.container}>
      {filteredData.map((item: CardData) => (
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

export default Favourites;
