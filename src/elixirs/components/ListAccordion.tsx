import React from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';
import { List } from "react-native-paper";
import { Elixir } from "../models/ElixirsModels";

interface AccordionProps{
    elixir: Elixir
}

const ListAccordion: React.FC< AccordionProps> = ({elixir}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchable}>
    <List.Section title="Accordions">
      <List.Accordion
        title={elixir.name}>
        <List.Item title={elixir.sideEffects} />
        <List.Item title={elixir.difficulty} />
      </List.Accordion>
    </List.Section>
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

export default ListAccordion;