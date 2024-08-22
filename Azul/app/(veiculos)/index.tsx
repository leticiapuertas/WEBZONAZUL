import theme from "@/theme";
import { Text } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";

export default function Aluguel(){
    return(
        <ThemeProvider theme={theme}>
        <Container>
         <Text>Veículos </Text>
         <Text>Placa: </Text>
         <Text>Quantidade de horas: </Text>
         <Text>Telefone: </Text>
        </Container>  
        </ThemeProvider> 

)}

const Container = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`
// const Title = styled.Title`
//     height: 25rem;
//     width: 50rem;
//     border-radius: 1rem
   
// `