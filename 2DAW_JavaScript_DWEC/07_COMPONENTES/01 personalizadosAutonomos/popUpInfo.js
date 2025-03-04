/* 1. definicion de la clase. Excitnedo HTML Element
 */
class PopUpInfo extends HTMLElement {
    constructor() {
      // Siempre llamar primero a super en el constructor
      super();}
  
      // La funcionalidad del elemento se escribe aquí
      connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });
    
        // Create spans
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
    
        const icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);
    
        const info = document.createElement("span");
        info.setAttribute("class", "info");
    
        // Take attribute content and put it inside the info span
        const text = this.getAttribute("data-text");
        info.textContent = text;
    
        // Insert icon
        let imgUrl;
        if (this.hasAttribute("img")) {
          imgUrl = this.getAttribute("img");
        } else {
          imgUrl = "img/default.png";
        }
    
        const img = document.createElement("img");
        img.src = imgUrl;
        icon.appendChild(img);



        /*2. La parte del estilo puede ser enviada a un fichero externo y vincularla con link */
        // Create some CSS to apply to the shadow dom
        /* const style = document.createElement("style");
        console.log(style.isConnected);
    
        style.textContent = `
          .wrapper {
            position: relative;
          }
    
          .info {
            font-size: 0.8rem;
            width: 200px;
            display: inline-block;
            border: 1px solid black;
            padding: 10px;
            background: white;
            border-radius: 10px;
            opacity: 0;
            transition: 0.6s all;
            position: absolute;
            bottom: 20px;
            left: 10px;
            z-index: 3;
          }
    
          img {
            width: 1.2rem;
          }
    
          .icon:hover + .info, .icon:focus + .info {
            opacity: 1;
          }
        `; 
        
        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
            
        
        */


        /* 3.se crea el archivo css */
         // Apply external styles to the shadow dom
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "miEstilo.css");
    
        // Attach the created elements to the shadow dom
        shadow.appendChild(linkElem);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
       
    }
}

customElements.define("popup-info", PopUpInfo);


  