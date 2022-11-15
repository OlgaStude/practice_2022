let id = null;
async function showPosts() {

    let data = await fetch("http://practiceback/posts");
    let posts = await data.json();

    let repeat = null;
    let second = '';

    for (let post of posts) {
        if(repeat == post.title){
            document.querySelector('#container div:last-child p.author').innerHTML += `, <a class='author'  onclick="searchAuthor('${post.author}')" href="#">${post.author}</a>`;
            second += ","+post.author;
            document.querySelector('#container div:last-child .select').outerHTML = `<a class="select" onclick="selectPost('${post.id}', '${post.title}', '${second}', \`${post.description}\`, '${post.year}', '${post.genre}')">Выбрать</a>`;
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
                <a class="select"  onclick="selectPost('${post.id}', '${post.title}', '${post.author}', \`${post.description}\`, '${post.year}', '${post.genre}')">Выбрать</a>
                <button type='submit' onclick="deletePost('${post.id}')">Удалить книгу</button>
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
                    <a class="select"  onclick="selectPost('${post.id}', '${post.title}', '${post.author}', \`${post.description}\`, '${post.year}', '${post.genre}')">Выбрать</a>
                <button type='submit' onclick="deletePost('${post.id}')">Удалить книгу</button>
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
                        document.querySelector('#container div:last-child .select').outerHTML = `<a class="select" onclick="selectPost('${post.id}', '${post.title}', '${second}', \`${post.description}\`, '${post.year}', '${post.genre}')">Выбрать</a>`;
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
                                <a class="select"  onclick="selectPost('${post.id}', '${post.title}', '${post.author}', \`${post.description}\`, '${post.year}', '${post.genre}')">Выбрать</a>
                                <button type='submit' onclick="deletePost('${post.id}')">Удалить книгу</button>
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
                document.querySelector('#container div:last-child .select').outerHTML = `<a class="select" onclick="selectPost('${post.id}', '${post.title}', '${second}', \`${post.description}\`, '${post.year}', '${post.genre}')">Выбрать</a>`;
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
                        <a class="select"  onclick="selectPost('${post.id}', '${post.title}', '${post.author}', \`${post.description}\`, '${post.year}', '${post.genre}')">Выбрать</a>
                                <button type='submit' onclick="deletePost('${post.id}')">Удалить книгу</button>
            </div>`;
            }   
            repeat = post.title;
        }
        
    }
    if(document.getElementById('container').innerHTML == ""){
        let span = document.createElement('span');
        span.innerHTML = "Такого у нас нет...";
        document.getElementById('container').append(span);
    }

    goBack();
}

async function addPost() {
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    let cover = document.querySelector('input[name="cover"]');
    let description = document.querySelector('textarea[name="description"]').value;
    let year = document.querySelector('input[name="year"]').value;
    let genre = document.querySelector('select[name="genree"]').value;

    console.log(document.querySelector('input[name="genre"]'));

    let formData = new FormData();

    formData.append('title', title);
    formData.append('author', author);
    formData.append('cover', cover.files[0]);
    formData.append('description', description);
    formData.append('year', year);
    formData.append('genre', genre);

    let data = await fetch("http://practiceback/posts", {
        method: 'POST',
        body: formData
    });

    data.json();

    document.querySelector('#container').innerHTML = `
                    
                `;

    showPosts();

    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('textarea[name="description"]').value = '';
    document.querySelector('input[name="year"]').value = '';
    document.querySelector('select[name="genree"]').value = '';

}

function selectPost(ids, title, author, description, year, genre) {
    id = ids;

    document.getElementById('update').style.display = "block";

    document.getElementById('update').innerHTML =`
            <h1>Обновить</h1>
            <input type="text" placeholder="Название" name="titleUpd"><br><br>
            <input type="text" placeholder="Автор" name="authorUpd"><br><br>
            <input type="file" name="coverUpd" id=""><br><br>
            <textarea placeholder="Описание" name="descriptionUpd" id="" cols="30" rows="10"></textarea><br><br>
            <input type="text" placeholder="Год" name="yearUpd"><br><br>
            <select name="genreUpd" id="">
                <option value="Комедия">Комедия</option>
                <option value="Ужасы">Ужасы</option>
                <option value="Драма">Драма</option>
                <option value="Философия">Философия</option>
                <option value="Детектив">Детектив</option>
                <option value="Историческая">Историческая</option>
                <option value="Приключения">Приключения</option>
                <option value="Фэнтези">Фэнтези</option>
            </select><br><br>
        
            <button type='submit' class="admin" onclick="updPost()">Редактировать книгу</button>
    `;


    document.querySelector('input[name="titleUpd"]').value = title;
    document.querySelector('input[name="authorUpd"]').value = author;
    document.querySelector('textarea[name="descriptionUpd"]').value = description;
    document.querySelector('input[name="yearUpd"]').value = year;
    document.querySelector('select[name="genreUpd"]').value = genre;

    document.documentElement.scrollTop = document.getElementById('container').clientHeight + 1000;

}

async function updPost() {
    let title = document.querySelector('input[name="titleUpd"]').value;
    let author = document.querySelector('input[name="authorUpd"]').value;
    let cover = document.querySelector('input[name="coverUpd"]');
    let description = document.querySelector('textarea[name="descriptionUpd"]').value;
    let year = document.querySelector('input[name="yearUpd"]').value;
    let genre = document.querySelector('select[name="genreUpd"]').value;

    let formData = new FormData();


    formData.append('title', title);
    formData.append('author', author);
    formData.append('cover', cover.files[0]);
    formData.append('description', description);
    formData.append('year', year);
    formData.append('genre', genre);

    let data = await fetch("http://practiceback/patch/"+id, {
        method: 'POST',
        body: formData
    });
    id = null;
    data.json();

    document.querySelector('#container').innerHTML = `
                    
                `;

    showPosts();

    document.getElementById('adminForms:last-child').remove();
}

async function deletePost(idD){
    let data = await fetch('http://practiceback/posts/'+idD, {
        method: 'DELETE'
    });

    data.json();

    document.querySelector('#container').innerHTML = `
                    
                `;

    showPosts();    
}


showPosts();
