import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElementQueries{
    constructor(){}
    
    getElement(classTarget: string): any{
        return document.querySelector(classTarget);
    }

    getAttributeValue(classTarget: string, attr: string) : string{
        const el = this.getElement(classTarget);
        if(el)return el.getAttribute(attr);
        return "";
    }

    showElement(classTarget: string){
        const el = this.getElement(classTarget);
        el.setAttribute('class', this.getAttributeValue(classTarget, "class").replace(/ hidden/g, ""));
    }

    hideElement(classTarget: string){
        const el = this.getElement(classTarget);
        el.setAttribute('class', this.getAttributeValue(classTarget, "class") + " hidden");
    }
}