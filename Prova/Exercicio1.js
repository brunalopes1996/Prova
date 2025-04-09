import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

  function Exercicio1(){
  const [salarioBase, setSalarioBase] = useState()
  const [qtdeHoras, setQtdeHoras] = useState()
  const [salarioFinal, setSalarioFinal] = useState()

 return (
    <View>
      <Text style={estilo.titulo}>Crie um aplicativo que receba:
                Salário base do funcionário
                Quantidade de horas trabalhadas no mês
                O sistema deve calcular o salário final considerando que:
                A jornada normal é de 160 horas/mês
                Horas acima de 160 são consideradas hora extra e pagas com acréscimo de 50% sobre o valor da hora normal
    </Text>
      <TextInput
          value={salarioBase}
          onChangeText={setSalarioBase}
          placeholder="Digite o salário base:  "
          style={estilo.input}
      />
      <TextInput
          value={qtdeHoras}
          onChangeText={setQtdeHoras}
          placeholder="Digite o salário base:  "
          style={estilo.input}
      />
      
      <Button
          title="Salário Final"
          color="blue"
          onPress={ 
              () => {
                if (qtdeHoras <= 160) {
                    setSalarioFinal((salarioBase / qtdeHoras) * (qtdeHoras))
                }
                else if (qtdeHoras < 160) {
                    setSalarioFinal((salarioBase / qtdeHoras) * (qtdeHoras * 1.5))
                }
          } 
        }
      />

        <Text>Preço do Produto: {preco}</Text>
        <Text>Á Vista: {aVista}</Text>
        <Text>Parcelado em 3x: {parcela}</Text>
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

export default Exercicio1