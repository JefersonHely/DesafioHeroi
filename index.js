// Criando Héroi
const heroi = ("Grande Guerreiro")
let xp = 1

// Nível do Héroi
const classe = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascedente", "Imortal", "Radiante"]
switch (true) {
    case xp < 1001:
        console.log("O Herói de nome " + heroi + " está no nível de " + classe[0])
        break
    case xp < 2001:
        console.log("O Herói de nome " + heroi + " está no nível de " + classe[1])
        break
    case xp < 5001:
        console.log("O Herói de nome " + heroi + " está no nível de " + classe[2])
        break
    case xp < 7001:
        console.log("O Herói de nome " + heroi + " está no nível de " + classe[3])
        break
    case xp < 8001:
        console.log("O Herói de nome " + heroi + " está no nível de " + classe[4])
        break
    case xp < 9001:
        console.log("O Herói de nome " + heroi + " está no nível de " + classe[5])
        break
    case xp < 10001:
        console.log("O Herói de nome " + heroi + " está no nível de " + classe[6])
        break
}