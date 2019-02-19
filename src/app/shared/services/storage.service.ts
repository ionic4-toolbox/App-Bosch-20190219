import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { from, Observable } from 'rxjs';

export enum StorageValues {
  IONIC = 'ionic',
  NATIVE = 'native',
  LOCALSTORAGE = 'localstorage'
}

/**
 * @author Alain Iglesias Herrera
 *
 * @description Angular Service for setting pair key/value into different storages types.
 * Works with localstorage, ionic/storage and Native Storage.
 *
 * @example this.storageService.set('myKey', 'Data for saving into storage', 'ionic');
 */

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private _ionic: Storage,
    private _native: NativeStorage
  ) { }
  /**
   * Sets pair key/value into the selected storage type
   * @param key storage key
   * @param data storage data
   * @param type storage type ex. localstorage, ionic, native
   */
  set(key, data, type) {
    switch (type) {
      case 'native': {
        this._native.setItem(key, data);
        break;
      }
      case 'ionic': {
        this._ionic.set(key, data);
        break;
      }
      default: {
        localStorage.setItem(key, data);
      }
    }
  }
  /**
   * Gets the value given a key from the selected storage type
   * @param key storage key
   * @param type storage type ex. localstorage, ionic, native
   * @returns an Observable to subscribe to.
   * @example this.storageService.get('myKey', 'ionic').subscribe(value => this.myVal = value)
   */
  get(key, type): Observable<any> {
    switch (type) {
      case 'native': {
        return from(this._native.getItem(key));
      }
      case 'ionic': {
        return from(this._ionic.get(key));
      }
      default: {
        return from(localStorage.getItem(key));
      }
    }
  }
  /**
   * Gets ionic individual storage and promise based key value
   * @param key storage key
   */
  async getIonic(key): Promise<any> {
    return await this._ionic.get(key);
  }
  /**
   * Removes pair key/value from the selected storage
   * @param key storage key
   * @param type storage type ex. localstorage, ionic, native
   */
  remove(key, type) {
    switch (type) {
      case 'native': {
        this._native.remove(key);
        break;
      }
      case 'ionic': {
        this._ionic.remove(key);
        break;
      }
      default: {
        localStorage.removeItem(key);
      }
    }
  }
  /**
   * Clears the entire storage
   * @param type storage type ex. localstorage, ionic, native
   */
  clear(type) {
    switch (type) {
      case 'native': {
        this._native.clear();
        break;
      }
      case 'ionic': {
        this._ionic.clear();
        break;
      }
      default: {
        localStorage.clear();
      }
    }
  }
}
