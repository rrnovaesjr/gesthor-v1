
/** 
 * Mapeador de um objeto retornado pela consulta SQL para um objeto
 * tratado pela aplicação. 
*/
var mapperCliente =  {

    /**
     * Retorna o objeto a partir do corpo de resposta da consulta SQL.
     * 
     * @param sqlResult Objeto com as relações coluna SQL x valor.
     */
    sqlToObject: function(sqlResult) {
        return {
            id: sqlResult.id,
            nomeRazaoSocial: sqlResult.nome_razaosocial,
            cpfOuCnpj: sqlResult.cpf_cnpj,
            endereco: sqlResult.endereco,
            numero: sqlResult.numero,
            bairro: sqlResult.bairro,
            cidade: sqlResult.cidade,
            estado: sqlResult.estado,
            pais: sqlResult.pais,
            cep: sqlResult.cep,
            telefoneComercial: sqlResult.telefone_comercial,
            fax: sqlResult.fax,
            telefoneCelular: sqlResult.telefone_celular,
            email: sqlResult.email,
            descricao: sqlResult.descricao
        }
    },

    /**
     * Retorna a descrição do SQL a partir do objeto.
     * 
     * @param object Objeto com as informações do cliente.
     */
    objectToSql: function(object) {
        return {
            id: object.id,
            nome_razaosocial: object.nomeRazaoSocial,
            cpf_cnpj: object.cpfOuCnpj,
            endereco: object.endereco,
            numero: object.numero,
            bairro: object.bairro,
            cidade: object.cidade,
            estado: object.estado,
            pais: object.pais,
            cep: object.cep,
            telefone_comercial: object.telefoneComercial,
            fax: object.fax,
            telefone_celular: object.telefoneCelular,
            email: object.email,
            descricao: object.descricao
        }
    },

    /**
     * Retorna muitos objetos a partir de um *array* de respostas SQL.
     * 
     * @param sqlResults *array* de respostas SQL.
     */
    manySqlToObjects: function(sqlResults) {
        let res = [];
        for(let sql of sqlResults) {
            res.push(this.sqlToObject(sql));
        }
        return res;
    }
}

/**
 * Exporta as funções de mapeamento para os módulos interessados.
 */
module.exports = { mapperCliente }