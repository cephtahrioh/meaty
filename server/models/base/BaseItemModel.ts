import AbstractModel from './base/AbstractModel';
import {Set} from 'typescript-collections/collections';

export default class ItemModel {
  
  public fields: {(field: string): any} = {};
  
  
  
  getFields(): Set<string> {
    return fields;
  }
  
  getTableName(): string {
    return "ITEMS";
  }
  
}