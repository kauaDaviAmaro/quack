# Sistema de Defesa - Projeto SZ

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

- **Agilidade < 20: Lerdo:** [explicao]
- **Inteligência < 20: Burro:** [explicao]
- **Força < 20: Fraco:** [explicao]

- **Esporte = Nenhum:** [explicao]

# Arma Extremamente Secreta - Pato Destroyer 2000

Após extensos estudos, análise de dados e incidentes com café, nossos incríveis pesquisadores liderados pelo Dr. Quackenstein desenvolveram o Pato Destroyer 2000.

## Habilidade de Defesa do Pato (com base nos atributos do hospedeiro)

- **Agilidade > 60: Voo:** Se o hospedeiro possui uma agilidade superior a 60, o Pato Destroyer 2000 ativa sua habilidade de voo. O pato é capaz de desviar ágil e rapidamente dos ataques dos zumbis, tornando-se uma presa difícil.

- **Força > 60: Blindagem Natural:** Caso o hospedeiro apresente uma força excepcional, o Pato Destroyer 2000 utiliza sua habilidade de criar uma camada adicional de blindagem natural. Essa camada protege o pato de ataques físicos mais intensos, proporcionando uma defesa robusta contra zumbis particularmente fortes.

- **Inteligência > 60: Estratégias Avançadas:** Quando o hospedeiro demonstra alta inteligência, o Pato Destroyer 2000 é capaz de adotar estratégias avançadas de defesa. Isso inclui a capacidade de antecipar movimentos dos zumbis, identificar padrões de ataque e tomar decisões táticas para proteger efetivamente sua equipe.

## Habilidade de Ataque do Pato (com base nas fraquezas do hospedeiro)

- **Lerdo (Agilidade < 20): Investida Rápida:** Se o hospedeiro apresenta baixa agilidade (inferior a 20), o Pato Destroyer 2000 utiliza sua habilidade de investida rápida. O pato acelera em direção aos zumbis com uma velocidade surpreendente, atacando e desorientando-os.

- **Burro (Inteligência < 20): Confusão Tática:** Diante de um hospedeiro com baixa inteligência, o Pato Destroyer 2000 emprega táticas de confusão. O pato realiza movimentos imprevisíveis, confundindo os zumbis e desviando sua atenção, enquanto permite que outros membros da equipe ajam estrategicamente.

- **Fraco (Força < 20): Ataque Preciso:** Quando o hospedeiro demonstra fraqueza física, o Pato Destroyer 2000 utiliza sua habilidade de ataque preciso. O pato concentra seus ataques em pontos vitais dos zumbis, maximizando a eficácia de seus golpes e neutralizando ameaças com eficiência.
