import { GetStaticProps, NextPage} from 'next'
import {Layout} from '../components/layouts';
import { pokeApi } from '@/api';
import { Pokemon, PokemonResponse } from '@/interfaces';

interface Props{
  pokemons: Pokemon[]
}

const HomePage: NextPage<Props> =({pokemons})=>{  

  return(
    <>
      <Layout title='Listado Pokemon'>

        <h1>Hola Mundo</h1>

        
        {pokemons.map((pok:Pokemon, i)=>{
          return(
            <ul>
              <li>{i} - {pok.name}</li>
            </ul>
          )
        })}

        
      </Layout>
      
    </>
  )
}

export const getStaticProps: GetStaticProps = async(ctx)=>{

  const {data} = await pokeApi.get<PokemonResponse>('pokemon?limit=151')  

  return{
    props:{
      pokemons: data.results
    }
  }
}

export default HomePage;
