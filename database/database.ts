import { environment } from '../src/environments/environment';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { 
  createConnection, 
  Connection, 
  ConnectionOptions, 
  Query, 
  QueryError, 
  QueryOptions,
  RowDataPacket,
  OkPacket,
  FieldPacket
} from 'mysql2/promise';
import { Observable } from 'rxjs';

var app = express();
app.use(bodyParser.json({limit: '100mb'}));
app.use(express.static('public'));

/** 
 * Serviços de conexão ao MySQL.
 * 
 * @author rodrigo-novaes
*/
export class DatabaseService {

  private host: string = environment.databaseConfig.host;

  private user: string = environment.databaseConfig.user;

  private password: string = environment.databaseConfig.password;

  private database: string = environment.databaseConfig.database;

  /**
   * Parâmetros da conexão. Configura o *host* (padrão `'localhost'`), o nome de usuário *user*, 
   * a senha *password* e o banco de dados *database*.
   */
  private connectionConfig: ConnectionOptions = {
    host: this.host,
    user: this.user,
    password: this.password,
    database: this.database
  };

  /**
   * Objeto da conexão.
   */
  private connection: Connection;

  /** 
   * Cria uma nova conexão com o MySQL.
  */
  constructor() { 
    createConnection(this.connectionConfig).then((value: Connection) => {
      this.connection = value;
      this.connection.connect().then(() => {
        app.listen(8080);
      });
    }).catch((onrejected: any) => {
      throw onrejected;
    });
  }

}
