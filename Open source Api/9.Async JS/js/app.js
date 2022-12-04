

btn.onclick=function () {
    fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(data => {
        let usrslist = ''
        data.results.forEach(user => {
            usrslist+=`
            <div class="col-lg-3 col-6">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${user.picture.large}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
         </div>
            `    
        });
        document.getElementById('list').innerHTML=usrslist
    })
      .catch(error=> console.log(error))
}

