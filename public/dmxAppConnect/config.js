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
  },
  "certificados": {
    "gerar_certificados_detail": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "usuario_id"
        },
        {
          "type": "number",
          "name": "tarefa_id"
        },
        {
          "type": "datetime",
          "name": "data_atribuicao"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "data_enviada"
        },
        {
          "type": "datetime",
          "name": "data_aprovada"
        },
        {
          "type": "text",
          "name": "info_envio"
        },
        {
          "type": "number",
          "name": "pontos"
        },
        {
          "type": "text",
          "name": "certificado_url"
        },
        {
          "type": "text",
          "name": "nome_tarefa"
        },
        {
          "type": "text",
          "name": "descricao_tarefas"
        },
        {
          "type": "number",
          "name": "estimativa_horas_tarefas"
        },
        {
          "type": "text",
          "name": "nivel_tarefas"
        },
        {
          "type": "text",
          "name": "programa"
        }
      ],
      "outputType": "array"
    },
    "flow_certificados": {
      "meta": {},
      "local": [
        {
          "name": "sc_gerar_certificado",
          "type": "object",
          "metaData": {
            "_get_inp_fld_2programa": {
              "meta": null,
              "outputType": "text"
            },
            "_get_inp_fld_3tarefa_id": {
              "meta": null,
              "outputType": "number"
            },
            "_get_inp_fld_0tarefa": {
              "meta": null,
              "outputType": "text"
            },
            "_get_inp_fld_1horas": {
              "meta": null,
              "outputType": "number"
            }
          }
        }
      ]
    }
  },
  "create_country": {
    "repeat_task": {
      "meta": [
        {
          "name": "query_paises",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "text",
              "name": "nome"
            },
            {
              "type": "text",
              "name": "imagem_url"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "repeat_paises": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "imagem_url"
        }
      ],
      "outputType": "array"
    }
  }
});
