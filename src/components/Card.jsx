function Card() {


  let data = [
    {
      name: "milan",
      title: "fullstack",
    },
    {
      name: "web",
      title: "webdeveloper",
    },
    {
      name: "card",
      title: "this is card",
    },
    {
      name: "my web",
      title: "this is my web",
    },
  ]



  return (


    <>
      <div className="row">
        {
          data.map((val, index) => {
            return (
              <>
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h1>{index+1}</h1>
                    <h5>{val.name}</h5>
                    <h5 class="card-title">{val.title}</h5>
                    <p class="card-text">when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default Card;