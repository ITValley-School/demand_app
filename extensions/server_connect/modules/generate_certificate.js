const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

exports.generate = async function (options) {
    const aluno = this.parseRequired(options.aluno, 'string', 'Nome do aluno é obrigatório.');
    const tarefa = this.parseRequired(options.tarefa, 'string', 'Nome da tarefa é obrigatória.');
    const horas = this.parseRequired(options.horas, 'number', 'Horas realizadas são obrigatórias.');
    const programa = this.parseRequired(options.programa, 'string', 'Programa é obrigatório.');

    // Carrega as fontes personalizadas
    registerFont(path.resolve('public/assets/fonts/Italianno-Regular.ttf'), { family: 'Italianno' });
    registerFont(path.resolve('public/assets/fonts/Montserrat-Regular.ttf'), { family: 'Montserrat' });

    // Escolhe o fundo baseado no programa
    const caminhoImagem = programa.toLowerCase() === 'pos'
        ? path.resolve('public/assets/certificados/certificado_en.jpg')
        : path.resolve('public/assets/certificados/certificado_pt.jpg');

    const certificadoBase = await loadImage(caminhoImagem);
    const canvas = createCanvas(certificadoBase.width, certificadoBase.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(certificadoBase, 0, 0);

    // Nome do aluno
    ctx.font = '91px Italianno';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText(aluno, canvas.width / 2, 410);

    // Descrição
    ctx.font = '15px Montserrat';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';

    const descricao = programa.toLowerCase() === 'pos'
        ? `Completed the task "${tarefa}" with a total of ${horas} hours.`
        : `Realizou a tarefa "${tarefa}" com duração de ${horas} horas.`;

    ctx.fillText(descricao, canvas.width / 2, 470);

    const nomeArquivo = `${aluno.replace(/\s/g, '_')}_${Date.now()}.png`;
    const caminhoCertificado = path.resolve('public/certificados', nomeArquivo);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(caminhoCertificado, buffer);

    return {
        path: `/certificados/${nomeArquivo}`
    };
};
