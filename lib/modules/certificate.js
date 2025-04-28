// JavaScript Document

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

exports.generate_certificate = async function (options) {
    const aluno = this.parseRequired(options.aluno, 'string', 'Aluno é obrigatório.');
    const empresa = this.parseRequired(options.empresa, 'string', 'Empresa é obrigatória.');
    const tarefa = this.parseRequired(options.tarefa, 'string', 'Tarefa é obrigatória.');
    const horas = this.parseRequired(options.horas, 'number', 'Horas são obrigatórias.');

    const certificadoBase = await loadImage(path.resolve('public/assets/certificado_base.png'));
    const canvas = createCanvas(certificadoBase.width, certificadoBase.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(certificadoBase, 0, 0);

    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';

    ctx.fillText(aluno, 500, 300);
    ctx.fillText(empresa, 500, 350);
    ctx.fillText(tarefa, 500, 400);
    ctx.fillText(`${horas} horas`, 500, 450);

    const nomeArquivo = `${aluno.replace(/\s/g, '_')}_${Date.now()}.png`;
    const caminhoCertificado = path.resolve('public/certificados', nomeArquivo);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(caminhoCertificado, buffer);

    return {
        path: `/certificados/${nomeArquivo}`
    };
};
