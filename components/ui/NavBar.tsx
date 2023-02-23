import {useTheme, Text, Spacer} from '@nextui-org/react'
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
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt='Icon Pok'
            width={70}
            height={70}
        />
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okemón</Text>

        <Spacer css={{flex:1}}/>
        <Text color='white' h3>Favoritos</Text> 
        
    </div>
  )
}

export default NavBar