import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Row, Text, Grid, useTheme } from "@nextui-org/react";
import { Pokemon } from "@/interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const { theme } = useTheme();
  const gray = theme?.colors.gray900.value || "#ECEDEE";

  const handleClick = () => {
    router.push(`/pokemons/${pokemon.id}`);    
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card 
        isHoverable 
        isPressable
        onClick={handleClick}
       >
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.image} width="100%" height={140} />
        </Card.Body>
        <Card.Footer css={{ backgroundColor: `${gray}` }}>
          <Row justify="space-between">
            <Text css={{ color: "black" }} transform="capitalize">
              {pokemon.name}
            </Text>
            <Text css={{ color: "black" }}># {pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
