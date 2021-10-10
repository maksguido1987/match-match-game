export interface IDBParams {
  name: string;
  surname: string;
  score: number;
  email: string;
  avatar?: string;
  id?: number;
}

export class Database {
  public db!: IDBDatabase;

  init(dbName: string, version?: number): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const iDB = window.indexedDB;
      const openRequest = iDB.open(dbName, version);
      openRequest.onupgradeneeded = () => {
        const database = openRequest.result;
        this.db = database;
        const store = database.createObjectStore('game-data-base', {
          keyPath: 'id',
          autoIncrement: true,
        });
        store.createIndex('name', 'name');
        store.createIndex('surname', 'surname');
        store.createIndex('score', 'score');
        store.createIndex('avatar', 'avatar');
        store.createIndex('email', 'email', { unique: true });
      };
      openRequest.onsuccess = () => {
        this.db = openRequest.result;
        resolve(this.db);
      };
      openRequest.onerror = () => {
        reject(openRequest.error);
      };
    });
  }

  write(params: IDBParams): Promise<IDBParams> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction('game-data-base', 'readwrite');
      if (transaction) {
        const store = transaction.objectStore('game-data-base');
        const index = store.index('email');
        const request = index.get(params.email);

        request.onsuccess = () => {
          const matching: IDBParams = request.result;
          if (matching) {
            const record: IDBParams = request.result;
            store.put({ ...params, id: record.id });
            resolve(record);
          } else {
            store.add(params);
          }
        };
        request.onerror = () => {
          reject(request.onerror);
        };
      }
    });
  }

  readAll(): Promise<Array<IDBParams>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction('game-data-base', 'readonly');
      const store = transaction.objectStore('game-data-base');
      const result = store.getAll();

      transaction.oncomplete = () => {
        resolve(result.result);
      };
      transaction.onerror = () => {
        reject(result.error);
      };
    });
  }

  readFiltered(): Promise<Array<IDBParams>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction('game-data-base', 'readonly');
      const store = transaction.objectStore('game-data-base');
      const result = store.index('score').openCursor(null, 'prev');
      const resData: Array<IDBParams> = [];
      result.onsuccess = () => {
        const cursor = result.result;
        if (cursor) {
          if (resData.length < 10) {
            resData.push(cursor.value);
            cursor.continue();
          }
        }
      };
      result.onerror = () => {
        reject(result.error);
      };
      transaction.oncomplete = () => {
        resolve(resData);
      };
    });
  }
}
