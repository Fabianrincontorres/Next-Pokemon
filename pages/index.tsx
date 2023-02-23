import { GetStaticPaths, GetStaticProps, NextPage} from 'next'
import {Layout} from '../components/layouts';
import { pokeApi } from '@/api';
import { Pokemon, PokemonResponse } from '@/interfaces';

import { Grid } from '@nextui-org/react';
import PokemonCard from '@/components/pokemon/PokemonCard';

interface Props{
  pokemons: Pokemon[]
}

const HomePage: NextPage<Props> =({pokemons})=>{  

  return(
    <>
      <Layout title='Listado Pokemon'>

        <Grid.Container
          gap={2}
          justify='flex-start'
        >
               
            {pokemons.map((pok:Pokemon, i)=>{
              return(                 
                  <PokemonCard
                    key={i+1}
                    pokemon={pok}
                  />                
              )
            })}          
        </Grid.Container>
      </Layout>
      
    </>
  )
}

export const getStaticProps: GetStaticProps = async(ctx)=>{

  const {data} = await pokeApi.get<PokemonResponse>('pokemon?limit=151')  

  const pokearray:Pokemon[] = data.results.map((pok, i)=>{    
    return(
      {
        ...pok,
        id: i+1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
      }
    )
  })

  return{
    props:{
      pokemons: pokearray
    }
  }
}


export default HomePage;
