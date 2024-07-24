import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/tauri';


@Injectable({
  providedIn: 'root'
})
export class TauriService {

  constructor() { }


  get isTauri(): boolean {
    return !!(window && window.__TAURI__);
  }

  // // example
  // async tauri_function(js_input: string) {
  //   const rust_output: string = await invoke('save_inputs', { inputs: js_input });
  //   return rust_output
  // }



}