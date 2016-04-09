import {Set} from 'typescript-collections/collections'

abstract class AbstractModel {
  
  private retrieveFields: string[];
  private updateFields: string[];
  
  abstract getTableName(): string;
  abstract getFields(): Set<string>;
  
  constructor(req?: any) {
    super();
    if(req) {
      getFields().forEach(field => {
        this.values[field] = req.body[field] || req.params[field];
      });
    }
  }
  
  hasField(field: string) {
    return getFields().has(field);
  }
  
  checkField(field: string) {
    if(!hasField(field))
      throw getTableName() + " has no field " + field;
  }
  
  set(field, value) {
    this.values[field] = value;
  }
  
  get(field) {
    return this.values[field];
  }
  
  retrieve(txn) {
    
  }
  
  insert(txn) {
    var valuesStr = "";
    var fields = getFields();
    var values = [];
    fields.forEach((field, i) => {
      values.push(this.values[field]);
      if(valuesStr)
        valuesStr += ",";
      valuesStr += "$" + (i+1);
    });
    
    var query = `insert into ${getTableName()}(${fields.join()}) values(${valuesStr})`;
    return txn.none(query, values);
  }
  
  update(txn) {
    
  }
  
  delete(txn) {
    
  }
  
  save(txn) {
    
  }
  
  clear() {
    
  }
  
  setRetrieveColumns(...fields : string[]) {
    this.retrieveFields = fields;
  }
  
  setUpdateColumns(...fields : string[]) {
    this.updateFields = fields;
  }
}

export default AbstractModel;