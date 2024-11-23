import imagePaths from "./imagePath";
import {Service} from '@/types'


const services :Service[]= [
  {
    id: "1",    
    name: "Wimpernbehandlungen",    
    images: [imagePaths.eyelashes],
    description:"Die Augen sind das Fenster zu unserer Seele. Sie haben ihre eigene Sprache. Wir kommunizieren mit Ihnen ohne Worte und dennoch verstehen wir sie alle! Durch einen perfekten Lidstrich, egal ob natürlich oder dekorativ, können wir Ihren Ausdruck noch verstärken.",
  },
  {
    id: "2",
    name: "Augenbrauenbehandlungen ",     
    images: [imagePaths.eyes1],
    description:"Die Augenbrauen sind das größte Augenmerkmal im Gesicht und beeinflussen unseren Gesichtsausdruck entscheidend. In der richtigen Form und Größe, können Sie unseren Augen mehr Ausdruck verleihen und uns um Jahre jünger erscheinen lassen.",
  },
  {
    id: "3",  
    name: "Lippen ",   
    images: [imagePaths.lips1],
    description:"Wer wünscht sich nicht schöne volle natürliche Lippen? Einen zarten Kussmund, der uns verführerisch anlacht. Lippenstift ist eine schöne Sache, aber was ist nach einem stürmischen Kuss oder in der Sauna? Mit Permanent Make Up sind die Lippen perfekt!"
  },
  {
    id: "4",  
    name: "Permanent Make-up ",   
    images: [imagePaths.eyes2],
    description:"Die Augen sind das Fenster zu unserer Seele. Sie haben ihre eigene Sprache. Wir kommunizieren mit Ihnen ohne Worte und dennoch verstehen wir sie alle! Durch einen perfekten Lidstrich, egal ob natürlich oder dekorativ, können wir Ihren Ausdruck noch verstärken.",
  },
  
]
export default services