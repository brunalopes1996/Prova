import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

  function Exercicio2(){
  const [pedagio, setPedagio] = useState()
  const [distancia, setDistancia] = useState()
  const [tipoVeiculo, setTipoVeiculo] = useState()

 return (
    <View>
      <Text style={estilo.titulo}>Crie um aplicativo onde o usuário informe:
                                  Tipo de veículo (Carro, Moto, Caminhão)
                                  Distância percorrida (em km)
                                  O pedágio é cobrado com base no tipo de veículo:
                                  Carro: R$ 0,10 por km
                                  Moto: R$ 0,05 por km
                                  Caminhão: R$ 0,15 por km
                                  O app deve exibir o total a pagar.

    </Text>
      <TextInput
          value={tipoVeiculo}
          onChangeText={setTipoVeiculo}
          placeholder="Digite o tipo de veículo "
          style={estilo.input}
      />
      <TextInput
          value={distancia}
          onChangeText={setDistancia}
          placeholder="Digite a distância em KM:  "
          style={estilo.input}
      />
      
      <Button
          title="Pedágio"
          color="blue"
          onPress={ 
              () => {
                if (tipoVeiculo = "Carro")  {
                    setPedagio = distancia * 0.10;
                }
                else if (tipoVeiculo = "Moto")  {
                    setPedagio = distancia * 0.05;
                }
                else if (tipoVeiculo = "Caminhão")  {
                    setPedagio = distancia * 0.15;
                }
          } 
        }
      />
        <Text>O valor do pedágio é R$ {Number(pedagio).toFixed(2)}</Text>
    </View>
  )
}
      const estilo = StyleSheet.create({
      input: {
        backgroundColor: "white"
      }, 
      titulo: {
        fontSize: 16,
        fontWeight: "bold"
      }
    })

export default Exercicio2