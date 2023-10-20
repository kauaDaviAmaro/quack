# Sistema de Defesa - Projeto SZ

Como executar:
- **[Como executar](#Como-Operar:-A-Ferramenta-de-Sobrevivência-no-Apocalipse-Zumbi)**

Para os Hospedeiros:

- **[Introdução](#introdução)**
- **[Regras de Aprimoramento](#regras-de-aprimoramento)**
  - [Regras de Idade](#regras-de-idade)
  - [Regras Específicas para Esportes](#regras-específicas-para-esportes)
  - [Regras Específicas para Sexo](#regras-específicas-para-sexo)
  - [Regras Específicas para Altura](#regras-específicas-para-altura)
  - [Regras Específicas para Peso](#regras-específicas-para-peso)
  - [Regras Específicas para Tipo Sanguíneo](#regras-específicas-para-tipo-sanguíneo)
  - [Regras Específicas para Gosto Musical](#regras-específicas-para-gosto-musical)
  - [Regras Específicas para Jogos Preferidos](#regras-específicas-para-jogos-preferidos)
- **[Nível de Periculosidade](#nível-de-periculosidade)**
- **[Fraquezas](#fraquezas)**

Para o Pato Destroyer 2000:

- **[Pato Destroyer 2000 - Habilidade de Defesa](#habilidade-de-defesa-do-pato-com-base-nos-atributos-do-hospedeiro)**
- **[Pato Destroyer 2000 - Habilidade de Ataque](#habilidade-de-ataque-do-pato-com-base-nas-fraquezas-do-hospedeiro)**

Ferramentas Utilizados:

- **[Ferramentas utilizadas](#Ferramentas-utilizadas)**

## Como Operar: A Ferramenta de Sobrevivência no Apocalipse Zumbi

Ao implementar, certifique-se de que o sistema está em execução em um serviço web ativo, como XAMPP, Wamp, ou utilize uma extensão como o live server para garantir a funcionalidade contínua.

Colocar os arquivos no serviço web

Acesse o endereço do aplicativo (geralmente: localhost://[nome_da_pasta]).

### Instruções de Uso:

- Use o botão "Adicionar" para incluir um novo hospedeiro no catálogo.
- Ao pesquisar ou encontrar um hospedeiro, clique para visualizar informações adicionais.
- Ao clicar no botão "Construir Chip", você poderá visualizar as Habilidades Especiais e Defesas Especiais do chip para o hospedeiro selecionado.

- A guia "Sobre" fornece informações adicionais.

Nota: O arquivo dados.json contém um conjunto de dados destinado a preencher a tabela com hospedeiros previamente configurados (utilizando o botao "upload").
Nota 2.0: O website é responsivo

## Introdução

Em um mundo infestado por zumbis, a necessidade de um sistema de defesa eficiente tornou-se crucial. Desenvolvemos um sistema que cataloga potenciais hospedeiros, identificando suas características cruciais para a criação de armas capazes de aniquilá-los.

## Características Catalogadas

| Categoria       | Descrição                          |
| --------------- | ---------------------------------- |
| Nome            | Nome do indivíduo                  |
| Idade           | Idade do indivíduo                 |
| Sexo            | Sexo do indivíduo                  |
| Peso e Altura   | Peso e altura do indivíduo         |
| Tipo Sanguíneo  | Tipo sanguíneo do indivíduo        |
| Gosto Musical   | Preferências musicais do indivíduo |
| Pratica Esporte | Esporte praticado pelo indivíduo   |
| Jogo Preferido  | Jogo favorito do indivíduo         |
| Força           | Nível de força (1 a 100)           |
| Agilidade       | Nível de agilidade (1 a 100)       |
| Inteligência    | Nível de inteligência (1 a 100)    |

## Regras de Aprimoramento

### Regras de Idade

- Idade abaixo de 16: Agilidade += 20
- Idade entre 18 e 25: Força += 12 e Agilidade += 10
- Idade entre 25 e 50: Força += 8 e Agilidade += 7
- Idade maior que 50: Força += 5 e Agilidade += 5

### Regras Específicas para Esportes

| Esporte                 | Modificações nos Atributos                               |
| ----------------------- | -------------------------------------------------------- |
| Luta                    | Força += 30, Agilidade += 10                             |
| Atletismo               | Agilidade += 30, Força += 10                             |
| Futebol                 | Agilidade += 10, Força += 15                             |
| Basquete                | Agilidade += 15, Força += 8, Inteligência += 8           |
| Vôlei                   | Agilidade += 7, Força += 10, Inteligência += 8           |
| eSports                 | Inteligência += 30                                       |
| Natação                 | Agilidade += 20, Força += 8                              |
| Outro - Pouco Relevante | Bônus pequeno de +5 para Força, Agilidade e Inteligência |

### Regras Específicas para Sexo

- Masculino: Força += 5
- Feminino: Inteligência += 5
- Outro: Agilidade += 5

### Regras Específicas para Altura

- Altura menor que 1.50: Força += 8, Agilidade += 10
- Altura entre 1.50 e 1.80: Força += 10, Agilidade += 8
- Altura maior que 1.80: Força += 14, Agilidade += 5

### Regras Específicas para Peso

| Peso                | Modificações nos Atributos  |
| ------------------- | --------------------------- |
| Peso entre 70 e 100 | Agilidade += 15, Força += 5 |
| Peso maior que 100  | Agilidade += 5, Força += 15 |
| Peso restante       | Agilidade += 5, Força += 5  |

### Regras Específicas para Tipo Sanguíneo

| Tipo Sanguíneo | Modificações nos Atributos        |
| -------------- | --------------------------------- |
| A+ e B-        | Agilidade += 5, Inteligência += 5 |
| B+ e A-        | Força += 6, Agilidade += 4        |
| AB+ e O-       | Inteligência += 8, Força += 4     |
| O+ e AB-       | Força += 8, Agilidade += 6        |

### Regras Específicas para Gosto Musical

| Gênero Musical | Modificações nos Atributos        |
| -------------- | --------------------------------- |
| Pop            | Agilidade += 4, Inteligência += 4 |
| Rock           | Força += 6, Agilidade += 4        |
| Pagode         | Agilidade += 8, Força += 4        |
| Sertanejo      | Força += 5, Agilidade += 4        |
| Hip-Hop/Rap    | Inteligência += 6, Agilidade += 4 |
| Eletrônica     | Agilidade += 5, Inteligência += 5 |
| Funk           | Força += 4, Agilidade += 5        |
| Metal          | Força += 8, Agilidade += 4        |
| Outros         | Inteligência += 8                 |

### Regras Específicas para Jogos Preferidos

| Jogo                                       | Modificações nos Atributos        |
| ------------------------------------------ | --------------------------------- |
| Counter-Strike, Valorant                   | Agilidade += 5, Inteligência += 4 |
| Minecraft, Fortnite                        | Inteligência += 15                |
| The Witcher, Assassin's Creed              | Inteligência += 8, Força += 6     |
| World of Warcraft, League of Legends, Dota | Inteligência += 10                |
| FIFA, Rocket League                        | Agilidade += 10                   |

## Nível de Periculosidade

O nível de periculosidade de cada indivíduo é calculado de forma extremamente complexa:

- Periculosidade = (Força _ 0.4) + (Agilidade _ 0.3) + (Inteligência \* 0.3)

## Fraquezas

- Agilidade < 20: Lerdo
- Inteligência < 20: Burro
- Força < 20: Fraco

Se o indivíduo não pratica nenhum esporte, é considerado sedentário.

# Arma Extremamente Secreta - Pato Destroyer 2000

Após extensos estudos, análise de dados e incidentes com café, nossos incríveis pesquisadores liderados pelo Dr. Quackenstein desenvolveram o Pato Destroyer 2000.

## Fraquezas

- **Agilidade < 20: Lerdo**
- **Descoordenação Motora (Agilidade entre 20 e 30)** 
- **Inteligência < 20: Burro**
- **Arrogância (Inteligência entre 20 e 30)**
- **Força < 20: Fraco** 
- **Altura < 70: Magra(o)**
- **Altura > 2.00: Altura Extrema**
- **Altura < 1.5: Claustrofobia**
- **Esporte = Nenhum**

# Arma Extremamente Secreta - Pato Destroyer 2000

Após extensos estudos, análise de dados e incidentes com café, nossos incríveis pesquisadores liderados pelo Dr. Quackenstein desenvolveram o Pato Destroyer 2000.

## Habilidade de Defesa do Pato (com base nos atributos do hospedeiro)

- **Agilidade > 60: Voo:** Se o hospedeiro possui uma agilidade superior a 60, o Pato Destroyer 2000 ativa sua habilidade de voo. O pato é capaz de desviar ágil e rapidamente dos ataques dos zumbis, tornando-se uma presa difícil.

- **Força > 60: Blindagem Natural:** Caso o hospedeiro apresente uma força excepcional, o Pato Destroyer 2000 utiliza sua habilidade de criar uma camada adicional de blindagem natural. Essa camada protege o pato de ataques físicos mais intensos, proporcionando uma defesa robusta contra zumbis particularmente fortes.

- **Inteligência > 60: Estratégias Avançadas:** Quando o hospedeiro demonstra alta inteligência, o Pato Destroyer 2000 é capaz de adotar estratégias avançadas de defesa. Isso inclui a capacidade de antecipar movimentos dos zumbis, identificar padrões de ataque e tomar decisões táticas para proteger efetivamente sua equipe.

- **Imunidade Reforçada (Tipo Sanguíneo A+ e B-): Escudo Antígeno:** Diante de um hospedeiro com imunidade reforçada devido ao tipo sanguíneo A+ ou B-

- **Resistência Muscular (Pratica Esporte - Luta): Esquiva Aprimorada:** Se o hospedeiro pratica esporte, especialmente luta, o Pato Destroyer 2000 utiliza sua esquiva aprimorada. 

- **Consciência Tática (Jogo Preferido - Estratégia): Barreira Estratégica:** Quando o hospedeiro tem uma consciência tática aprimorada devido ao seu jogo preferido ser de estratégia, o Pato Destroyer 2000 cria uma barreira estratégica.

- **Resistência ao Estresse (Gosto Musical - Eletrônica): Campo de Anulação Sonora:** Diante de um hospedeiro com resistência ao estresse devido ao gosto musical voltado para eletrônica, o Pato Destroyer 2000 cria um campo de anulação sonora.

## Habilidade de Ataque do Pato (com base nas fraquezas do hospedeiro)

- **Lerdo (Agilidade < 20): Investida Rápida:** Se o hospedeiro apresenta baixa agilidade (inferior a 20), o Pato Destroyer 2000 utiliza sua habilidade de investida rápida. O pato acelera em direção aos zumbis com uma velocidade surpreendente, atacando e desorientando-os.

- **Burro (Inteligência < 20): Confusão Tática:** Diante de um hospedeiro com baixa inteligência, o Pato Destroyer 2000 emprega táticas de confusão. O pato realiza movimentos imprevisíveis, confundindo os zumbis e desviando sua atenção, enquanto permite que outros membros da equipe ajam estrategicamente.

- **Fraco (Força < 20): Ataque Preciso:** Quando o hospedeiro demonstra fraqueza física, o Pato Destroyer 2000 utiliza sua habilidade de ataque preciso. O pato concentra seus ataques em pontos vitais dos zumbis, maximizando a eficácia de seus golpes e neutralizando ameaças com eficiência.

- **Descoordenação Motora (Agilidade entre 20 e 30): Ataque de Distração:** O pato cria movimentos rápidos e caóticos para desorientar os zumbis, criando aberturas para ataques estratégicos.

- **Sedentario: Estratégia de Desgaste:** O Pato Destroyer 2000, ao perceber a falta de condicionamento físico do hospedeiro, adota uma estratégia de desgaste.

- **Arrogância (Inteligência entre 20 e 30): Provocação Estratégica:**  Diante de um hospedeiro com arrogância, caracterizado por uma inteligência entre 20 e 30, o Pato Destroyer 2000 utiliza sua habilidade de provocação estratégica.

- **Magra(o): Ataque Ágil:** Se o hospedeiro possui uma constituição física magra, com peso inferior a 70, o Pato Destroyer 2000 emprega seu ataque ágil

- **Altura Extrema (Altura maior que 2.00): Ataque Aéreo Vertical:** Caso o hospedeiro tenha uma altura extrema, superior a 2.00, o Pato Destroyer 2000 utiliza sua habilidade de ataque aéreo vertical

- **Claustrofobia (Altura menor que 1.50): Ataque Subterrâneo:**  Se o hospedeiro sofre de claustrofobia devido à altura inferior a 1.50, o Pato Destroyer 2000 utiliza sua habilidade de ataque subterrâneo.


## Tecnologias Empregadas

Linguagens:
- HTML
- CSS
- JavaScript

Dark Mode:
- Utilização do [Darkmodejs](https://darkmodejs.learn.uno)

Criação de Imagens:
- Bing Image Creator
