# Projeto Par ou Impar

Jogo web interativo de Par ou Impar desenvolvido com HTML, CSS e JavaScript puro. O jogador escolhe entre "Par" ou "Impar", digita um numero e compete contra a maquina, que gera um numero aleatorio. A soma dos dois numeros determina o vencedor.

---

## Demonstracao

> **Preview online:** [GitHub Pages](https://julio-rodrigo-s.github.io/Projeto-Par-ou-impar/)

---

## Estrutura do Projeto

```
Projeto-Par-ou-mpar/
├── index.html   # Estrutura da pagina: select, input numerico e botoes
├── styles.css   # Estilizacao com tema claro e botoes coloridos
└── script.js    # Logica do jogo: sorteio, calculo da soma e resultado
```

---

## Tecnologias Utilizadas

| Tecnologia | Finalidade                                                        |
|------------|-------------------------------------------------------------------|
| HTML5      | Estrutura com `<select>`, `<input type="number">` e `<button>`    |
| CSS3       | Layout centralizado, tema claro e botoes estilizados por estado   |
| JavaScript | Logica do jogo, sorteio da maquina e exibicao do resultado        |

---

## Como o Jogo Funciona

### Regras

1. O jogador escolhe **Par** ou **Impar** no menu suspenso
2. O jogador digita um numero inteiro positivo
3. A maquina sorteia um numero aleatorio entre **1 e 10**
4. Os dois numeros sao somados
5. Se a soma for par ou impar conforme o que o jogador escolheu, **o jogador vence**; caso contrario, **a maquina vence**

### Logica no Codigo

A maquina gera seu numero com `Math.floor(Math.random() * 10) + 1`. A soma e verificada com o operador modulo (`sum % 2 === 0`): se o resto for zero, a soma e par; caso contrario, e impar. O resultado e comparado com a escolha do usuario para determinar o vencedor.

O resultado completo e exibido em um `alert()` com todas as informacoes da rodada: escolha do jogador, numero jogado, numero da maquina, soma e resultado final.

### Reiniciar

Apos o resultado, a area de jogo e ocultada (`display: none`) e o botao "Jogar Novamente" aparece. Ao clicar, o campo e limpo e a interface retorna ao estado inicial.

---

## Funcionalidades

- [x] Selecao de Par ou Impar pelo usuario
- [x] Campo de entrada para numero do jogador
- [x] Sorteio aleatorio do numero da maquina (1 a 10)
- [x] Calculo da soma e verificacao do resultado
- [x] Exibicao detalhada do resultado via `alert()`
- [x] Validacao: impede jogar sem digitar um numero
- [x] Botao "Jogar Novamente" para reiniciar a rodada

---

## Como Executar Localmente

1. Clone o repositorio:
   ```bash
   git clone https://github.com/Julio-Rodrigo-S/Projeto-Par-ou-mpar.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Projeto-Par-ou-mpar
   ```

3. Abra o arquivo `index.html` diretamente no navegador.

> Nenhuma dependencia ou instalacao e necessaria. O projeto roda totalmente no lado do cliente (front-end puro).

---

## Contribuindo

Contribuicoes sao bem-vindas! Sinta-se a vontade para abrir uma *issue* ou enviar um *pull request* com melhorias ou correcoes.

---

## Licenca

Este projeto esta disponivel para uso livre para fins de estudo e pratica.

---

Desenvolvido por [Julio-Rodrigo-S](https://github.com/Julio-Rodrigo-S)
