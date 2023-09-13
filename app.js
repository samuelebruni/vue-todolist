const { createApp } = Vue

  createApp({
    data() {
      return {
        
        newElement: '',
       
        elementsList: 
        [
          {
            text: 'Comprare le penne',
            done: true
          },
          {
            text: 'Comprare il detersivo',
            done: false
          },
          {
            text: 'Prendere Mike da scuola',
            done: true
          },
          {
            text: 'Guardare la partita',
            done: false
          },
          {
            text: 'Programmare al pc',
            done: false
          },
        ],

      }
    },
    methods: {
      
      //creo la funzione che mi permette di pushare nell'array ciò che digito all'interno dell'input lato html
      pushFunction(){
        let newTask = {
          text: this.newElement,
          done: false
        };
        if(this.newElement){
          this.elementsList.push(newTask);
          this.newElement = '';
        }
      },

      //creo la funzione che mi permette di rimuovere, al click dell'icona x, l'elemento dall'array
      removeFunction(index){
       let removedElement  = this.elementsList.splice(index, 1);
       this.elementsList = this.elementsList.filter(element => element !== removedElement)
      }
    }
  }).mount('#app')