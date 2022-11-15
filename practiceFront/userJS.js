let id = null;
async function showPosts() {

    let data = await fetch("http://practiceback/posts");
    let posts = await data.json();

    let repeat = null;
    let second = '';

    for (let post of posts) {
        if(repeat == post.title){
            document.querySelector('#container div:last-child p.author').innerHTML += `, <a class='author' onclick="searchAuthor('${post.author}')" href="#">${post.author}</a>`;
            second += ","+post.author;
        } else {
            second = post.author;
        document.querySelector('#container').innerHTML += `
        <div>
                    <a class="describe">Подробнее...</a>
                    <a class="close" onclick="closeUp('${post.title}', \`${post.description}\`)"></a>
            <img src='covers/${post.cover}'>
            <h1>${post.title}</h1>
                    <p class='author'><a class='author' onclick="searchAuthor('${post.author}')" href="#">${post.author}</a></p>
                    <p class="desc">${post.description}</p>
                    <h5>${post.year}</h5>
                    <h6>${post.genre}</h6>
        </div>`;
        }   
        repeat = post.title;

    }
    addSort();
} 

function closeUp(title, description){
    document.getElementById('moreInfo').style.display = "block";
    document.body.style.overflow = "hidden";
    let info = document.createElement('div');
    info.id = "info";
    info.innerHTML = `
        <h1>${title}<br><span>Описание:</span></h1>
        <p>${description}</p>
    `;
    document.getElementById('moreInfo').append(info);
}
function returnFunction(){
    document.getElementById('moreInfo').style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById('info').remove();
}

function goBack(){
    let backSpase = document.createElement('input');
    backSpase.type = 'submit';
    backSpase.value = 'отменить сортировку';

    backSpase.onclick = ()=>{
        document.getElementById('container').innerHTML = "";
        showPosts();
        backSpase.remove();
    }
    document.getElementById('backSpace').append(backSpase);
}

async function searchAuthor(authorname){
    document.getElementById('backSpace').innerHTML='';
    let data = await fetch("http://practiceback/posts");
    let posts = await data.json();

    document.getElementById('container').innerHTML = "";



    for (let post of posts){

        if(authorname.toLocaleLowerCase() == post.author.toLocaleLowerCase()){
            
            document.querySelector('#container').innerHTML += `
            <div>
                    <a class="describe">Подробнее...</a>
                    <a class="close" onclick="closeUp('${post.title}', \`${post.description}\`)"></a>

            <img src='covers/${post.cover}'>
            <h1>${post.title}</h1>
                    <p class='author'><a class='author' onclick="searchAuthor('${post.author}')" href="#">${post.author}</a></p>
                    <p class="desc">${post.description}</p>
                    <h5>${post.year}</h5>
                    <h6>${post.genre}</h6>
        </div>`;
        }

        }
        goBack();

} 


function addSort(){
    let posts = document.querySelectorAll('h6');
   
    let set = new Set();
    for (let post of posts){
        set.add(post.innerHTML.toLocaleLowerCase());
    }


    document.getElementById('sorter').innerHTML =`
        `;

    for (let post of set){
        document.getElementById('sorter').innerHTML +=`
        <div class="sorterbody">
            <input type="radio" id="${post}" name="genre">
            <label for="${post}">${post}</lable>
        <div>
        <div class="wall"></div>
        `;
    }
    document.getElementById('sorter').innerHTML +="<br><button type='submit' onclick='sort()'>найти книгу</button>";

    
}

function green(){
    let SB = document.querySelectorAll('.sorterbody');
    for(let sb of SB){
            if(sb.firstElementChild.checked){
                sb.style.backgroundColor = "rgb(65, 150, 65)";
                sb.style.color = "white";
                sb.style.fontWeight = "bold";
            } else {
                sb.style.backgroundColor = "white";
                sb.style.color = "black";
                sb.style.fontWeight = "normal";
            }
    }
}


async function sort(){
    document.getElementById('backSpace').innerHTML='';

    let data = await fetch("http://practiceback/posts");
    let posts = await data.json();

    let repeat = null;
    let second = '';
    document.querySelector('#container').innerHTML = ``;

    let radio = document.querySelectorAll('input[type="radio"]');

        for(let r of radio){
            if(r.checked){
            for (let post of posts){
                if(r.id.toLocaleLowerCase() == post.genre.toLocaleLowerCase()){
                    if(repeat == post.title){
                        document.querySelector('#container div:last-child p.author').innerHTML += `, <a class='author' onclick='searchAuthor("${post.author}")' href='#''>`+post.author+"</a>";
                        second += ","+post.author;
                    } else {
                        second = post.author;
                    document.querySelector('#container').innerHTML += `
                    <div>
                    <a class="describe">Подробнее...</a>
                    <a class="close" onclick="closeUp('${post.title}', \`${post.description}\`)"></a>

                        <img src='covers/${post.cover}'>
                        <h1>${post.title}</h1>
                                <p class='author'><a class='author' onclick="searchAuthor('${post.author}')" href="#">${post.author}</a></p>
                                <p class="desc">${post.description}</p>
                                <h5>${post.year}</h5>
                                <h6>${post.genre}</h6>
                    </div>`;
                    }   
                    repeat = post.title;
                } 
            }
        }
       
        
    }
    if(document.querySelector('#container').innerHTML == ''){
        showPosts();
    } else {
        goBack();
    }
}

function searchBar(event){
    if(event.keyCode == 13){
       search();

    }
}

async function search(){
    document.getElementById('backSpace').innerHTML='';

    let data = await fetch("http://practiceback/posts");
    let posts = await data.json();

    document.getElementById('container').innerHTML = "";

    let searchSTR = document.querySelector('#search');
    let repeat = null;
            
    for (let post of posts) {
        let title = post.title.toLowerCase();
        if(title.indexOf(searchSTR.value.toLowerCase()) >= 0){
            if(repeat == post.title){
                document.querySelector('#container div:last-child p.author').innerHTML += `, <a class='author' onclick='searchAuthor("${post.author}")' href='#''>`+post.author+"</a>";
                second += ","+post.author;
            } else {
                second = post.author;
            document.querySelector('#container').innerHTML += `
            <div>
                    <a class="describe">Подробнее...</a>
                    <a class="close" onclick="closeUp('${post.title}', \`${post.description}\`)"></a>

                <img src='covers/${post.cover}'>
                <h1>${post.title}</h1>
                        <p class='author'><a class='author' onclick="searchAuthor('${post.author}')" href="#">${post.author}</a></p>
                        <p class="desc">${post.description}</p>
                        <h5>${post.year}</h5>
                        <h6>${post.genre}</h6>
            </div>`;
            }   
            repeat = post.title;
        }
        
    }
    if(document.getElementById('container').innerHTML == ""){
        let span = document.createElement('span');
        span.innerHTML = "Такого здесь нет...";
        document.getElementById('container').append(span);
    }

    goBack();
}


showPosts();
