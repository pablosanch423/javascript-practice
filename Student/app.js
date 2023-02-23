const selection = document.getElementById('selection');

const students = [
    {name: 'mike', gender: 'male', grade: 'junior'},
    {name: 'lana', gender: 'female', grade: 'senior'},
    {name: 'jonny', gender: 'male', grade: 'senior'},
    {name: 'autumn', gender: 'female', grade: 'senior'},
    {name: 'mia', gender: 'female', grade: 'junior'},
]

students.forEach(student =>{
    document.getElementById('display').innerHTML += `
    <div class="container w-100 p-3 bg-light d-flex justify-content-between mt-4 align-items-center">
    <div id="name">${student.name}</div>
    <div id="gender">${student.gender}</div>
    <div id="grade">${student.grade}</div>
    </div>  
    `
})    

selection.addEventListener('change', () => {
    const o = selection.value;
    document.getElementById('display').innerHTML = ''
    if(o == "All"){
        students.forEach(student =>{
            document.getElementById('display').innerHTML += `
            <div class="container w-100 p-3 bg-light d-flex justify-content-between mt-4 align-items-center">
            <div id="name">${student.name}</div>
            <div id="gender">${student.gender}</div>
            <div id="grade">${student.grade}</div>
            </div>  
            `
        })    
    }
    if(o == "Seniors"){
        document.getElementById('display').innerHTML = ''

        const seniors = students.filter( (student) => {
            return student.grade === 'senior';
        })

        seniors.forEach(senior =>{
            document.getElementById('display').innerHTML += `
            <div class="container w-100 p-3 bg-light d-flex justify-content-between mt-4 align-items-center">
            <div id="name">${senior.name}</div>
            <div id="gender">${senior.gender}</div>
            <div id="grade">${senior.grade}</div>
            </div>  
            `
        })
    }
    if(o == "Juniors"){
        document.getElementById('display').innerHTML = ''

        const Juniors = students.filter( (student) => {
            return student.grade === 'junior';
        })
    
        Juniors.forEach(junior =>{
            document.getElementById('display').innerHTML += `
            <div class="container w-100 p-3 bg-light d-flex justify-content-between mt-4 align-items-center">
            <div id="name">${junior.name}</div>
            <div id="gender">${junior.gender}</div>
            <div id="grade">${junior.grade}</div>
            </div>  
            `
        })
    }
    if(o == "Men"){
        document.getElementById('display').innerHTML = ''

        const Males = students.filter( (student) => {
            return student.gender === 'male';
        })
    
        Males.forEach(male =>{
            document.getElementById('display').innerHTML += `
            <div class="container w-100 p-3 bg-light d-flex justify-content-between mt-4 align-items-center">
            <div id="name">${male.name}</div>
            <div id="gender">${male.gender}</div>
            <div id="grade">${male.grade}</div>
            </div>  
            `
        })
    }
    if(o == "Female"){
        document.getElementById('display').innerHTML = ''

        const Females = students.filter( (student) => {
            return student.gender === 'female';
        })
    
        Females.forEach(female =>{
            document.getElementById('display').innerHTML += `
            <div class="container w-100 p-3 bg-light d-flex justify-content-between mt-4 align-items-center">
            <div id="name">${female.name}</div>
            <div id="gender">${female.gender}</div>
            <div id="grade">${female.grade}</div>
            </div>  
            `
        })
    }
})



