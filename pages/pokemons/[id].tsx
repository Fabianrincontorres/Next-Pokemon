import { FC } from "react";
import { Layout } from "@/components/layouts"
import { GetStaticPaths, GetStaticProps } from "next";
import { pokeApi } from "@/api";
import { PokemonDetails } from "@/interfaces";
import { Grid, Card, Row, Text, Button, Container, Image} from "@nextui-org/react";

interface Props{
    pokemon: PokemonDetails
}

const PokemonPage: FC<Props> = ({pokemon}) => {
   console.log(pokemon)

  return (
    <Layout title='Pokémon'>
        <Grid.Container css={{marginTop: '5px'}} gap={2}>
            <Grid xs={12} sm={4}>
                <Card isHoverable css={{padding: '30px'}}>
                    <Card.Body>
                        <Card.Image
                            src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt={pokemon.name}
                            width="100%"
                            height={200}
                        /> 
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                        <Text css={{textTransform: 'capitalize'}} h1>{pokemon.name}</Text>
                        <Button color="gradient" ghost>Guardar en Favoritos</Button>
                    </Card.Header>

                    <Card.Body>
                        <Text size={30}>Sprites: </Text>
                        <Container direction="row" display="flex">
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async(ctx)=>{

    const zeroarray = Array(151).fill('0')
    const pokparams = zeroarray.map((value,i)=>{
        return(value = `${i+1}`)
    })

    return{
        paths: pokparams.map(value=>{
            return({
                params: {id: value}
            })
        }),   
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async({params})=>{
    
    const {id} = params as {id:string};
    const data= await pokeApi.get<PokemonDetails>(`/pokemon/${id}`)
        
    return{
        props:{
            pokemon: data.data
        }
    }
}


export default PokemonPage