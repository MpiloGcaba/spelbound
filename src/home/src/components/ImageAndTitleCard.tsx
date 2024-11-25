import React from 'react';
import { TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { House } from '../models/HouseModel';

//Properties that will be pass on to component
interface ImageAndTitleCardProps {
  house: House;
  imageUrl: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ImageAndTitleCard: React.FC<ImageAndTitleCardProps> = ({ house,imageUrl, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Card style={styles.card}>
        <Card.Cover source={imageUrl} style={styles.image}/>
        <Card.Content>
          <Title>{house.name}</Title>
          <Paragraph>Founder: {house.founder}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  touchable: {
    marginBottom: 10,
  },
  image: {
    
    resizeMode: 'contain',
  },
});

export default ImageAndTitleCard;
