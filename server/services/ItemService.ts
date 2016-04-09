import AbstractRouteService from './AbstractRouteService';
import ItemModel from '../models/ItemModel';

export default class ItemService extends AbstractRouteService {
  
  create(): ItemService {
    return {
      path: "/items",
      router(req, res) {
        var model: ItemModel = new ItemModel();
      }
    }
  }
  
  read(): ItemService {
    return {
      path: "/items",
      router(req, res) {
        
      }
    }
  }
  
  update(): ItemService {
    return {
      path: "/items/:id",
      router(req, res) {
        
      }
    }
  }
  
  delete(): ItemService {
    return {
      path: "/items",
      router(req, res) {
        
      }
    }
  }
  
}