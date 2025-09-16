// Exercício 1 - IMC
function exercicio1() {
  let nome = prompt("Digite seu nome:")
  let altura = parseFloat(prompt("Digite sua altura em centímetros:")) / 100
  let peso = parseFloat(prompt("Digite seu peso em kg:"))
  let imc = peso / (altura * altura)
  let classificacao = ""

  if (imc < 16) classificacao = "Baixo peso muito grave"
  else if (imc < 17) classificacao = "Baixo peso grave"
  else if (imc < 18.5) classificacao = "Baixo peso"
  else if (imc < 25) classificacao = "Peso normal"
  else if (imc < 30) classificacao = "Sobrepeso"
  else if (imc < 35) classificacao = "Obesidade grau I"
  else if (imc < 40) classificacao = "Obesidade grau II"
  else classificacao = "Obesidade grau III"

  alert(`${nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`)
}

// Exercício 2 - Faixa Etária
function exercicio2() {
  let idade = parseInt(prompt("Digite sua idade:"))
  let faixa = ""
  if (idade >= 0 && idade < 15) faixa = "Criança"
  else if (idade < 30) faixa = "Jovem"
  else if (idade < 60) faixa = "Adulto"
  else faixa = "Idoso"
  alert(`Você é ${faixa}`)
}

// Exercício 3 - Frete
function exercicio3() {
  let distancia = parseFloat(prompt("Distância em km:"))
  let pecas = parseInt(prompt("Quantidade de peças:"))
  let regiao = parseInt(prompt("Região (1-Sudeste, 2-Sul, 3-Centro-Oeste):"))
  let rastreamento = prompt("Deseja rastreamento? (S/N):").toUpperCase() === "S"

  let valorPorPeca = regiao === 1 ? 1.2 : regiao === 2 ? 1.0 : 1.15
  let valorFretePecas = 0

  if (pecas <= 1000) {
    valorFretePecas = pecas * valorPorPeca
  } else {
    valorFretePecas = 1000 * valorPorPeca
    let excedente = pecas - 1000
    let desconto = regiao === 1 ? 0.12 : regiao === 2 ? 0.08 : 0.10
    valorFretePecas += excedente * (valorPorPeca * (1 - desconto))
  }

  let taxaRastreamento = rastreamento ? 200 : 0
  let valorPorKm = distancia
  let total = valorFretePecas + taxaRastreamento + valorPorKm

  alert(`Taxa rastreamento: R$${taxaRastreamento.toFixed(2)}\nFrete peças: R$${valorFretePecas.toFixed(2)}\nFrete distância: R$${valorPorKm.toFixed(2)}\nTotal: R$${total.toFixed(2)}`)
}

// Exercício 4 - Folha de Pagamento
function exercicio4() {
  let codigo = prompt("Código do funcionário:")
  let horas = parseInt(prompt("Horas trabalhadas no mês:"))
  let turno = prompt("Turno (M/V/N):").toUpperCase()
  let categoria = prompt("Categoria (F/G):").toUpperCase()
  let salarioMinimo = parseFloat(prompt("Digite o salário mínimo:"))

  let valorHora = 0
  if (categoria === "F") {
    if (turno === "M") valorHora = salarioMinimo * 0.1
    else valorHora = salarioMinimo * 0.12
  } else {
    if (turno === "N") valorHora = salarioMinimo * 0.18
    else valorHora = salarioMinimo * 0.15
  }

  let salarioInicial = horas * valorHora
  let auxilio = salarioInicial <= 800 ? salarioInicial * 0.25 : salarioInicial <= 1200 ? salarioInicial * 0.2 : salarioInicial * 0.15
  let salarioFinal = salarioInicial + auxilio

  alert(`Código: ${codigo}\nHoras: ${horas}\nValor Hora: ${valorHora.toFixed(2)}\nSalário Inicial: ${salarioInicial.toFixed(2)}\nAuxílio: ${auxilio.toFixed(2)}\nSalário Final: ${salarioFinal.toFixed(2)}`)
}

// Exercício 5 - Soma e Subtração
function exercicio5() {
  let num1 = parseFloat(prompt("Digite o primeiro número:"))
  let operacao = prompt("Digite a operação (soma ou subtracao):")
  let num2 = parseFloat(prompt("Digite o segundo número:"))

  function calculo(n1, n2, op) {
    return op === "soma" ? n1 + n2 : n1 - n2
  }

  let resultado = calculo(num1, num2, operacao)
  alert(`O resultado é: ${resultado}`)
}

//Exercício 6 - Data por extensão
function exercicio6() {
  let data = prompt("Digite a data no formato dd/mm/aaaa:")

  let partes = data.split("/")
  if (partes.length !== 3) {
    alert("Formato inválido. Use dd/mm/aaaa.")
    return
  }

  let diaTexto = partes[0]
  let mesTexto = partes[1]
  let anoTexto = partes[2]

  let dia = parseInt(diaTexto)
  let mes = parseInt(mesTexto)
  let ano = parseInt(anoTexto)

  if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    alert("A data deve conter apenas números.")
    return
  }

  if (mes < 1 || mes > 12) {
    alert("O mês deve estar entre 1 e 12.")
    return
  }

  let diasNoMes = diasDoMes(mes, ano)

  if (dia < 1 || dia > diasNoMes) {
    alert("O dia informado não é válido para este mês.")
    return
  }

  let nomeMes = nomeDoMes(mes)

  alert(`${dia} de ${nomeMes} de ${ano}`)
}

function diasDoMes(mes, ano) {
  if (mes === 1) {
    return 31
  } else if (mes === 2) {
    if (anoBissexto(ano)) {
      return 29
    } else {
      return 28
    }
  } else if (mes === 3) {
    return 31
  } else if (mes === 4) {
    return 30
  } else if (mes === 5) {
    return 31
  } else if (mes === 6) {
    return 30
  } else if (mes === 7) {
    return 31
  } else if (mes === 8) {
    return 31
  } else if (mes === 9) {
    return 30
  } else if (mes === 10) {
    return 31
  } else if (mes === 11) {
    return 30
  } else if (mes === 12) {
    return 31
  }
}

function nomeDoMes(mes) {
  if (mes === 1) {
    return "janeiro"
  } else if (mes === 2) {
    return "fevereiro"
  } else if (mes === 3) {
    return "março"
  } else if (mes === 4) {
    return "abril"
  } else if (mes === 5) {
    return "maio"
  } else if (mes === 6) {
    return "junho"
  } else if (mes === 7) {
    return "julho"
  } else if (mes === 8) {
    return "agosto"
  } else if (mes === 9) {
    return "setembro"
  } else if (mes === 10) {
    return "outubro"
  } else if (mes === 11) {
    return "novembro"
  } else if (mes === 12) {
    return "dezembro"
  }
}

function anoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true
  } else {
    return false
  }
}

