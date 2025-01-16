var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Ravi","How can I help you?"],
        options: ["Packages","Destinations","Experiences","Contact","About Us"]

    },

    packages: {
        title:["What type of package do you need?", "Please select category"],
        options:["Days Pakages", "Locations pakages", "Full packages", "Offers"],
        url : {
            
        }
    },
    
    days: {
        title:["Which date package do you need?"],
        options:['One day package','7 days packages','14 Days packages','30 Days packages'],
        url : {
           
        }
    },

    one: {
        title:["One day package","A one-day stay anywhere in Sri Lanka is equipped with all the facilities including comfortable accommodation, hotels, meals, and transportation."],
        options:['Book Now'],
        url : {
            more:"Packages.html",
            link:["Packages.html"]
        }
    },

    7: {
        title:["Visit five breathtakingly beautiful places in Sri Lanka in seven days. It is equipped with all facilities including comfortable accommodation, hotel, food, transportation."],
        options:['Book Now'],
        url : {
            more:"Packages.html",
            link:["Packages.html"]
        }
    },
    14: {
        title:["Visit 9 amazingly beautiful places in Sri Lanka in 14 days. Comfortable accommodation, hotels, food, transportation etc. are equipped with all facilities."],
        options:['Book Now'],
        url : {
            more:"Packages.html",
            link:["Packages.html"]
        }
    },
    30: {
        title:["Visit many amazing and beautiful places in Sri Lanka for 30 days. Comfortable accommodation, hotels, food, transport etc. are all provided."],
        options:['Book Now'],
        url : {
            more:"Packages.html",
            link:["Packages.html"]
        }
    },


    locations: {
        title:["Thanks for your response","What place would you like to visit?","Please select one of the below options to proceed further"],
        options:['Nuwara eliya package','Ella package','Kandy package','Colombo package','Galle package'],
        url : {
            more:"Packages.html",
            link:["Packages.html","Packages.html","Packages.html","Packages.html","Packages.html"]
        }
    },

    full: {
        title:["Thanks for your response","Which package do you need?","Click on it to know more"],
        options:['Kandy, Nuwara eliya, Ella and Bandarawela full package','Nuwara eliya and Ella package'],
        url : {
            more:"Packages.html",
            link:["Packages.html"]
        }
    },

    offers: {
        title:["Thanks for your response","Which package do you need?"],
        options:['250$ Wild safari package is FREE'],
        url : {
            more:"Packages.html",
            link:["Packages.html"]
        }
    },

    destinations: {
        title:["What place would you like to visit?","Click on it to know more"],
        options:['Galle','Sigiriya','Yala National Park','Ella','Sri Dalada Maligawa','Colombo'],
        url : {
            more:"Destinations.html",
            link:["Destinations.html","Destinations.html","Destinations.html","Destinations.html","Destinations.html","Destinations.html"]
        }
    },
    experiences: {
        title:["What Our Travelers Say","Share your experience with everone"],
        options:['Go to the Experiences Page'],
        url : {
            more:"Experiences.html",
            link:["Experiences.html"]
        }
    },
    contact: {
        title:["Thanks for your response","Click on it to know more"],
        options:['Contact Us'],
        url : {
            more:"Contact.html",
            link:["Contact.html"]
        }
    },
    about: {
        title:["Thanks for your response","About us!!!","Click on it to know more"],
        options:['About us'],
        url : {
            more:"about.html",
            link:["about.html"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}

function sendMessage(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chat-input');
        const message = input.value;
        if (message.trim() !== '') {
            displayMessage('User', message);
            input.value = '';
            fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            })
            .then(response => response.json())
            .then(data => {
                displayMessage('Bot', data.response);
            });
        }
    }
}

function sendButtonMessage(message) {
    displayMessage('User', message);
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        displayMessage('Bot', data.response);
    });
}

function displayMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender.toLowerCase()}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}