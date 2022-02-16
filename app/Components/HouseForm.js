

export function getHouseForm() {
    return `
    <form class="row p-2" onsubmit="app.housesController.createHouse(event)">
            <h3 class="col-12">Create A House</h3>

            <div class="mb-3 col-5">
              <label for="" class="form-label">Bedroom</label>
              <input required type="number" class="form-control" name="bedroom" id="bedroom" aria-describedby="helpId"
                placeholder="">
            </div>

            <div class="mb-3 col-5">
              <label for="" class="form-label">Bathroom</label>
              <input required type="number" class="form-control" name="bathroom" id="bathroom" aria-describedby="helpId"
                placeholder="">
            </div>

            <div class="mb-3 col-5">
              <label for="" class="form-label">SqFoot</label>
              <input required type="number" class="form-control" name="sqFeet" id="sqFeet" aria-describedby="helpId"
                placeholder="">
            </div>

            <div class="mb-3 col-5">
              <label for="" class="form-label">Price</label>
              <input required type="number" class="form-control" name="price" id="price" aria-describedby="helpId"
                placeholder="">
            </div>

            <div class="mb-3 col-5">
              <label for="" class="form-label">Description</label>
              <input required type="text" class="form-control" name="description" id="description" aria-describedby="helpId"
                placeholder="">
            </div>

            <div class="mb-3 col-6">
                <label for="" class="form-label">Color</label>
                <input required type="color" class="form-control" name="color" id="color" aria-describedby="helpId" placeholder="">
            </div>

            <div class="mb-3 col-5">
              <label for="" class="form-label">ImgUrl</label>
              <input required type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
                placeholder="">
            </div>

            <button class="col-4 offset-8 btn btn-success"> Create</button>

          </form>
    `
}