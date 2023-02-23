import {useTheme, Text, Spacer} from '@nextui-org/react'
import NextLink from 'next/link';
import Image from 'next/image';

const NavBar = () => {

  const {theme} = useTheme();
  const gray = theme?.colors.gray900.value
  
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        backgroundColor: gray,
        alignItems: 'center',
        padding: '0 20px',
        justifyContent: 'start',
        
    }}>
      <NextLink href={'/'}>
        
          <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt='Icon Pok'
                width={70}
                height={70}           
            />

     
      </NextLink>

      <Text color='#16181A' h2>P</Text>
      <Text color='#16181A' h3>okemón</Text>
      
        

        <Spacer css={{flex:1}}/>

        <NextLink href={'/favorites/favorites'} passHref>
          <Text color='#16181A' h3
            onClick={()=>{
              console.log("Favoritos")
            }}
            css={{
              cursor: 'pointer'
            }}
          >Favoritos</Text> 
        </NextLink>
        
        
    </div>
  )
}

export default NavBar