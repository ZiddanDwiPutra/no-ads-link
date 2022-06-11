import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { addDoc, collection, doc, Firestore, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
    app: FirebaseApp;
    db: Firestore;
    get KEY(){
        return{
            links: "links",
        }
    }

    constructor() { 
        const firebaseConfig = {
            apiKey: "AIzaSyDWNn0fRry4rcLKgdyykiYSCJaZ-JkkQoY",
            authDomain: "no-ads-link.firebaseapp.com",
            projectId: "no-ads-link",
            storageBucket: "no-ads-link.appspot.com",
            messagingSenderId: "543515357049",
            appId: "1:543515357049:web:30e705a755145f7a2a49a8"
        };
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
    }

    addShortLink(oriLink: string, shortLink: string){
        return addDoc(collection(this.db, this.KEY.links), {
            ori_link: oriLink,
            short_link: shortLink,
            created_at: new Date()
        });
    }
    async getLink(shortLink:string) {
        if(shortLink != "" && shortLink){
            const linkRef = collection(this.db, this.KEY.links);
            let q = query(linkRef, where("short_link", "==", shortLink));

            let result = await getDocs(q);
            if(result.size==0)throw new Error("Error No Data");
            return result.docs[0].data();
        }
        return undefined;
    }

    async isExist(shortLink:string) {
        if(shortLink != "" && shortLink){
            const linkRef = collection(this.db, this.KEY.links);
            let q = query(linkRef, where("short_link", "==", shortLink));

            let result = await getDocs(q);
            if(result.size==0)return false;
        }
        return true;
    }
}