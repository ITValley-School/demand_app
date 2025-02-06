dmx.config({
  "painel_aluno": {
    "repeat_tasks_alunos": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "nome",
          "type": "text"
        },
        {
          "name": "descricao",
          "type": "text"
        },
        {
          "name": "estimativa_horas",
          "type": "number"
        },
        {
          "name": "nivel",
          "type": "text"
        }
      ],
      "outputType": "text"
    },
    "data_detalhes_tarefa": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "nome",
          "type": "text"
        },
        {
          "name": "descricao",
          "type": "text"
        },
        {
          "name": "estimativa_horas",
          "type": "number"
        },
        {
          "name": "nivel",
          "type": "text"
        }
      ],
      "outputType": "text"
    }
  },
  "ranking_selos": {
    "repeat_ranking": {
      "meta": [
        {
          "name": "ranking",
          "type": "number"
        },
        {
          "name": "nome",
          "type": "text"
        },
        {
          "name": "foto",
          "type": "text"
        },
        {
          "name": "total_pontos",
          "type": "number"
        }
      ],
      "outputType": "text"
    }
  },
  "resete_senha": {
    "query": [
      {
        "type": "text",
        "name": "token"
      }
    ]
  }
});
