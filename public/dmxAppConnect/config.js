dmx.config({
  "painel_admin": {
    "data_detai_entregavel": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "projeto_id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "datetime",
          "name": "prazo_de_entrega"
        },
        {
          "type": "text",
          "name": "nome_projeto"
        }
      ],
      "outputType": "array"
    },
    "repeat_subtask": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "entregavel_id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "number",
          "name": "estimativa_horas"
        },
        {
          "type": "text",
          "name": "status"
        }
      ],
      "outputType": "array"
    }
  }
});
